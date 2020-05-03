using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SafetyAndHealth.Authorization;
using SafetyAndHealth.Db;
using SafetyAndHealth.Db.Models;
using SafetyAndHealth.Dto.Read;
using SafetyAndHealth.Dto.Write;

namespace SafetyAndHealth.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        private readonly IMapper _mapper;

        private readonly UserManager<User> _userManager;

        private readonly SignInManager<User> _loginManager;

        public UserController(
            ApplicationDbContext context,
            IMapper mapper,
            UserManager<User> userManager,
            SignInManager<User> loginManager)
        {
            _context = context;
            _mapper = mapper;
            _userManager = userManager;
            _loginManager = loginManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var entities = await _context.Users.ToListAsync();
            var dto = _mapper.Map<IEnumerable<UserDto>>(entities);

            return Ok(dto);
        }

        [HttpPost("registration")]
        public async Task<IActionResult> Registration([FromBody] UserCreateDto dto)
        {
            //if (!ModelState.IsValid)
            //    return BadRequest("Данные не валидны");

            var existUser = await _userManager.FindByNameAsync(dto.UserName);

            if (existUser != null)
                return BadRequest("Логин занят");

            var user = new User
            {
                Email = dto.Email,
                UserName = dto.UserName,
                PositionId = dto.PositionId,
                FirstName = dto.FirstName,
                MiddleName = dto.MiddleName,
                LastName = dto.LastName,
                SecurityStamp = Guid.NewGuid().ToString("D")
            };

            var result = await _userManager.CreateAsync(user, dto.Password);

            if (!result.Succeeded)
                return BadRequest("Ошибка при регистрации");

            var addToRoleResult = await _userManager.AddToRoleAsync(user, Roles.USER);

            if (!addToRoleResult.Succeeded)
            {
                await _userManager.DeleteAsync(user);
                return BadRequest("Ошибка при назначении роли пользователю");
            }

            var dtoUser = new UserDto
            {
                Id = user.Id,
                Email = user.Email,
                PositionId = user.PositionId,
                FirstName = user.FirstName,
                MiddleName = user.MiddleName,
                LastName = user.LastName,
            };

            return Ok(dtoUser);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUserInfo([FromBody] UserUpdateDto dto)
        {
            var user = await _userManager.FindByIdAsync(dto.Id);

            user.Email = dto.Email;
            user.PositionId = dto.PositionId;
            user.FirstName = dto.FirstName;
            user.MiddleName = dto.MiddleName;
            user.LastName = dto.LastName;

            var result = await _userManager.UpdateAsync(user);

            if (!result.Succeeded)
                return BadRequest("Не удалось обновить информацию о пользователе");

            return Ok(dto);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser([FromRoute]string id)
        {
            var result = await _userManager.FindByIdAsync(id);
            await _userManager.DeleteAsync(result);

            return Ok();
        }
    }
}

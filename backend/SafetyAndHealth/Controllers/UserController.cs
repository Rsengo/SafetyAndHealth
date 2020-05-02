using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SafetyAndHealth.Db;
using SafetyAndHealth.Dto.Read;

namespace SafetyAndHealth.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        private readonly IMapper _mapper;

        public UserController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IActionResult> GetAll()
        {
            var entities = await _context.Users.ToListAsync();
            var dto = _mapper.Map<IEnumerable<UserDto>>(entities);

            return Ok(dto);
        }
    }
}

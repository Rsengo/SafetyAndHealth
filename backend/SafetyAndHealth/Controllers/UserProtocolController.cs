using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SafetyAndHealth.Db;
using SafetyAndHealth.Db.Models;
using SafetyAndHealth.Dto.Read;
using SafetyAndHealth.Dto.Write;

namespace SafetyAndHealth.Controllers
{
    [ApiController]
    [Route("api/userprotocol")]
    public class UserProtocolController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        private readonly IMapper _mapper;

        public UserProtocolController(
            ApplicationDbContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var entities = await _context.UserProtocols
                .Include(x => x.File)
                .ToListAsync();
            var dto = _mapper.Map<IEnumerable<UserDto>>(entities);

            return Ok(dto);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] UserProtocolCreateUpdateDto dto)
        {
            var userProtocol = _mapper.Map<UserProtocol>(dto);
            _context.UserProtocols.Add(userProtocol);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UserProtocolCreateUpdateDto dto)
        {
            var userProtocol = _mapper.Map<UserProtocol>(dto);
            _context.UserProtocols.Update(userProtocol);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] long id)
        {
            var userProtocol = new UserProtocol()
            {
                Id = id
            };

            _context.Remove(userProtocol);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}

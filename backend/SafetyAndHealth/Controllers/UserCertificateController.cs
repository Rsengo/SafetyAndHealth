﻿using System.Collections.Generic;
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
    [Route("api/usercertificate")]
    public class UserCertificateController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        private readonly IMapper _mapper;

        public UserCertificateController(
            ApplicationDbContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var entities = await _context.UserCertificates
                .Include(x => x.File)
                .ToListAsync();
            var dto = _mapper.Map<IEnumerable<UserDto>>(entities);

            return Ok(dto);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] UserCertificateCreateUpdateDto dto)
        {
            var userCertificate = _mapper.Map<UserCertificate>(dto);
            _context.UserCertificates.Add(userCertificate);
            await _context.SaveChangesAsync();
            var response = _mapper.Map<UserCertificateDto>(userCertificate);

            return Ok(response);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UserCertificateCreateUpdateDto dto)
        {
            var userCertificate = _mapper.Map<UserCertificate>(dto);
            _context.UserCertificates.Update(userCertificate);
            await _context.SaveChangesAsync();
            var response = _mapper.Map<UserCertificateDto>(userCertificate);

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] long id)
        {
            var userCertificate = new UserCertificate()
            {
                Id = id
            };

            _context.Remove(userCertificate);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}

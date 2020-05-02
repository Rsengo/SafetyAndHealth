using System;
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
    [Route("api/[controller]")]
    public class CertificateController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        private readonly IMapper _mapper;

        public CertificateController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var entities = await _context.Certificates.ToListAsync();
            var dto = _mapper.Map<IEnumerable<CertificateDto>>(entities);

            return Ok(dto);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CertificateCreateUpdateDto dto)
        {
            var certificate = _mapper.Map<Certificate>(dto);
            _context.Certificates.Add(certificate);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] CertificateCreateUpdateDto dto)
        {
            var certificate = _mapper.Map<Certificate>(dto);
            _context.Certificates.Update(certificate);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] long id)
        {
            var certificate = new Certificate()
            {
                Id = id
            };

            _context.Remove(certificate);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}

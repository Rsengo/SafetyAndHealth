using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SafetyAndHealth.Db;
using SafetyAndHealth.Db.Models;
using SafetyAndHealth.Dto.Read;
using SafetyAndHealth.Dto.Write;
using SafetyAndHealth.IO.Abstract;
using SafetyAndHealth.Services.Abstract;

namespace SafetyAndHealth.Controllers
{
    [ApiController]
    [Route("api/documenttemplate")]
    public class DocumentTemplateController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        private readonly IMapper _mapper;

        private readonly IFilePathGenerator _filePathGenerator;

        private readonly IFileWorker _fileWorker;

        public DocumentTemplateController(
            ApplicationDbContext context,
            IMapper mapper,
            IFilePathGenerator filePathGenerator,
            IFileWorker fileWorker)
        {
            _context = context;
            _mapper = mapper;
            _filePathGenerator = filePathGenerator;
            _fileWorker = fileWorker;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var documents = await _context.DocumentTemplates.ToListAsync();
            var dto = _mapper.Map<IEnumerable<DocumentTemplateDto>>(documents);

            return Ok(dto);
        }

        [HttpGet("download/{id}")]
        public async Task<IActionResult> Download([FromRoute] long id)
        {
            var document = await _context.DocumentTemplates
                .Where(x => x.Id == id)
                .Select(x => x.File)
                .SingleOrDefaultAsync();

            var stream = _fileWorker.ReadFile(document.Path);

            return File(stream, "application/octet-stream", document.Name);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromForm] DocumentTemplateCreateUpdateDto dto)
        {
            var document = _mapper.Map<DocumentTemplate>(dto);

            var dirPath = _filePathGenerator.CreateDocumentTemplateDirectory();
            var fileInfo = _fileWorker.SaveFileAsync(dirPath, dto.File);
            var fileDescription = _mapper.Map<FileDescription>(fileInfo);

            document.File = fileDescription;

            await _context.SaveChangesAsync();

            var response = _mapper.Map<DocumentTemplateDto>(document);

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveFiles([FromRoute] long id)
        {
            var document = await _context.DocumentTemplates
                .Include(x => x.File)
                .SingleOrDefaultAsync(x => x.Id == id);

            _fileWorker.RemoveFile(document.File.Path);
            _context.FileDescriptions.Remove(document.File);

            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}

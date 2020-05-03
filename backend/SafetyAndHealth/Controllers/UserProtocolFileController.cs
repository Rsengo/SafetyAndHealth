using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SafetyAndHealth.Db;
using SafetyAndHealth.Db.Models;
using SafetyAndHealth.Dto.Write;
using SafetyAndHealth.IO.Abstract;
using SafetyAndHealth.Services.Abstract;

namespace SafetyAndHealth.Controllers
{
    [ApiController]
    [Route("api/userprotocol/file")]
    public class UserProtocolFileController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        private readonly IMapper _mapper;

        private readonly IFilePathGenerator _filePathGenerator;

        private readonly IFileWorker _fileWorker;

        public UserProtocolFileController(
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

        [HttpPost]
        public async Task<IActionResult> SaveFile([FromForm] FileCreateUpdateDto dto)
        {
            // TODO remove files if exist
            var protocol = await _context.UserProtocols
                .Include(x => x.File)
                .SingleOrDefaultAsync(x => x.Id == dto.Id);

            if (dto.File == null)
                return BadRequest("Прикрепленный файл не найден");

            var filePath = _filePathGenerator.CreateCertificateDirectoryPath(
                    protocol.UserId,
                    protocol.Id);

            var fileInfo = await _fileWorker.SaveFileAsync(filePath, dto.File);
            var fileDescription = _mapper.Map<FileDescription>(fileInfo);

            // TODO check and set entry state
            protocol.File = fileDescription;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveFiles([FromRoute] long id)
        {
            var protocol = await _context.UserProtocols
                .Include(x => x.File)
                .SingleOrDefaultAsync(x => x.Id == id);

            _fileWorker.RemoveFile(protocol.File.Path);
            _context.FileDescriptions.Remove(protocol.File);

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult GetCertificate(long id)
        {
            var fileInfo = _context.UserProtocols
                .Where(x => x.Id == id)
                .Select(x => x.File)
                .SingleOrDefault();

            var fileStream = _fileWorker.ReadFile(fileInfo.Path);

            return File(fileStream, "application/octet-stream", fileInfo.Name);
        }
    }
}

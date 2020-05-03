using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using SafetyAndHealth.IO.Abstract;

namespace SafetyAndHealth.IO
{
    public class FileWorker : IFileWorker
    {
        public Stream ReadFile(string path)
        {
            return new FileStream(path, FileMode.Open);
        }

        public void RemoveFile(string path)
        {
            if (File.Exists(path))
                File.Delete(path);
        }

        public async Task<FileInfo> SaveFileAsync(string path, IFormFile formFile)
        {
            if (!Directory.Exists(path))
                Directory.CreateDirectory(path);

            var filePath = Path.Combine(path, formFile.FileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await formFile.CopyToAsync(fileStream);
            }

            return new FileInfo
            {
                Name = formFile.FileName,
                Path = filePath
            };
        }
    }
}

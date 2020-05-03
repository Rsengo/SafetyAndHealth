using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace SafetyAndHealth.IO.Abstract
{
    public interface IFileWorker
    {
        Task<FileInfo> SaveFileAsync(string path, IFormFile formFile);

        Stream ReadFile(string path);

        void RemoveFile(string path);
    }
}

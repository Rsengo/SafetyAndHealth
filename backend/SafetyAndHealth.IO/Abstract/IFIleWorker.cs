using System.IO;
using System.Threading.Tasks;

namespace SafetyAndHealth.IO.Abstract
{
    public interface IFIleWorker
    {
        Task SaveFile(string path, byte[] data);

        Task SaveFile(string path, Stream stream);

        Task<Stream> ReadFile(string path);

        Task RemoveFile(string path);

        Task UpdateFile(string path);
    }
}

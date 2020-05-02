using System.IO;
using System.Threading.Tasks;
using SafetyAndHealth.IO.Abstract;

namespace SafetyAndHealth.IO
{
    public class FileWorker : IFIleWorker
    {
        public FileWorker()
        {
        }

        public Task<Stream> ReadFile(string path)
        {
            throw new System.NotImplementedException();
        }

        public Task RemoveFile(string path)
        {
            throw new System.NotImplementedException();
        }

        public Task SaveFile(string path, byte[] data)
        {
            throw new System.NotImplementedException();
        }

        public Task SaveFile(string path, Stream stream)
        {
            throw new System.NotImplementedException();
        }

        public Task UpdateFile(string path)
        {
            throw new System.NotImplementedException();
        }
    }
}

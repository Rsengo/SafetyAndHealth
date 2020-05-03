using System;
namespace SafetyAndHealth.Services.Abstract
{
    public interface IFilePathGenerator
    {
        string CreateCertificateDirectoryPath(string userId, long certificateId);

        string CreateProtocolDirectoryPath(string userId, long certificateId);
    }
}

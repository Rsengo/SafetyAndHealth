using System;
using System.IO;
using Microsoft.Extensions.Options;
using SafetyAndHealth.Services.Abstract;

namespace SafetyAndHealth.Services
{
	public class FilePathGenerator : IFilePathGenerator
	{
		private readonly AppSettings _appSettings;

		public FilePathGenerator(IOptions<AppSettings> appSettings)
		{
			_appSettings = appSettings.Value;
		}

        public string CreateCertificateDirectoryPath(string userId, long certificateId)
        {
            return Path.Combine(
                _appSettings.FileBasePath,
                userId,
                certificateId.ToString(),
                _appSettings.CertificateFolder);
        }

        public string CreateDocumentTemplateDirectory()
        {
            return Path.Combine(
                _appSettings.FileBasePath,
                _appSettings.DocumentTemplateFolder);
        }

        public string CreateProtocolDirectoryPath(string userId, long certificateId)
        {
            return Path.Combine(
                _appSettings.FileBasePath,
                userId,
                certificateId.ToString(),
                _appSettings.ProtocolFolder);
        }
    }
}

using System;
namespace SafetyAndHealth.Db.Models
{
    public class UserCertificate : RelationalEntity
    {
        public string SertificateNumber { get; set; }

        public string ProtocolNumber { get; set; }

        public DateTime StartDate { get; set; }

        public long? Group { get; set; }

        public User User { get; set; }

        public string UserId { get; set; }

        public FileDescription CertificateFile { get; set; }

        public long? CertificateFileId { get; set; }

        public FileDescription ProtocolFile { get; set; }

        public long? ProtocolFileId { get; set; }

        public Certificate Certificate { get; set; }

        public long SertificateId { get; set; }
    }
}

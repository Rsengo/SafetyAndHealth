using System;
namespace SafetyAndHealth.Db.Models
{
    public class UserProtocol : RelationalEntity
    {
        public string Number { get; set; }

        public DateTime StartDate { get; set; }

        public User User { get; set; }

        public string UserId { get; set; }

        public FileDescription File { get; set; }

        public long? FileId { get; set; }

        public Certificate Certificate { get; set; }

        public long CertificateId { get; set; }
    }
}

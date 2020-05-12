using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace SafetyAndHealth.Db.Models
{
    public class User : IdentityUser
    {
        public Position Position { get; set; }

        public long? PositionId { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        //TODO format
        public string ContactPhoneNumber { get; set; }

        public ICollection<UserCertificate> UserCertificates { get; set; }

        public ICollection<UserProtocol> UserProtocols { get; set; }
    }
}

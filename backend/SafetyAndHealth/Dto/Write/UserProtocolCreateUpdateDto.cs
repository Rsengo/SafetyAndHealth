using System;
using Newtonsoft.Json;
using SafetyAndHealth.Json.Converters;

namespace SafetyAndHealth.Dto.Write
{
    public class UserProtocolCreateUpdateDto
    {
        public string Number { get; set; }

        public DateTime StartDate { get; set; }

        public string UserId { get; set; }

        public long CertificateId { get; set; }
    }
}

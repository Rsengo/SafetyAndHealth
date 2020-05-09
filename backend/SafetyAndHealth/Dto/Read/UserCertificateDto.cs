using System;
using Newtonsoft.Json;
using SafetyAndHealth.Json.Converters;

namespace SafetyAndHealth.Dto.Read
{
    public class UserCertificateDto: BaseDtoEntity
    {
        public string Number { get; set; }

        [JsonConverter(typeof(DateConverter))]
        public DateTime StartDate { get; set; }

        public long? Group { get; set; }

        public string UserId { get; set; }

        public FileDescriptionDto File { get; set; }

        public long CertificateId { get; set; }

        [JsonConverter(typeof(DateConverter))]
        public DateTime? ExpiresDate { get; set; }
    }
}

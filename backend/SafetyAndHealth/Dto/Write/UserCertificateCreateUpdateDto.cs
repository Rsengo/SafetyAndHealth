using System;
using Newtonsoft.Json;
using SafetyAndHealth.Json.Converters;

namespace SafetyAndHealth.Dto.Write
{
    public class UserCertificateCreateUpdateDto : BaseDtoEntity
    {
        public string SertificateNumber { get; set; }

        public string ProtocolNumber { get; set; }

        [JsonConverter(typeof(DateConverter))]
        public DateTime StartDate { get; set; }

        public long? Group { get; set; }

        public string UserId { get; set; }

        public long CertificateId { get; set; }
    }
}

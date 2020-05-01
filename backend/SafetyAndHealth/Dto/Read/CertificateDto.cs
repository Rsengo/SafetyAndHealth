using System;
using Newtonsoft.Json;
using SafetyAndHealth.Json.Converters;

namespace SafetyAndHealth.Dto.Read
{
    public class CertificateDto : BaseDtoDictionary
    {
        [JsonConverter(typeof(DateConverter))]
        public TimeSpan ValidationTime { get; set; }

        public bool HasGroup { get; set; }
    }
}

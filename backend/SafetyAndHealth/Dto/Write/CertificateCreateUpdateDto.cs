using System;
using Newtonsoft.Json;
using SafetyAndHealth.Json.Converters;

namespace SafetyAndHealth.Dto.Write
{
    public class CertificateCreateUpdateDto : BaseDtoDictionary
    {
        [JsonConverter(typeof(DateConverter))]
        public TimeSpan ValidationTime { get; set; }

        public bool HasGroup { get; set; }
    }
}

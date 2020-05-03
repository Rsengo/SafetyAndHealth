using Microsoft.AspNetCore.Http;

namespace SafetyAndHealth.Dto.Write
{
    public class FileCreateUpdateDto : BaseDtoEntity
    {
        public IFormFile File { get; set; }
    }
}

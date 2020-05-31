using System;
namespace SafetyAndHealth.Dto.Write
{
    public class DocumentTemplateCreateUpdateDto : FileCreateUpdateDto
    {
        public string Name { get; set; }

        public string Description { get; set; }
    }
}

using System;
using AutoMapper;
using SafetyAndHealth.Db.Models;
using SafetyAndHealth.Dto.Read;
using SafetyAndHealth.Dto.Write;

namespace SafetyAndHealth.Mapping
{
    public class DocumentTemplateMappingProfile : Profile
    {
        public DocumentTemplateMappingProfile()
        {
            CreateMap<DocumentTemplate, DocumentTemplateDto>()
                .IncludeAllDerived();

            CreateMap<DocumentTemplateCreateUpdateDto, DocumentTemplate>()
                .ForMember(x => x.File, opt => opt.Ignore());
        }
    }
}

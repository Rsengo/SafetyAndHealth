using System;
using AutoMapper;
using SafetyAndHealth.Db.Models;
using SafetyAndHealth.Dto.Read;

namespace SafetyAndHealth.Mapping
{
    public class FileDescriptionMappingProfile : Profile
    {
        public FileDescriptionMappingProfile()
        {
            CreateMap<FileDescription, FileDescriptionDto>();
        }
    }
}

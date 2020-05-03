using System;
using AutoMapper;
using SafetyAndHealth.Db.Models;
using SafetyAndHealth.Dto.Read;
using SafetyAndHealth.IO;

namespace SafetyAndHealth.Mapping
{
    public class FileDescriptionMappingProfile : Profile
    {
        public FileDescriptionMappingProfile()
        {
            CreateMap<FileDescription, FileDescriptionDto>();
            CreateMap<FileInfo, FileDescription>();
        }
    }
}

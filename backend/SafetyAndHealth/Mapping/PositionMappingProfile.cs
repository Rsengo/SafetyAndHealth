using System;
using AutoMapper;
using SafetyAndHealth.Db.Models;
using SafetyAndHealth.Dto.Read;
using SafetyAndHealth.Dto.Write;

namespace SafetyAndHealth.Mapping
{
    public class PositionMappingProfile : Profile
    {
        public PositionMappingProfile()
        {
            CreateMap<Position, PositionDto>();
            CreateMap<PositionCreateUpdateDto, Position>();
        }
    }
}

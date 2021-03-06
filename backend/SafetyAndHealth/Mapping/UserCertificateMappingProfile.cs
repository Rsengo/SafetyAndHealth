﻿using System;
using AutoMapper;
using SafetyAndHealth.Db.Models;
using SafetyAndHealth.Dto.Read;
using SafetyAndHealth.Dto.Write;

namespace SafetyAndHealth.Mapping
{
    public class UserCertificateMappingProfile : Profile
    {
        public UserCertificateMappingProfile()
        {
            CreateMap<UserCertificate, UserCertificateDto>()
                .IncludeAllDerived()
                .ForMember(
                    x => x.ExpiresDate,
                    opt => opt.MapFrom(
                        src => src.StartDate + src.Certificate.ValidationTime));

            CreateMap<UserCertificateCreateUpdateDto, UserCertificate>();
        }
    }
}

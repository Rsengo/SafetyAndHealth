using System;
using AutoMapper;
using SafetyAndHealth.Db.Models;
using SafetyAndHealth.Dto.Read;

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
        }
    }
}

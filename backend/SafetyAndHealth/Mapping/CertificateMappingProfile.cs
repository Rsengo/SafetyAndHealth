using AutoMapper;
using SafetyAndHealth.Dto.Read;

namespace SafetyAndHealth.Mapping
{
    public class CertificateMappingProfile : Profile
    {
        public CertificateMappingProfile()
        {
            CreateMap<CertificateMappingProfile, CertificateDto>();
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SafetyAndHealth.Db.Models;

namespace SafetyAndHealth.Db.Mappings
{
    public class UserCertificateMapping : IEntityTypeConfiguration<UserCertificate>
    {
        public void Configure(EntityTypeBuilder<UserCertificate> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).ValueGeneratedOnAdd();

            builder.HasOne(x => x.Certificate)
                .WithMany()
                .HasForeignKey(x => x.CertificateId)
                .OnDelete(DeleteBehavior.Cascade)
                .IsRequired();

            builder.HasOne(x => x.CertificateFile)
                .WithMany()
                .HasForeignKey(x => x.CertificateFileId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(x => x.ProtocolFile)
                .WithMany()
                .HasForeignKey(x => x.ProtocolFileId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(x => x.User)
                .WithMany(x => x.UserCertificates)
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}

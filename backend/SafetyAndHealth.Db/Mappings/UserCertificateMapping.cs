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

            builder.Property(x => x.Number).IsRequired();
            builder.Property(x => x.StartDate).IsRequired();

            builder.HasOne(x => x.Certificate)
                .WithMany()
                .HasForeignKey(x => x.CertificateId)
                .OnDelete(DeleteBehavior.Cascade)
                .IsRequired();

            builder.HasOne(x => x.File)
                .WithOne()
                .HasForeignKey<UserCertificate>(x => x.FileId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(x => x.User)
                .WithMany(x => x.UserCertificates)
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}

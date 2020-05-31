using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SafetyAndHealth.Db.Models;

namespace SafetyAndHealth.Db.Mappings
{
    public class UserProtocolMapping : IEntityTypeConfiguration<UserProtocol>
    {
        public void Configure(EntityTypeBuilder<UserProtocol> builder)
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
                .HasForeignKey<UserProtocol>(x => x.FileId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(x => x.User)
                .WithMany(x => x.UserProtocols)
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}

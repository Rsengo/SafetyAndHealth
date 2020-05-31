using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SafetyAndHealth.Db.Generators;
using SafetyAndHealth.Db.Models;

namespace SafetyAndHealth.Db.Mappings
{
    public class BriefingMapping : IEntityTypeConfiguration<Briefing>
    {
        public void Configure(EntityTypeBuilder<Briefing> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).ValueGeneratedOnAdd();

            builder.Property(x => x.Name).IsRequired();
            builder.Property(x => x.Created)
                .HasValueGenerator<DateTimeGenerator>()
                .IsRequired();

            builder
                .HasOne(x => x.Instructor)
                .WithMany()
                .HasForeignKey(x => x.InstructorId)
                .OnDelete(DeleteBehavior.Cascade)
                .IsRequired();


            builder
                .HasOne(x => x.TextFile)
                .WithOne()
                .HasForeignKey<Briefing>(x => x.TextFileId)
                .OnDelete(DeleteBehavior.Cascade)
                .IsRequired();

            builder
                .HasOne(x => x.Type)
                .WithMany()
                .HasForeignKey(x => x.TypeId)
                .OnDelete(DeleteBehavior.Cascade)
                .IsRequired();
        }
    }
}
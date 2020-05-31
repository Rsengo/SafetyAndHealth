using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SafetyAndHealth.Db.Models;

namespace SafetyAndHealth.Db.Mappings
{
    public class BriefingJournalRecordMapping : IEntityTypeConfiguration<BriefingJournalRecord>
    {
        public void Configure(EntityTypeBuilder<BriefingJournalRecord> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).ValueGeneratedOnAdd();

            builder
                .HasOne(x => x.User)
                .WithMany()
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.Cascade)
                .IsRequired();

            builder
                .HasOne(x => x.Briefing)
                .WithMany()
                .HasForeignKey(x => x.BriefingId)
                .OnDelete(DeleteBehavior.Cascade)
                .IsRequired();
        }
    }
}
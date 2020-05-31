using System;
namespace SafetyAndHealth.Db.Models
{
    public class BriefingJournalRecord: RelationalEntity
    {
        public Briefing Briefing { get; set; }

        public long BriefingId { get; set; }

        public User User { get; set; }

        public string UserId { get; set; }

        public DateTime DateOfPassage { get; set; }
    }
}

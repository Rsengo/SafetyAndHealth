using System;
namespace SafetyAndHealth.Db.Models
{
    public class Briefing : RelationalDictionary
    {
        public string Description { get; set; }

        public DateTime Created { get; set; }

        public User Instructor { get; set; }

        public string InstructorId { get; set; }

        public string MediaUrl { get; set; }

        public FileDescription TextFile { get; set; }

        public long TextFileId { get; set; }

        public BriefingType Type { get; set; }

        public long TypeId { get; set; }
    }
}

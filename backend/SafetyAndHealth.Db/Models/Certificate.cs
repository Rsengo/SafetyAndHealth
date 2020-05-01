using System;

namespace SafetyAndHealth.Db.Models
{
    public class Certificate : RelationalDictionary
    {
        public TimeSpan ValidationTime { get; set; }

        public bool HasGroup { get; set; }
    }
}

using System;

namespace SafetyAndHealth.Db.Models
{
    public abstract class RelationalDictionary : RelationalEntity
    {
        public string Name { get; set; }
    }
}

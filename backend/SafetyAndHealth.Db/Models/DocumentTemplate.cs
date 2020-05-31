using System;
namespace SafetyAndHealth.Db.Models
{
    public class DocumentTemplate : RelationalDictionary
    {
        public FileDescription File { get; set; }

        public string Description { get; set; }
    }
}

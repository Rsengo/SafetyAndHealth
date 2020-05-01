using System;
using Newtonsoft.Json.Converters;

namespace SafetyAndHealth.Json.Converters
{
    public class DateConverter: IsoDateTimeConverter
    {
        public DateConverter()
        {
            DateTimeFormat = "yyyy-MM-dd";
        }
    }
}

using System;
using System.Diagnostics.CodeAnalysis;
using Newtonsoft.Json;

namespace SafetyAndHealth.Json.Converters
{
    public class TimeSpanConverter : JsonConverter<TimeSpan>
    {
        public override TimeSpan ReadJson(
            JsonReader reader,
            Type objectType,
            [AllowNull] TimeSpan existingValue,
            bool hasExistingValue,
            JsonSerializer serializer)
        {
            var value = reader.Value.ToString();
            
            if (!long.TryParse(value, out var ticks))
            {
                throw new JsonReaderException("Invalid ticks count");
            }

            return TimeSpan.FromTicks(ticks);
        }

        public override void WriteJson(
            JsonWriter writer,
            [AllowNull] TimeSpan value,
            JsonSerializer serializer)
        {
            writer.WriteValue(value.Ticks);
        }
    }
}

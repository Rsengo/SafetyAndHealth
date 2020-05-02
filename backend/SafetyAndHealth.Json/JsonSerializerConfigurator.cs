using System;
using System.Text.Json;

namespace SafetyAndHealth.Json
{
    public static class JsonSerializerConfigurator
    {
        public static void Configure(JsonSerializerOptions options)
        {
            options.IgnoreNullValues = true;
            options.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
        }
    }
}

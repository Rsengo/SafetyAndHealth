using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.ValueGeneration;

namespace SafetyAndHealth.Db.Generators
{
    public class DateTimeGenerator : ValueGenerator<DateTime>
    {
        public override bool GeneratesTemporaryValues => false;

        public override DateTime Next([NotNull] EntityEntry entry)
        {
            return DateTime.UtcNow;
        }
    }
}

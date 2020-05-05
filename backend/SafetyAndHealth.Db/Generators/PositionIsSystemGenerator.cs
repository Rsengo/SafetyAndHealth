using System;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.ValueGeneration;
using SafetyAndHealth.Authorization;
using SafetyAndHealth.Db.Models;

namespace SafetyAndHealth.Db.Generators
{
    public class PositonIsSystemGenerator : ValueGenerator<bool>
    {
        public override bool GeneratesTemporaryValues => false;

        public override bool Next(EntityEntry entry)
        {
            if (entry.Entity is Position position)
            {
                return position.Name == SystemPositions.LABOR_SAFETY_OFFICER;
            }

            return false;
        }
    }
}

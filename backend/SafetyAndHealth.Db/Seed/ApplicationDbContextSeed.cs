using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using SafetyAndHealth.Authorization;
using SafetyAndHealth.Db.Models;

namespace SafetyAndHealth.Db.Seed
{
    public class ApplicationDbContextSeed
    {
        private IPasswordHasher<User> _hasher;

        public ApplicationDbContextSeed()
        {
            _hasher = new PasswordHasher<User>();
        }

        public async Task SeedAsync(ApplicationDbContext ctx)
        {
            if (ctx.Users.Any())
                return;

            var roles = GetDefaultRoles();

            ctx.Roles.AddRange(roles);
            await ctx.SaveChangesAsync();

            var position = new Position
            {
                Name = SystemPositions.LABOR_SAFETY_OFFICER,
                IsSystem = false
            };

            ctx.Positions.Add(position);
            await ctx.SaveChangesAsync();

            var user = new User
            {
                Id = "308872d9-b307-490b-97f5-cae0e1766bfd",
                UserName = "admin",
                NormalizedUserName = "ADMIN",
                Email = "admin@admin.com",
                NormalizedEmail = "ADMIN@ADMIN.COM",
                FirstName = "Admin",
                LastName = "Pcholka",
                PositionId = position.Id,
                SecurityStamp = Guid.NewGuid().ToString("D")
            };

            user.PasswordHash = _hasher.HashPassword(user, "admin");

            ctx.Users.Add(user);
            await ctx.SaveChangesAsync();

            var userRole = new IdentityUserRole<string>
            {
                UserId = user.Id,
                RoleId = ctx.Roles.Single(x => x.Name == Roles.ADMIN).Id
            };

            ctx.UserRoles.Add(userRole);
            await ctx.SaveChangesAsync();
        }

        private static IEnumerable<IdentityRole> GetDefaultRoles()
        {
            var roleNames = new[]
            {
                Roles.ADMIN,
                Roles.USER
            };
            var roles = roleNames.Select(x => new IdentityRole
            {
                Id = Guid.NewGuid().ToString("D"),
                ConcurrencyStamp = Guid.NewGuid().ToString("D"),
                Name = x,
                NormalizedName = x.ToUpperInvariant()
            });

            return roles;
        }
    }
}

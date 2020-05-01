using System;
namespace SafetyAndHealth.Dto.Read
{
    public class UserDto
    {
        public string Email { get; set; }

        public string UserName { get; set; }

        public long? PositionId { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }
    }
}

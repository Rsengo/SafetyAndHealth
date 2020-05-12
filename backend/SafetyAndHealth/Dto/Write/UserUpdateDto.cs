using System;
namespace SafetyAndHealth.Dto.Write
{
    public class UserUpdateDto
    {
        public string Id { get; set; }

        public string Email { get; set; }

        public long? PositionId { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        // TODO: format
        public string ContactPhoneNumber { get; set; }
    }
}

namespace SafetyAndHealth.Mailing
{
    /// <summary>
    ///     Настройки SMTP
    /// </summary>
    public sealed class MailingOptions
    {
        /// <summary>
        ///     Имя отправителя.
        /// </summary>
        public string DisplayName { get; set; }

        /// <summary>
        ///     Домен.
        /// </summary>
        public string Domain { get; set; }

        /// <summary>
        ///     Полный E-mail.
        /// </summary>
        public string Email =>
            $"{Login}@{Domain}";

        /// <summary>
        ///     Использовать SSL.
        /// </summary>
        public bool? EnableSsl { get; set; }

        /// <summary>
        ///     SMTP хост.
        /// </summary>
        public string Host { get; set; }

        /// <summary>
        ///     Логин.
        /// </summary>
        public string Login { get; set; }

        /// <summary>
        ///     Пароль.
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        ///     Порт.
        /// </summary>
        public int Port { get; set; }

        /// <summary>
        ///     Таймаут запроса.
        /// </summary>
        public int? TimeOut { get; set; }
    }
}
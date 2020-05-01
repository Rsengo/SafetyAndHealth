namespace SafetyAndHealth.Notifications
{
    /// <summary>
    ///     Настройки уведомлений.
    /// </summary>
    public sealed class NotificationOptions<TOptions>
        where TOptions : class
    {
        /// <summary>
        ///     Расписание в формате Cron.
        /// </summary>
        public string Cron { get; set; }

        /// <summary>
        ///     Динамические дополнительные поля для уведомлений.
        /// </summary>
        public TOptions DynamicOptions { get; set; }
    }
}
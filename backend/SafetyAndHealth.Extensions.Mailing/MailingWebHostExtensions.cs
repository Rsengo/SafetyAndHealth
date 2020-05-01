namespace SafetyAndHealth.Extensions.Mailing
{
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;

    /// <summary>
    ///     Расширения <see cref="IWebHostBuilder" />
    ///     для сервиса отправки Email-сообщений.
    /// </summary>
    public static class MailingWebHostExtensions
    {
        /// <summary>
        ///     Добавление почтового сервиса.
        /// </summary>
        /// <param name="webHost"> Билдер хоста. </param>
        /// <param name="sectionPath">
        ///     Путь к секции настроек почты <see cref="IConfiguration" />.
        ///     Если передан null, используется дефолтная секция.
        /// </param>
        /// <returns> Билдер хоста. </returns>
        public static IWebHostBuilder UseMailingService(
            this IWebHostBuilder webHost,
            string sectionPath)
        {
            return webHost.ConfigureServices((ctx, services) =>
            {
                var config = ctx.Configuration;
                var section = config.GetSection(sectionPath ?? MailingServicesExtensions.DEFAULT_SECTION);
                services.AddMailService(section);
            });
        }

        /// <summary>
        ///     Добавление почтового сервиса.
        /// </summary>
        /// <param name="webHost"> Билдер хоста. </param>
        /// <param name="useRoot"> Получение настроек из корня вместо дефолтной секции. </param>
        /// <returns> Билдер хоста. </returns>
        public static IWebHostBuilder UseMailingService(
            this IWebHostBuilder webHost,
            bool useRoot = false)
        {
            return webHost.ConfigureServices((ctx, services) =>
            {
                var config = ctx.Configuration;
                var section = useRoot
                    ? config
                    : config.GetSection(MailingServicesExtensions.DEFAULT_SECTION);
                services.AddMailService(section);
            });
        }
    }
}

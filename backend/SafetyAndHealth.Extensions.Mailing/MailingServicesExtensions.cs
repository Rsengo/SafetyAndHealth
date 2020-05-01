using System;

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

using SafetyAndHealth.Mailing;
using SafetyAndHealth.Mailing.Abstractions;

namespace SafetyAndHealth.Extensions.Mailing
{
    /// <summary>
    ///     Расширения <see cref="IServiceCollection" />
    ///     для сервиса отправки Email-сообщений.
    /// </summary>
    public static class MailingServicesExtensions
    {
        /// <summary>
        ///     Дефолтная секция.
        /// </summary>
        internal const string DEFAULT_SECTION = "Mailing";

        /// <summary>
        ///     Регистрация сервиса отправки Email-сообщений.
        /// </summary>
        /// <param name="services"> Коллекция сервисов приложения. </param>
        /// <param name="optionsBuilder"> Билдер параметров. </param>
        /// <returns> Коллекция сервисов приложения. </returns>
        public static IServiceCollection AddMailService(this IServiceCollection services,
            Action<MailingOptions> optionsBuilder)
        {
            return services
                .Configure(optionsBuilder)
                .RegisterMailService();
        }

        /// <summary>
        ///     Регистрация сервиса отправки Email-сообщений.
        /// </summary>
        /// <param name="services"> Коллекция сервисов приложения. </param>
        /// <param name="configuration"> Секция настроек. </param>
        /// <returns> Коллекция сервисов приложения. </returns>
        public static IServiceCollection AddMailService(this IServiceCollection services, IConfiguration configuration)
        {
            return services
                .Configure<MailingOptions>(configuration)
                .RegisterMailService();
        }

        /// <summary>
        ///     Регистрация сервиса отправки Email-сообщений.
        /// </summary>
        /// <param name="services"> Коллекция сервисов приложения. </param>
        /// <returns> Коллекция сервисов приложения. </returns>
        public static IServiceCollection AddMailService(this IServiceCollection services)
        {
            var sp = services.BuildServiceProvider();
            var config = sp.GetRequiredService<IConfiguration>();
            var section = config.GetSection(DEFAULT_SECTION);

            return services
                .Configure<MailingOptions>(section)
                .RegisterMailService();
        }

        private static IServiceCollection RegisterMailService(this IServiceCollection services)
        {
            return services
                .AddTransient<IMailService>(sp =>
                {
                    var options = sp.GetRequiredService<IOptions<MailingOptions>>();

                    return new MailService(options.Value);
                });
        }
    }
}

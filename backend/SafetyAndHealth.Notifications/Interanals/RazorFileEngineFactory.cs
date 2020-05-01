using RazorLight;

namespace SafetyAndHealth.Notifications.Interanals
{
    /// <summary>
    ///     Фабрика билдеров шаблонов Razor из файлов cshtml в файловой системе.
    /// </summary>
    internal static class RazorFileEngineFactory
    {
        /// <summary>
        ///     Создание билдера.
        /// </summary>
        /// <param name="contentPath"> Корневой путь. </param>
        /// <returns> Движок парсинга представлений. </returns>
        public static IRazorLightEngine Create(string contentPath)
        {
            return new RazorLightEngineBuilder()
                .UseFileSystemProject(contentPath)
                .UseMemoryCachingProvider()
                .Build();
        }
    }
}
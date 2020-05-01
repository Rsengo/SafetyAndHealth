using System;

using RazorLight;

namespace SafetyAndHealth.Notifications.Interanals
{
    /// <summary>
    ///     Фабрика билдеров шаблонов Razor из встроенных ресурсов.
    /// </summary>
    internal static class RazorEmbeddedTemplateFactory
    {
        /// <summary>
        ///     Создание билдера.
        /// </summary>
        /// <param name="rootType"> Тип для получения корневого namespace'а. </param>
        /// <returns> Движок парсинга представлений. </returns>
        public static IRazorLightEngine Create(Type rootType)
        {
            return new RazorLightEngineBuilder()
                .UseEmbeddedResourcesProject(rootType)
                .UseMemoryCachingProvider()
                .Build();
        }
    }
}
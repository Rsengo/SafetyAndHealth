using System.Threading.Tasks;

namespace SafetyAndHealth.Notifications.Abstractions
{
    /// <summary>
    ///     Билдер шаблонов.
    /// </summary>
    public interface ITemplateBuilder
    {
        /// <summary>
        ///     Построение шаблона.
        /// </summary>
        /// <param name="template"> Шаблон. </param>
        /// <param name="model"> Модель. </param>
        /// <returns> Построенный шаблон. </returns>
        Task<string> Build(string template, object model);
    }
}
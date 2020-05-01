using System;
using System.Threading.Tasks;

using RazorLight;

using SafetyAndHealth.Notifications.Abstractions;
using SafetyAndHealth.Notifications.Interanals;

namespace SafetyAndHealth.Notifications.TemplateBuilders
{
    /// <summary>
    ///     Билдер Razor шаблонов из файлов cshtml в файловой системе.
    /// </summary>
    public class RazorFileTemplateBuilder : ITemplateBuilder
    {
        /// <summary>
        ///     Движок представлений.
        /// </summary>
        private readonly Lazy<IRazorLightEngine> _engine;

        /// <summary>
        ///     Конструктор.
        /// </summary>
        /// <param name="contentPath"> Корневой путь. </param>
        public RazorFileTemplateBuilder(string contentPath)
        {
            ContentPath = contentPath;
            _engine = new Lazy<IRazorLightEngine>(() =>
                RazorFileEngineFactory.Create(ContentPath));
        }

        /// <summary>
        ///     Корневой путь.
        /// </summary>
        public string ContentPath { get; set; }

        /// <inheritdoc />
        public Task<string> Build(string template, object model)
        {
            return _engine.Value.CompileRenderAsync(template, model);
        }
    }
}
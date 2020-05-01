using System;
using System.Threading.Tasks;

using RazorLight;

using SafetyAndHealth.Notifications.Abstractions;
using SafetyAndHealth.Notifications.Interanals;

namespace SafetyAndHealth.Notifications.TemplateBuilders
{
    /// <summary>
    ///     Билдер шаблонов Razor из встроенных ресурсов.
    /// </summary>
    public class RazorEmbeddedTemplateBuilder : ITemplateBuilder
    {
        /// <summary>
        ///     Движок рендера.
        /// </summary>
        private readonly Lazy<IRazorLightEngine> _engine;

        /// <summary>
        ///     Конструктор.
        /// </summary>
        /// <param name="rootType"> Тип для получения корневого namespace'а. </param>
        public RazorEmbeddedTemplateBuilder(Type rootType)
        {
            RootType = rootType;
            _engine = new Lazy<IRazorLightEngine>(() =>
                RazorEmbeddedTemplateFactory.Create(RootType));
        }

        /// <summary>
        ///     Тип для получения корневого namespace'а.
        /// </summary>
        public Type RootType { get; set; }

        /// <inheritdoc />
        public Task<string> Build(string template, object model)
        {
            return _engine.Value.CompileRenderAsync(template, model);
        }
    }
}
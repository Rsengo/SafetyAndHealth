using System.Net;
using System.Web.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Filters;

// TODO: add logger
namespace SafetyAndHealth.Middlewares.MvcFilters
{
    public class HttpGlobalExceptionFilter : IExceptionFilter
    {
        private readonly IHostingEnvironment _env;
        // private readonly ILogger<HttpGlobalExceptionFilter> _logger;

        public HttpGlobalExceptionFilter(IHostingEnvironment env)
        // ILogger<HttpGlobalExceptionFilter> logger)
        {
            _env = env;
            // _logger = logger;
        }

        public void OnException(ExceptionContext context)
        {
            // _logger.LogError(new EventId(context.Exception.HResult),
            //     context.Exception,
            //     context.Exception.Message);

            context.Result = new ExceptionResult(context.Exception, _env.IsDevelopment());
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            context.ExceptionHandled = true;
        }
    }
}

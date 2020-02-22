function Rexponse(response, status, payload = null) {
    let statusText = "";

    switch (status) {
        /**
         * 1xx Informational
         */

        case 100:
            statusText = "Continue";
            break;

        case 101:
            statusText = "Switching Protocols";
            break;

        case 102:
            statusText = "Processing";
            break;

        /**
         * 2xx Success
         */

        case 200:
            statusText = "OK";
            break;

        case 201:
            statusText = "Crated";
            break;

        case 202:
            statusText = "Accepted";
            break;

        case 203:
            statusText = "Non-Authoritative Information";
            break;

        case 204:
            statusText = "No Content";
            break;

        case 205:
            statusText = "Reset Content";
            break;

        case 206:
            statusText = "Partial Content";
            break;

        case 207:
            statusText = "Multi-Status";
            break;

        case 208:
            statusText = "Already Reported";
            break;

        case 226:
            statusText = "IM Used";
            break;

        /**
         * 3xx Redirection
         */

        case 300:
            statusText = "Multiple Choices";
            break;

        case 301:
            statusText = "Moved Permanently";
            break;

        case 302:
            statusText = "Found";
            break;

        case 303:
            statusText = "See Other";
            break;

        case 304:
            statusText = "Not Modified";
            break;

        case 305:
            statusText = "Use Proxy";
            break;

        case 307:
            statusText = "Temporary Redirect";
            break;

        case 308:
            statusText = "Permanent Redirect";
            break;

        /**
         * 4xx Client Error
         */

        case 400:
            statusText = "Bad Request";
            break;

        case 401:
            statusText = "Unauthorized";
            break;

        case 402:
            statusText = "Payment Required";
            break;

        case 403:
            statusText = "Forbidden";
            break;

        case 404:
            statusText = "Not Found";
            break;

        case 405:
            statusText = "Method Not Allowed";
            break;

        case 406:
            statusText = "Not Acceptable";
            break;

        case 407:
            statusText = "Proxy Authentication Required";
            break;

        case 408:
            statusText = "Request Timeout";
            break;

        case 409:
            statusText = "Conflict";
            break;

        case 410:
            statusText = "Gone";
            break;

        case 411:
            statusText = "Length Required";
            break;

        case 412:
            statusText = "Precondition Failed";
            break;

        case 413:
            statusText = "Request Entity Too Large";
            break;

        case 414:
            statusText = "Request-URI Too Long";
            break;

        case 415:
            statusText = "Unsupported Media Type";
            break;

        case 416:
            statusText = "Requested Range Not Satisfiable";
            break;

        case 417:
            statusText = "Expectation Failed";
            break;

        case 418:
            statusText = " I'm a teapot";
            break;

        case 420:
            statusText = "Enhance Your Calm";
            break;

        case 422:
            statusText = "Unprocessable Entity";
            break;

        case 423:
            statusText = "Locked";
            break;

        case 424:
            statusText = "Failed Dependency";
            break;

        case 426:
            statusText = "Upgrade Required";
            break;

        case 428:
            statusText = "Precondition Required";
            break;

        case 429:
            statusText = "Too Many Requests";
            break;

        case 422:
            statusText = "Unprocessable Entity";
            break;

        case 431:
            statusText = "Request Header Fields Too Large";
            break;

        case 444:
            statusText = "No Response";
            break;

        case 449:
            statusText = "Retry With";
            break;

        case 450:
            statusText = "Blocked by Windows Parental Controls";
            break;

        case 451:
            statusText = "Unavailable For Legal Reasons";
            break;

        case 499:
            statusText = "Client Closed Request";
            break;

        /**
         * Server Error
         */

        case 500:
            statusText = "Internal Server Error";
            break;

        case 501:
            statusText = "Not Implemented";
            break;

        case 502:
            statusText = "Bad Gateway";
            break;

        case 503:
            statusText = "Service Unavailable";
            break;

        case 504:
            statusText = "Gateway Timeout";
            break;

        case 505:
            statusText = "HTTP Version Not Supported";
            break;

        case 506:
            statusText = "Variant Also Negotiates";
            break;

        case 507:
            statusText = "Insufficient Storage";
            break;

        case 508:
            statusText = "Loop Detected";
            break;

        case 509:
            statusText = "Bandwidth Limit Exceeded";
            break;

        case 510:
            statusText = "Not Extended";
            break;

        case 511:
            statusText = "Network Authentication Required";
            break;

        case 598:
            statusText = "Network read timeout error";
            break;

        case 599:
            statusText = "Network connect timeout error";
            break;
    }

    const responseBody = {
        success: status >= 200 && status < 300,
        status,
        statusText,
        payload,
    };

    response.status(status).json(responseBody);
}

module.exports = Rexponse;

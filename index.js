function Rexponse(response, status, payload = null) {
    let statusText = "";

    switch (status) {
        case 200:
            statusText = "OK";
            break;

        case 201:
            statusText = "Crated";
            break;

        case 204:
            statusText = "No Content";
            break;

        case 400:
            statusText = "Bad Request";
            break;

        case 401:
            statusText = "Unauthorized";
            break;

        case 403:
            statusText = "Forbidden";
            break;

        case 404:
            statusText = "Not Found";
            break;

        case 422:
            statusText = "Unprocessable Entity";
            break;

        case 500:
            statusText = "Internal Server Error";
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

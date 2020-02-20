function rexponse(code, message) {
    return {
        status: code,
        statusText: message,
    };
}

module.exports.rexponse = rexponse;

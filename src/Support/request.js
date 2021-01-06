function request(url, method = 'GET', body) {
    let params = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
    }
    if (body) {
        params.body = JSON.stringify(body)
    }

    return fetch(url, params)
        .then((res) => res.json())
        .then(response => {
            if (response.error) {
                throw response.error;
            }
            return response;
        });

}



export default request;
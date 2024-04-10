export async function serviceToken(dominio, api, method, token, data) {
    dominio = atob(dominio);
    api = atob(api);

    console.log('service', dominio);
    console.log('service', api);

    let parametros = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };

    if (data) {
        parametros['body'] = JSON.stringify(data)
    }

    return await service(`${dominio}/${api}`, parametros)
}

export async function serviceApiKey(dominio, api, method, apiKey, data) {
    dominio = atob(dominio);
    api = atob(api);
    apiKey = atob(apiKey);

    console.log('service', dominio);
    console.log('service', api);

    let parametros = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': `${apiKey}`
        },
    };

    if (data) {
        parametros['body'] = JSON.stringify(data)
    }

    return await service(`${dominio}/${api}`, parametros)
}

async function service(url, parametros) {
    return await fetch(url, parametros)
    .then(response => {
        return response.json();
    })
    .catch(function (error) {
        console.error(`URL ${api}: Hubo un problema con la petición:`, error);
        return error;
    });
}
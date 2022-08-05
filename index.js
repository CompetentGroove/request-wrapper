const axios = require("axios");
const FormData = require('form-data');


function Request(options, callback) {
    switch (options.method.toLowerCase()) {
        case 'get':
            return get(options.url, options, callback);
            break;
        case 'post':
            return post(options.url, options, callback)
            break;
        case 'patch':
            return patch(options.url, options, callback)
            break;
        case 'delete':
            return delete1(options.url, callback)
            break;
        case 'put':
            return put(options.url, options, callback)
            break;
        default:
            get(options.url, options, callback);

    }
}

async function getResponse(data) {
    let requestData;

    if (data.body) {
        requestData = data.body
    }
    else if (data.formData) {
        let formData = new FormData()

        for (let [key, value] of Object.entries(data.formData)) {
            formData.append(key, value)
        }

        requestData = formData
    }

    return await axios({
        method: data.method,
        url: data.url,
        headers: data.headers,
        data: requestData
    })

}

const get = async function (url, data, callback) {
    let res, err, status;
    try {
        const response = await axios.get(url, { headers: data.headers });
        res = response.data;
        status = response.status;
    } catch (error) {
        err = error;
        res = err.response.data;
        status = err.status;
    } finally {
        callback(res ? null : err, status, res);
    }
}

const post = async function (url, data, callback) {
    let res, err, status;
    try {
        let response = await getResponse(data)
        res = response.data;
        status = response.status;
    } catch (error) {
        err = error;
        res = err.response.data;
        status = err.status;
    } finally {
        callback(res ? null : err, status, res);
    }
}


const put = async function (url, data, callback) {
    let res, err, status;
    try {
        let response = await getResponse(data)
        res = response.data;
        status = response.status;
    } catch (error) {
        err = error;
        res = err.response.data;
        status = err.status;
    } finally {
        callback(res ? null : err, status, res);
    }
}

const patch = async function (url, data, callback) {
    let res, err, status;
    try {
        const response = await axios.patch(url, data.body, { headers: data.headers });
        res = response.data;
        status = response.status;
    } catch (error) {
        err = error;
        res = err.response.data;
        status = err.status;
    } finally {
        callback(res ? null : err, status, res);
    }
}

const delete1 = async function (url, callback) {
    let res, err, status;
    try {
        const response = await axios.delete(url);
        res = response.data;
        status = response.status;
    } catch (error) {
        err = error;
        res = err.response.data;
        status = err.status;
    } finally {
        callback(err, status, res);
    }
}

module.exports = Request;


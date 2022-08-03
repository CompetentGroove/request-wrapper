const axios = require("axios");


function Request(options, callback) {
    switch (options.method) {
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
        const response = await axios.post(url, data.body, { headers: data.headers });
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
        const response = await axios.put(url, data.body, { headers: data.headers });
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


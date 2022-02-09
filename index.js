const axios = require("axios");


 function Request(options, callback) {
    switch (options.method) {
        case 'get':
            return get(options.url, callback);
            break;
        case 'post':
            return post(options.url, options.data, callback)
            break;
        case 'patch':
            return patch(options.url, options.data, callback)
            break;
        case 'delete1':
            return delete1(options.url, callback)
            break;
        case 'put':
            return put(options.url, options.data, callback)
            break;
        default:
            get(options.url, callback);

    }
}

const get = async function (url, callback) {
    let res, err, status;
    try {
        const response = await axios.get(url);
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

const post= async function (url, data, callback) {
    let res, err, status;
    try {
        const response = await axios.post(url, data);
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


const put = async function (url, data, callback) {
    let res, err, status;
    try {
        const response = await axios.put(url, data);
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

const patch = async function (url, data, callback) {
    let res, err, status;
    try {
        const response = await axios.patch(url, data);
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


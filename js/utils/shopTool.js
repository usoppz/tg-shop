axios.defaults.baseURL = 'https://mallapi.dpaycoin.com/api/v1'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = window.localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'


function setLocal(name, value) {
    window.localStorage.setItem(name, value)
}

function getLocal(name) {
    return window.localStorage.getItem(name);
}
$(function(){

    Telegram.WebApp.ready();
    const initData = Telegram.WebApp.initData || '';
    // const initData = 'query_id=AAEMfjYrAgAAAAx-NivZzEND&user=%7B%22id%22%3A5019958796%2C%22first_name%22%3A%22Z%22%2C%22last_name%22%3A%22RORONOA%22%2C%22username%22%3A%22dpayz%22%2C%22language_code%22%3A%22en%22%7D&auth_date=1676612967&hash=0bf375943dd0cd530131176aab9d85dd2e5ab56488acebd4011b0b45f1bf98cc'
    // const initDataUnsafe = Telegram.WebApp.initDataUnsafe || {};

    /*axios.defaults.baseURL = 'http://127.0.0.1:28019/api/v1'
    axios.defaults.withCredentials = true
    axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
    axios.defaults.headers['token'] = localStorage.getItem('token') || ''
    axios.defaults.headers.post['Content-Type'] = 'application/json'*/
    function botAutoLogin() {
        axios.post('/user/tgLogin', {
            "loginName": initData,
            "passwordMd5": "ssss"
        }).then(response => {
            console.log('/user/tgLogin', response.data.data)
            setLocal("token",response.data.data)
            // window.localStorage.setItem("token", response.data)
        }, error => {
            console.log('错误', error.message)
        })
    }

    botAutoLogin();

});

class MUtil{
    request({ type = 'get', url = '', dataType = 'json', data = null }={}){
        return new Promise((resolve, reject) => {
            $.ajax({
                type,
                url,
                dataType,
                data,
                success: res => {
                    if(res.status === 0) {
                        typeof resolve === 'function' && resolve(res.data, res.msg)
                    } else if (10 === res.status) {
                        this.doLogin()
                    } else {
                        typeof reject === 'function' && reject(res.msg || res.data)
                    }
                },
                error: err => {
                    typeof reject === 'function' && reject(err.statusText)
                }
            })
        })
    }

    doLogin(){
        window.location.href='/login?redirect=' + encodeURIComponent(window.location.pathname)
    }

    // 获取URL参数
    getUrlParam(name){
        // param=123&param1=456
        let queryString = window.location.search.split('?')[1] || '',
            reg         = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result      = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }

    setStorage(name, data) {
        const dataType = typeof data;
        if(dataType === 'object'){
            window.localStorage.setItem(name, JSON.stringify(data))
        } else if(['number', 'string', 'boolean'].indexOf(data)){
            window.localStorage.setItem(name, data)
        } else {
            alert('此类型不能保存')
        }
    }

    getStorage(name){
        const data = window.localStorage.getItem(name)
        if(data){
            return JSON.parse(data)
        } else {
            return ''
        }
    }

    removeStorage(name){
        window.localStorage.removeItem(name)
    }

    // 成功提示
    successTips(successMsg){
        alert(successMsg || '操作成功！');
    }
    
    // 错误提示
    errorTips(errMsg){
        alert(errMsg || '好像哪里不对了~');
    }


}


export default MUtil;
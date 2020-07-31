
class MUtil{
    request({ type = 'get', url = '', dataType = 'json', data = null }={}){
        return new Promise((resolve, reject) => {
            $.ajax({
                type,
                url,
                dataType,
                data,
                success: res => {
                    console.log(res);
                    resolve(res)
                },
                error: err => {
                    console.log(err);
                    reject(err)
                }
            })
        })
    }
}


export default MUtil;
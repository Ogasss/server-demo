ajax = (method,url)=>{
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest()
        request.open(method,url)
        request.onreadystatechange = () => {
            if(request.readyState === 4){
                if(request.status < 400){
                    resolve.call(null,request.response)
                }else if(request.status >= 400){
                    reject.call(null,request,request.status)
                }
            }
        }
        request.send()
    })
}

test.onclick = () => {
    ajax('get','/test.js')
        .then(
            (response)=>{
                console.log(response)
            },
            (request)=>{
                console.log(request)
            }
        )
}

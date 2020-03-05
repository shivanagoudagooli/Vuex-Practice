export const actions = {
    actCallApi :(context)=>{
        console.log("entered")
        console.log(context,"context")
        return new Promise ((reslove) =>{
            fetch("http://www.splashbase.co/api/v1/images/latest")
            .then(res => {
                return res.json()
            })
            .then(resp =>{
                // console.log(resp)
                // if(resp.Status === 200){
                //     console.log("ok")
                    reslove(resp)
                // }else{
                //     console.log("reject")
                //     reject("not found")
                // }
            })
        })
    }

}
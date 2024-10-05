const requestUrl="https://api.github.com/users/hiteshchoudhary"
const XHR=new XMLHttpRequest()
XHR.open("GET",requestUrl)
XHR.onreadystatechange=function(){
    console.log(XHR.readyState)
    if (XHR.readyState===4) {
        const data=JSON.parse(this.responseText)
        console.log(typeof data);
         const f=data.followers
       
         
        document.getElementById("follower").innerHTML=`${f}`
    }
        
}
XHR.send()
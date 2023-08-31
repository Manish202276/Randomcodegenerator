const btn=document.getElementById("btn")
btn.addEventListener("click",
function(){
    setInterval(() => {
        randomcolor()
    },1000);
})
const randomcolor=()=>{
    const randomno=Math.floor(Math.random()*16777215);
    const hexcode="#"+randomno.toString(16)
    document.body.style.backgroundColor=hexcode;
}

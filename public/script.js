let inpCode=document.getElementById('Ta')
let btnE=document.getElementById('btnE')
let ip=document.getElementById('ip')
let inpCode1=document.getElementById('At')
let ipd=document.getElementById('ipd')
let btnd=document.getElementById('btnD')

btnE.onclick=function()
{
    let data = inpCode.value
    data=btoa(data)
    ip.value=data
    
}
btnd.onclick=function()
{
    let datae =inpCode1.value
    datae=atob(datae)
    ipd.value=datae
    
}
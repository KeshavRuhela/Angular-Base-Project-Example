my()
{
    setInterval(() => {
    date=new Date();
    htime=date.getHours();        
    mtime=date.getMinutes();
    Stime=date.getSeconds();

    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*Stime;
    
    Hour.style.transform=`rotate(${hrotation}deg)`
    Minute.style.transform=`rotate(${mrotation}deg)`
    Second.style.transform=`rotate(${srotation}deg)`
    // console.log(mtime)
}, 1000);
}
// console.log(new Date());  
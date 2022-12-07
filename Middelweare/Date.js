const date=(req,res,next)=>{
    let date = new Date();
    let h = date.getHours();
    let d =date.getDay();


    if( !(h <= 9 && h >= 17) || ( d == 0 || d == 6 ) )  {
        res.send('close') 
    }
    else{
        res.sendFile(__dirname +'/home.html' )
    }
    next()

}

module.exports=date
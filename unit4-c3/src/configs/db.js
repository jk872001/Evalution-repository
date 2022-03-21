const mongoose=require('mongoose');
const connect=()=>
{
    return mongoose.connect(
        "mongodb+srv://jitesh123:jitesh123@cluster0.ljuvz.mongodb.net/unit4c3?retryWrites=true&w=majority"
    )
}
module.exports=connect;
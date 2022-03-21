const app=require('./index');
const connect=require('./configs/db');
app.listen(5007,async ()=>
{
    try{
        await connect();

    }
    catch(err)
    {
        console.log(err);
    }
    console.log('I am on port 5007');
})
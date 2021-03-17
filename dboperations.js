var config = require('./dbconfig');
const sql = require('mssql');


 function GetIntents(){
    try{
        let pool = await sql.connect(config);
        let chatbot = await pool.request().query("select * from Intents");
        return chatbot.recordests;
    }
    catch{
        console.log(error);
    }
}
async function GetIntents(intentsId){
    try{
        let pool = await sql.connect(config);
        let chatbot = await pool.request()
        .input('input_parameter', sql.Int, intentsId)
        .query("select * from Intents where Intents_id = @input_parameter");
        return chatbot.recordests;
    }
    catch{
        console.log(error);
    }
}
module.exports = {
    GetIntents : GetIntents,
    GetIntents : GetIntents
}
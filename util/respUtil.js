
function writeReslut(status,msg,data){
    return JSON.stringify({
        status:status,
        msg:msg,
        data:data
    })
}

module.exports.writeResult = writeReslut;
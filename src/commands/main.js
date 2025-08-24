const os = require('os')
const {runtime} = require("../utils/functions")
module.exports = [
{
    name:"alive",
    description:"alive command",
    react:"🦦",
    ownerOnly: false,
    groupOnly: false,
    adminOnly: false,
    botAdmin: false,
    async execute(conn,mek,args,context){
        const {from,pushname,reply,quoted} =context;
        try{
            let desc = `
            Hey ${`pushname`} I am alive now ! 🦦
            uptime:${runtime(process.uptime())}
            `
            await conn.sendMessage(from,
            {
                image:{url:"https://i.ibb.co/nqyv38xB/20250824-170551.jpg"},
                caption: desc
            },{
                quoted:mek
            }
            )
            
        }catch(e){
            console.log(e)
        }
    }
}
]

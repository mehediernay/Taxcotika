module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝚃𝚊𝚑𝚖𝚒𝚍
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝚃𝚊𝚑 𝙼𝚒𝚍
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝚌𝚑𝚊𝚙𝚊𝚒 𝚗𝚘𝚠𝚊𝚋𝚐𝚘𝚗𝚓
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝚛𝚊𝚓𝚜𝚑𝚊𝚑𝚒
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝚖𝚊𝚕𝚎
𝐀𝐠𝐞           : 𝙷𝚒𝚍𝚎
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝚙𝚞𝚛𝚎 𝚂𝚒𝚗𝚐𝚕𝚎
𝐖𝐨𝐫𝐤        : 𝚂𝚝𝚞𝚍𝚎𝚗𝚝
𝐆𝐦𝐚𝐢𝐥      : 𝙷𝚒𝚍𝚎
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩:  01786079471
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : 𝚄𝚜𝚎 𝚔𝚘𝚛𝚒 𝚗𝚊 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=100072691726396`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(https://graph.facebook.com/100072691726396/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_30_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0NixcbiAgICAgICAgMjE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI2LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDkzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEsXG4gICAgICAgIDEzLFxuICAgICAgICA4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitSempRaXMvOHR0RG1aMWluajFIcDEvQlpiSUx4Qmx1ZFpJN2o3bnQzWk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhJZ25MeVRDUm1LX3JRVWw5LW5zQ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjA0ZTYzNTAtNjNhMy00Mzc1LWJjODMtOTAxYTllNjYwMjM5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDE3NixcbiAgICAgIDUyLFxuICAgICAgMjE0LFxuICAgICAgMjMwLFxuICAgICAgMTE3LFxuICAgICAgNDEsXG4gICAgICAyNCxcbiAgICAgIDgsXG4gICAgICAzNyxcbiAgICAgIDU3LFxuICAgICAgODYsXG4gICAgICAxMDMsXG4gICAgICA1NCxcbiAgICAgIDE0LFxuICAgICAgNzYsXG4gICAgICAxNixcbiAgICAgIDMzLFxuICAgICAgMzUsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMyxcbiAgICAgIDIzNyxcbiAgICAgIDIxMyxcbiAgICAgIDExOSxcbiAgICAgIDY5LFxuICAgICAgMTg0LFxuICAgICAgMTE0LFxuICAgICAgMTIyLFxuICAgICAgMTk4LFxuICAgICAgMTA3LFxuICAgICAgMTE0LFxuICAgICAgMjA4LFxuICAgICAgMjAsXG4gICAgICAxNzYsXG4gICAgICAyNDEsXG4gICAgICAzNyxcbiAgICAgIDIyLFxuICAgICAgMjMyLFxuICAgICAgMTYxLFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFHUldYMjI1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMjY4OTU0MjU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY3MTY2MTY3MDAwODE6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMV0srdUFFRU16SnNya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZaTzMycVNTY1F0MXlldzVoOGZQZ1hXZVEySEt2Q0x5NytId3oxc1FqeGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTGFRVkpnSW9CWGVwcVpuNU50YU5RL2RZcFo1YTZ5L0JPVnhWQm9WOEFzc0ZIZ2xaRWFSOEtiK2pHWmtOTGt5UmFaUFZQQndiTDlKa1M5ZDVtaXIxQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV1A2WEFRZXlpcmNpQ0pCYVluaGIyOUN0Y2Z1OUJ2L2xMOFg5NnBMZExKVllLeUlYTzlBOUFXOXJ6Mmx6RWhsdUpsTVJVMXhKL2FOR0h2aGxFNGdQanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzI2ODk1NDI1OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwOTc5MDIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS29TXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLb1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjOVRxRTVUOXh4UGdCUkJoamNXY1NPSVVOalNUMmlQMnRtQVRlNnF0SnhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzcwNjg1OTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

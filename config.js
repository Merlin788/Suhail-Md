const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348061715941";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_21_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NyxcbiAgICAgICAgNixcbiAgICAgICAgMTQwLFxuICAgICAgICA2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDk2LFxuICAgICAgICA1MixcbiAgICAgICAgMjAyLFxuICAgICAgICA5LFxuICAgICAgICA1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgMTExLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTczLFxuICAgICAgICA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MixcbiAgICAgICAgMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkdlpGZkI0UmRKMytGM2NNRElnNHVORFFMc2lXSEdwTzhhcVdmSWk4TjlzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxbEROdFdDM1NnR0NnWXh2Vjd4OUdnXCIsXG4gIFwicGhvbmVJZFwiOiBcImMwN2M3ZTBiLTI3ZmItNDY5Ny1iNDdkLWQ0OWIyNzg4ZTNlYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDksXG4gICAgICAyMDAsXG4gICAgICAxNTAsXG4gICAgICAyMTQsXG4gICAgICAyMDEsXG4gICAgICA3MSxcbiAgICAgIDE0OSxcbiAgICAgIDI5LFxuICAgICAgMjAzLFxuICAgICAgMTA1LFxuICAgICAgMjExLFxuICAgICAgMTkyLFxuICAgICAgMTE3LFxuICAgICAgMTczLFxuICAgICAgMjcsXG4gICAgICA1NSxcbiAgICAgIDIzMSxcbiAgICAgIDE3OSxcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMjU1LFxuICAgICAgMjMzLFxuICAgICAgMTQ0LFxuICAgICAgMTk3LFxuICAgICAgMTcsXG4gICAgICAyMTYsXG4gICAgICAxOTgsXG4gICAgICA5MCxcbiAgICAgIDUsXG4gICAgICA4NyxcbiAgICAgIDE2NyxcbiAgICAgIDEwOCxcbiAgICAgIDg5LFxuICAgICAgMTI2LFxuICAgICAgOTAsXG4gICAgICAxNDYsXG4gICAgICAyNDEsXG4gICAgICAxMyxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBTSFJORVZLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDYxNzE1OTQxOjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGVycnkgRW1waXJlIFR2XCIsXG4gICAgXCJsaWRcIjogXCIxMDMzNzU1ODQ2MjQ2NDU6MzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUxtemZBREVMcVdwYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6ZkhCd1RiODRzaURYbUtDdGVtZXU0UFFiYk02VmJGOFVaaVdGbG5sNEZjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImk3cXY5b2xra2NsbmdwSmtObFk1Mk1hTWtMM0pwNEVGSVlpQXFuUkI3eUlBbTNCQlJPRmpqa3JQVTdXOUVnNFBQUTY0T1oxcXdqbUtveE9lNTQ4K0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm44ZVVreCsrRnJhUHo4WW83aXpnV1ZNUDlwL3cvMjlvL1lpODVYZ2pDRXI0bkJoY0VDdU9oTW9rWWFHTEJ0eGxodVp4R2VUL3M3TUMxa1VucjlESkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjE3MTU5NDE6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzNzA4Nzdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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

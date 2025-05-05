const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA61VW4+ySBD9K5t+1VmuKppMstxUUFQEL7jZhxYaaAUaoVXwi/99wzhmJvlus8ny1Gm6T52qOnX6G8gILtEE1WDwDeQFvkCKmiWtcwQGQDmHISpAGwSQQjAAo9F6Gp2r7q07madbbzUc1XRGcMvYxlyuxSvC0NHI7gtT/foK7m2Qn/cJ9n8B6B+H0YnJDnvfE2JxaZGr2el0ZHZ7k218UeWVsaqyLR+VnP4K7g0ixAXOIj2PUYoKmExQvYC4+Br902xZTna3lN1bGiOKyI3E/VIrZ5sCTnE3Yyvbz9fOjdTr6Gv01UXILwz9porJKKic0FfoOEhj0RANfGgxwak6uuHtuCOR/KBf4ihDgRGgjGJaf7nucGIYqVYkGtuan7KTzmmbkTHy1/v+UDEjBhdeqtkjoxIz+WvEhZ459aZw2xqqwxOXbRzELINeiJyjurpF3LLqrTvJOfck1/tMfFE8tXL8L3VXNa+gs2ugjqm2XGxCb96RLTPK8sokQ6RfR4YXq6Mtq2TG1+iTedJbmZco2JtzqIaLa35TduNJyzTk2BvtFzNeGo50rq424gd9SM/Fr1herj1jKsX7PLaxTS3hAg8jddzP6svCCupaWZQwdZaR6YwF9sLfsk2a0qm1YI7c1mPo2cEJtwpv7KmqrIqP9KXjHWh0fX3L6IhqIwAD7t4GBYpwSQtIMcne9oROG8Dg4iC/QPStvECq7EOkrrlYQdgejn1cnlyBEBtN57nLoJBQAc75xOuPy1fQBnlBfFSWKBjjkpKitlBZwgiVYPD3W6eapAuUEopMHIAB4Dsix3G9vsT1en+Vf15jSEuY539miII2CAuSWggMaHFGbfB2QWC5IdvV+B6nS5zEshLf7WldtdcVdVXrc1KTYvoI6uIUlRSmORhwPbHDdjheEO/t/4eHpvOKKkq6LEkdUe7qqiSrMivonCCz/W5X/A0P6f5PG2Soog8dN9UXuDYIcVHSVXbOEwKDp8ifP6Hvk3NGnTrz1WaBCjD4tI0oxVlUNpmdM1j4Mb4gtcnjwfveBgG6YB81cGBr9Az5peId2+ktLW05j6f88No0MCbZ44jAdtk9J3VeeIkTX0QfBS/9EIUvYrcnhGEf+aEIQVONh4M0d34qaFPPDDKXrd3e6B80R1yKc6V/8xiJe7jzQ4moQMGzyHvoH8+5S44o+wWui4S1eUahW02PMBRCMSG3W3Ht16L9CfehcDD49uHaKgkavGVX7vddXQJNs5o434lhIH0vhww2h4FJ4uwPCx9RE+m9Cw1GgCjESdm4jZXiW8Xa9b6eXWXPUxxZnshyMyjPrj3d4DFtqqHvY343bYVVnIxhcSU2v7myW7g1nKsm3DoFwjNxtx4q4o9AwAAczIM5JkKedFe4lAK1M4+olM1YpENe3ETIoIlLOpzbx9tTfq2VlTh1BIvs9sMr6rnMYqjLkzltGRfzsncYnLRMmCiNdTzl8zmYYZWLTbVqXbQl44hQwJNtEMyQW+vHqXJSVp3SrzbCWDYZjUld21LDydadoM5QYBSRuGND4ItqmpwTsi5De+5tViv96VNvPpm8v0/43UEeYgsxerP79z78rl0fsmfv7U8Q7+/HT6Sl2FgZiUHqMJnk7Zb8SZros6ScDfmk1ku5L7WgQA5otF7aCNybcc4TSENSpM0rmQUFwQFogwSWVP4Y3B94AS+0QVrLee5QSJ/zDuTmm9IQ3P8FOjyr1hoJAAA=",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ B.M.B-XMD ✦ XMD ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "25566862457",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦ B.M.B-XMD ✦ XMD ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ B.M.B-XMD ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p9hyal.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || ">B.M.B IS ACTIVE AND ALIVE\n\n\nKEEP USING B.M.B-XMD FROM B.M.B TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by 𝙱.𝙼.𝙱-𝚇𝙼𝙳 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

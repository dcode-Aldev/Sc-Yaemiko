import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
m.reply(`${htki} *DOWNLOAD* ${htka}

     Pixellab Purple ( via Mediafire )
    
    --------APK INFO--------
    
*${htjava} Version:* unknown 
*${htjava} Filesize:* 34mb
*${htjava} Link:* https://www.mediafire.com/download/3lwbp8kz4xdcl4s

`)
}


handler.help = ['pxlb']
handler.tags = ['apk']
handler.command = ['pxlb']
export default handler
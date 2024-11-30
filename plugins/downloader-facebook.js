import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!args[0]) throw `Linknya?`
  let res = await fetch(`https://api-xcoders.site/api/download/fb2?url=${args[0]}&server=server2&apikey=${global.xcode}`)
  let x = await res.json()
  let cap = `Nih Kak Videonya >,<`
  conn.sendFile(m.chat, x.result.hd_url, 'efbih.mp4', cap, m)
}
handler.help = ['fbdl','facebook']
handler.tags = ['downloader']
handler.command = /^(fbdl|facebook|fb)$/i
export default handler
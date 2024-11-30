import xfar from 'xfarr-api'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { usedPrefix, command, text, args }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp, name
  try {
    pp = await conn.getProfilePicture(who)
    name = await conn.getName(who)
  } catch {
    pp = await hwaifu.getRandom()
    name = 'Orang yang tidak dikenal'
  }

  if (command == 'film') {
    if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} spiderman`
    try {
      let results = await xfar.Film(args[0])
      let result = results[0]
      let shortUrl = await shortenUrl(result.link)
      let text = `*FILM-SEARCH*\n\n*📫 Judul :* ${result.judul}\n*🎞️  Tipe  :* ${result.type}\n*📟 Kualitas :* ${result.quality}\n*📮Upload :* ${result.upload}\n*🔗 Url :* ${shortUrl}\n-----------------------------------------------\n`

      let mediaBuffer = await fetch(result.thumb).then(res => res.buffer())
      await conn.sendMessage(m.chat, text, MessageType.document, {
        mimetype: 'image/jpeg',
        filename: 'thumb.jpg',
        quoted: m,
        caption: '',
        thumbnail: mediaBuffer,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            mediaType: ExternalAdReply.Types.MEDIA_TYPE_VIDEO,
            mediaUrl: result.link,
            thumbnail: mediaBuffer,
            sourceUrl: result.link,
            description: 'Ini adalah deskripsi iklan',
            title: 'Ini adalah judul iklan',
            body: 'Ini adalah tubuh iklan',
          }
        }
      })
    } catch (e) {
      console.error(e)
      throw 'Terjadi kesalahan saat mencari film, silakan coba lagi nanti'
    }
  }
}

handler.help = ['film <judul>']
handler.tags = ['internet', 'anime']
handler.command = /^film$/i
export default handler

async function shortenUrl(url) {
  let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
  return await res.text()
}


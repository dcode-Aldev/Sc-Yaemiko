import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let ar = ['dog', 'cat', 'panda', 'fox', 'red_panda', 'koala', 'bird', 'raccoon', 'kangaroo']
  let ras = `Halo Kak @${m.sender.split('@')[0]}`
  let sel = `Pilih Jenis Animal/Hewan Dibawah Ya Kak!`

  if(!text) {
    conn.reply(m.chat, `Pilih salah satu jenis hewan di bawah ini:\n\n${ar.map((v) => '- ' + v).join('\n')}\n\n\nexample ${usedPrefix+command} dog\ngunakan dengan spasi`, m)
    return false
  }

  if (!ar.includes(text)) {
    conn.reply(m.chat, `Jenis hewan tidak valid. Silakan ketik ${usedPrefix}${command} untuk melihat daftar jenis hewan yang tersedia.`, m)
    return false
  }

  let res = await fetch(API('https://some-random-api.ml', '/animal/' + text))
  if (!res.ok) throw `${res.status} ${res.statusText}`

  let json = await res.json()
  if (!json.image) throw json

  let caption = `${json.fact}`

  conn.sendFile(m.chat, json.image, 'animal.jpg', caption, m, false, { thumbnail: await(await fetch(json.image)).buffer() })
}

handler.help = ['animal <jenis hewan>']
handler.tags = ['internet', 'sticker']
handler.command = /^(animal|animalfact)$/i

export default handler

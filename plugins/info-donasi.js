import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `▷ ᴅᴏɴᴀsɪ ʙɪsᴀ ᴍᴇʟᴀʟᴜɪ ◁
    「 Donasi • Pulsa 」
▪ *Telkomsel:* [0822 1472 9677]
▪ *Axis:* [0838 6372 7401]

    「 Donasi • Non Pulsa 」
▪ *Dana:* [0838 6373 7401]
▫ *Gopay:* [-]
▪ *Ovo:* [0838 6372 7401]

Kalau Mau Pake Qr Bisa ke contact Owner kak☺️
wa.me/6283863727401

*sᴇᴍᴏɢᴀ ᴀɴᴅᴀ ᴅɪ ʙᴇʀɪᴋᴀɴ ᴋᴇᴍᴜᴅᴀʜᴀɴ ʀᴇᴢᴇᴋɪ ᴅᴀɴ ᴅɪ ʟɪᴘᴀᴛ ɢᴀɴᴅᴀᴋᴀɴ ʀᴇᴢᴇᴋɪ ᴀɴᴅᴀ*
`;
	await conn.sendButton(m.chat, rules, wm, fotonya2, [['\nKakek Gw Sugiono','huuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: 'Yaemiko-Multidevice',
                        body: wm,          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}
handler.help = ['donasi']
handler.tags = ['info','main']
handler.command = /^(donate|donasi)$/i;

export default handler;

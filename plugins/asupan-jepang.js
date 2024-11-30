import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.my.id/api/cecan/japan?apikey=TJ6fwiTJwp3WkoG'
	conn.sendButton(m.chat, `Nih Kak`, wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(japan)$/i
handler.tags = ['asupan','premium']
handler.help = ['japan']
handler.premium = true
handler.limit = true

export default handler
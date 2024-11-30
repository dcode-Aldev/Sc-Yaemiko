let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Siapa?`
    conn.reply(m.chat, `
  ${command} *${text}*
  *${text}* is *${(101).getRandom()}*% ${command.replace('how', '').toUpperCase()}
  `.trim(), m, m.mentionedJid ? {
        mentions: m.mentionedJid
    } : {})
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy', 'jawir', 'hitam']
handler.tags = ['kerang', 'fun']
handler.command = /^(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress|bucin|jones|sadboy|jawir|hitam)/i

export default handler
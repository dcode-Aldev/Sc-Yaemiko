let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Ketik Namanya Tolol!', m)
	
  conn.reply(m.chat, `
╭━━━━°「 *Kontol ${text}* 」°
┃
┊• Nama : ${text}
┃• Kontol : ${pickRandom(['Mancung','Bengkok','Muluss','Sengklek','Ber urat','Ber Otot','Kebawah'])}
┊• Ukuran : ${pickRandom(['sekecil pasir','Kek Pulpen kurus kering','tipis kek ranting','sangat amat besar','kek pler kucing'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
┊• Warna : ${pickRandom(['black doff','black glossy','pink terang', 'vantablack','pink glossy'])}
╰═┅═━––––––๑
`.trim(), m)
}
handler.help = ['cekkontol <nama>']
handler.tags = ['fun']
handler.command = /^cekkontol/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

import { promises, readFileSync } from 'fs'
import { sticker } from '../lib/sticker.js'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`
const defaultMenu = {
  before: `
ユ *U S E R*
      ° *Name* : %name
      ° *Tag* : %tag
      ° *Premium* : %prems
      ° *Limit* : %limit
      ° *Money* : %money
      ° *Role* : %role
      ° *Level*: %level [ %xp4levelup Xp For Levelup]
      ° *Xp* : %exp / %maxexp
      ° *Total Xp* : %totalexp

今 *T O D A Y*
      ° ${ucapan()} %name!
      ° *Tanggal* : %week %weton
      ° *Date* : %date
      ° *Tanggal Islam* : %dateIslamic
      ° *Waktu* : %time

ボ *I N F O*
      ° *Nama Bot* : %me
      ° *Mode*: %mode
      ° *Prefix* : [ %_p ]
      ° *Baileys* : Multi Device
      ° *Battery* : ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
      ° *Platform* : %platform
      ° *Type* : Node.Js
      ° *Uptime* : %muptime
      ° *Database* : %rtotalreg dari %totalreg

マ *C O M M A N D*
     Ⓟ = Premium
     Ⓛ = Limit
`.trimStart(),
  header: 'カ %category',
  body: `° %cmd %isPremium %islimit`,
  footer: '',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, usedPrefix, command}) => {
let imgr = flaaa2
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
	let tags
	let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'virtex', 'preset', 'apk', 'menfess', 'stress', 'anime', 'update', 'berita', 'edukasi', 'news', 'random', 'maker', 'menbalas', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'asupan', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'absen', 'catatan', 'store', 'virus', 'nsfw', 'audio', 'jadibot', 'random', 'info', 'audioanime', 'owner', 'nocategory']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': '*M A I N*', 
  'virtex': '*V I R U S*', 
  'preset': '*P R E S E T - A M*', 
  'apk': '*A P L I K A S I*', 
  'menfess': '*M E N F E E S*',
  'stress': '*S T R E S S*',
  'game': '*G A M E*',
  'rpg': '*R P G*',
  'xp': '*E X P - L I M I T*',
  'sticker': '*S T I C K E R*',
  'kerang': '*K E R A N G - A J A I B*',
  'quotes': '*Q U O T E S*',
  'random': '*R A N D O M*',
  'fun': '*F U N*',
  'asupan': '*A S U P A N*',
  'anime': '*A N I M E*', 
  'admin': '*A D M I N*',
  'group': '*G R O U P*',
  'vote': '*V O T E*',
  'absen': '*A B S E N*',
  'catatan': '*C A T A T A N*',
  'store': '*S T O R E*',
  'premium': '*P R E M I U M*',
  'anonymous': '*A N N O N Y M U S*',
  'internet': '*I N T E R N E T*',
  'downloader': '*D O W N L O A D E R*',
  'tools': '*T O O L S*',
  'nulis': '*M A G E R - N U L I S*',
  'audio': '*A U D I O*',
  'audioanime': '*A U D I O - A N I M E*',
  'maker': '*M A K E R*',
  'berita': '*N E W S*',
  'database': '*D A T A B A S E*',
  'islamic': '*I S L A M*',
  'owner': '*O W N E R*',
  'host': '*H O S T*',
  'advanced': '*A D V A N C E D*',
  'info': '*I N F O*',
  '': '*N O - C A R T E G O R Y*',
}
  if (teks == 'game') tags = {
    'game': 'Game'
 }
  if (teks == 'virtex') tags = {
    'virtex': 'Virtex'
 }
  if (teks == 'preset') tags = {
    'preset': 'Preset'
 }
  if (teks == 'apk') tags = {
    'apk': 'Apk'
 }
  if (teks == 'manfess') tags = {
    'manfess': 'Menfess'
 }
  if (teks == 'stress') tags = {
    'stress': 'Stress'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'random') tags = {
   'random': 'Random'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'berita') tags = {
    'berita': 'Berita'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis'
  }
  if (teks == 'store') tags = {
    'store': 'Store Menu'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
if (teks == 'menbalas') tags = {
    'menbalas': 'Menfess'
  }
if (teks == 'virus') tags = {
    'virus': 'Virus'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'asupan') tags = {
  'asupan': 'Asupan'
 }
 if (teks == 'vidiorandom') tags = {
 'vidiorandom': 'Vidiorandom'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Vote',
  }
  if (teks == 'maker') tags = {
    'maker': 'maker',
  }
  if (teks == 'absen') tags = {
    'absen': 'absen' 
  }
  if (teks == 'catatan') tags = {
  'catatan': 'Catatan',
  }
  if (teks == 'islamic') tags = {
   'islamic': 'Islamic',
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
}
  if (teks == 'audioanime') tags = {
    'audioanime': 'Audioanime'
}
  if (teks == 'sound2004') tags = {
    'sound2004': 'Sound2004'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'nocategory') tags = {
    'nocategory': 'No Category'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)

let usrs = db.data.users[m.sender]
let jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const sections = [
   {
    title: `${htki} MAIN ${htka}`,
    rows: [
        {title: `SPEED BOT`, rowId: ".speed", description: "Menampilkan kecepatan respon BOT"},
        {title: `OWNER BOT`, rowId: ".owner", description: "Menampilkan List owner BOT"},
        {title: `RUNTIME BOT`, rowId: ".runtime", description: "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 Waktu Bot Berjalan"}, 
        {title: `SCRIPT BOT`, rowId: ".sc", description: `Source Code ${namebot}`},
    ]
      },{
        title: `${htki} SUPPORT ${htka}`,
        rows: [
            {title: `SEWA`, rowId: ".sewa", description: "Menampilkan list harga sewa BOT"},
            {title: `BUY PREMIUM`, rowId: ".premium", description: "Menampilkan list harga premium"},
            {title: `DONASI`, rowId: ".donasi", description: 'Support BOT agar lebih fast respon'},
            {title: `SUBSCRIBE MY YT CANNEL`, rowId: ".zykomd", description: 'Support FaislDev dengan cara sub like komen share 😅'}
            ]
        },{
          title: `${htki} STORE MENU ${htka}`,
          rows: [
            {title: `Store`, rowId: ".? store", description: "Tempat Jualan Anak Jb"},           
        ]
        },{
          title: `${htki} MENU MENFESS ${htka}`,
          rows: [
            {title: `Menfess Balas`, rowId: ".? menbalas", description: "Menampilkan Semua command BOT"},
          ]},{
        title: `${htki} MENU ${htka}`,
        rows: [
        {title: `All`, rowId: ".? all", description: "Menampilkan Semua command BOT"},
        {title: `Rpg`, rowId: ".? rpg", description: "Game Epic Rpg!"},
        {title: `Exp`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
        {title: `Game`, rowId: ".? game", description: "Gamenya seru seru lho >-<"},
        {title: `Fun`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
        {title: `Kerang`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
        {title: `Quotes`, rowId: ".? quotes", description: "Random Inspirasi"},        
         {title: `Asupan`, rowId: ".? asupan", description: "Menampilkan Asupan DiBot"},        
        {title: `Anime`, rowId: ".? anime", description: "Kamu wibu ya bang?"},
        {title: `Nsfw`, rowId: ".? nsfw", description: "Tch, dasar sagne"},
        {title: `Premium`, rowId: ".? premium", description: "Only premium Users"},
        {title: `Anonymous Chats`, rowId: ".? anonymous", description: "Bicara dengan orang tidak dikenal"},
        {title: `Al-Quran`, rowId: ".? quran", description: "Tobat yuk kak"},
        {title: `Internet`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
        {title: `Berita`, rowId: ".? berita", description: "Cari berita terupdate"},
        {title: `Downloaders`, rowId: ".? downloader", description: "Download sesuatu diBOT"},
        {title: `Stikers`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
        {title: `Logo`, rowId: ".? maker", description: "Buat Logo Kamu diBOT"},
        {title: `Nulis`, rowId: ".? nulis", description: "Nulis kok males kak?"},
        {title: `Buat Catatan`, rowId: ".? catatan", description: "Buat Catatan Kamu di Bot"},
        {title: `Preset Alight Montion/Apk`, rowId: ".presetmenu", description: "Gunakan Preset Bot buat Alight Montion Mu"},                        
        {title: `Audio Anime`, rowId: ".? audioanime", description: "Kamu Wibu ya Bang"},             
        {title: `Audio`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
        {title: `Sound Menu`, rowId: ".soundmenu", description: "Kumpulan 120 Sound"},
        {title: `Group`, rowId: ".? group", description: "Only Groups"},
        {title: `Admin`, rowId: ".? admin", description: "Only Admin Group"},
        {title: `Database`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
        {title: `Tools`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},         
        {title: `Info`, rowId: ".? info", description: "Info info BOT"},
        {title: `Owner`, rowId: ".? owner", description: "Owner Only!"},
        {title: `No Category`, rowId: ".? nocategory", description: "Fitur tanpa kategory!"},
]}]                        
let tek = `*${ucapan()} ${conn.getName(m.sender)}*
🇮🇩 *_Silahkan Klik Tombol Menu Di Bawah_*
🇬🇧 *_Please Click the Menu Button Below_*
🇯🇵 *_下のメニューボタンをクリックしてください_*`
const listMessage = {
  text: tek,
  footer: `${botdate}\n${wm2}`,
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `CLICK HERE`,  
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }
	  
 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
     let vn = './media/yntkts'
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

    //----------------- FAKE
  let hai = ['Hai,', 'Ohayo,', 'Kyaa,', 'Halo,', 'Nyann,'].getRandom()
 let fvn = {quoted: { key: {participant : '0@s.whatsapp.net'},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "2022","ptt": "true"} } }}
 let floc = {quoted: { key: { participant : '0@s.whatsapp.net'}, message: { "liveLocationMessage": { "caption": `Menu`,"h": `${name}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}} }}
 let fdocs = {quoted: { key : { participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Hai Kak ${name}!`,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }}}}
 let fgclink = {quoted: {key: {participant : '0@s.whatsapp.net'},message: {groupInviteMessage: {groupJid: "17608914335-1625305606@g.us",inviteCode: null,groupName: `Hai ${name}!`,  caption: wm,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }} }}
 let fgif = {quoted: {key: { participant : '0@s.whatsapp.net'}, message: {  "videoMessage": {  "title": `Hai Kak ${name}!`, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg') } } } }
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
    let oh = global.zyko
    let urls = pickRandom(['https://telegra.ph/file/035e524939ab0294ba91f.jpg', 'https://telegra.ph/file/96b2275d3b14d071290bc.jpg', 'https://telegra.ph/file/2c6b7660bc6126404a9bb.jpg', 'https://telegra.ph/file/c635bf577bb9d59a3e00b.jpg', 'https://telegra.ph/file/be8dd52f6363f9e9f5a60.jpg', 'https://telegra.ph/file/02e53361b9dc946f63c8d.jpg', 'https://telegra.ph/file/298ed2f1bba17aeb64ca8.jpg', 'https://telegra.ph/file/be2a18221974147f66ea0.jpg',"https://telegra.ph/file/f46c9ebb51efc49ea14d5.mp4",
"https://telegra.ph/file/1fb94fb0db4d9db149ad7.mp4",
"https://telegra.ph/file/6dac1453cbc23bff8754a.mp4",
"https://telegra.ph/file/7e744334e7bfd7e685c65.mp4",
"https://telegra.ph/file/9ca7a7e28257b73d2c0ce.mp4",
"https://telegra.ph/file/aaebb2ab4c79cc69906f7.mp4"])
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    //FAKE TROLI

    const ftrol = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
    
    const fload = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2023,

    status: 1,

    surface : 1,

    message: '[❗] Memuat Menu ' + teks + '...\n Sabar Ya Kak ^ω^', 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
   conn.reply(m.chat, '*Tunggu Sebentar Kak. . .*', ftrol)     
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'application/vnd.android.package-archive'
    let d6 = 'application/zip'
    let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
//------------------< MENU >---------------- 
let audio = fs.readFileSync('./mp3/Bot.opus')
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'tautanwa',
    mediaType: tautanwa, 
    description: tautanwa,
    title: `👋 ${hai}, ${name}`,
    body: bottime,
    thumbnail: await (await fetch(zykomd)).buffer(),
    sourceUrl: syt
 	}
     }
    })
//let tag = `@${m.sender.replace(/@.+/, '')}`
let sapa = ['Hai,', 'Ohayo,', 'Kyaa,', 'Halo,', 'Nyann,'].getRandom()
let sapaa = `👋 ${sapa} ${tag} ${ucapan()}, ` 
conn.sendButton(m.chat, text.trim(),"2023 © Yaemiko-Md", await (await fetch(thumb)).buffer(), [['O W N E R', '.owner'],['D O N A S I', '.donasi'],[' S P E E D', '.speed']], true, { quoted: m })
    conn.sendFile(m.chat, './mp3/dann.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['listmenu', 'menulist']

handler.command = /^(listmenu|menulist|tesm|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}
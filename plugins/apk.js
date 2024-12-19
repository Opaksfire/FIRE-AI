import fetch from 'node-fetch';
let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw 'please bro send a link!';
m.reply(wait)
 try {
let anu = await fetch(`https://www.dark-yasiya-api.site/movie/sinhalasub/search?text=${text}`)
let hasil = await anu.json() 
let tylor = await fetch(`https://www.dark-yasiya-api.site/movie/sinhalasub/movie?url=${hasil.result.data[0].link}`)
let kyuu = await tylor.json()

conn.sendMessage(m.chat, { document: { url: kyuu.result.data.dl_links[8].link }, fileName: kyuu.result.data.title, mimetype: 'video/mp4'}, { quoted: m })
 } catch (e) {
 throw `*not found!*`
 }
}
handler.command = handler.help = ['apk2', 'app', 'aplication'];
handler.tags = ['downloader'];
export default handler;

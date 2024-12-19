import fetch from 'node-fetch';
let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw 'please bro send a link!';
m.reply(wait)
 try {
let anu = await fetch(`https://zazie-md-apis.vercel.app/api/sinhalasub/movie?url=${text}`)
let hasil = await anu.json() 

conn.sendMessage(m.chat, { video: { url: hasil.result.dl_links3[2].link }, mimetype: 'video/mp4', caption: '> FIREMD INSTAGRAM DOWNLOADER'}, { quoted: m })
 } catch (e) {
 throw `*Server error!*`
 }
}
handler.command = handler.help = ['mov', 'mv', 'fm'];
handler.tags = ['downloader'];
export default handler;

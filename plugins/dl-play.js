import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `*Enter a song name!*\n\n*Example:*\n${usedPrefix + command} behold by Hillsong`
    try {
        let kyuu = await fetch(`https://api.agatz.xyz/api/ytsearch?message=${text}`);
        let tylor = await fetch(`https://api.agatz.xyz/api/ytmp3?url=${kyuu.data[0].url}`);

        // Prepare message template
        let doc = {
            audio: {
                url: tylor.data[0].downloadUrl
            },
            mimetype: 'audio/mpeg',
            fileName: `${tylor.data[0].title}.mp3`,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `${tylor.data[0].downloadUrl}`,
                    title: `FIRE MD`,
                    body: `${tylor.data[0].title}.mp3`,
                    sourceUrl: `${tylor.data[0].downloadUrl}`,
                    thumbnail: `https://i.imgur.com/tStJm2M.jpeg`,
                }
            }
        }

        // Send audio file with metadata
        await conn.sendMessage(m.chat, doc, { quoted: m })


    } catch (error) {
        console.error('Error in music download:', error)
        m.reply(`An error occurred: ${error.message}\nPlease try again later`)
    }
}

handler.help = ['play'].map(v => v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(play|mp3|ytmusic)$/i

handler.exp = 0
handler.limit = false
handler.register = false

export default handler


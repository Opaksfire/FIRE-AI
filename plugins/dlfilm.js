import fetch from 'node-fetch';
let handler = async (m, { conn, text, mek, usedPrefix, command }) => {
  if (!text) throw `*Please provide a direct URL!*`
  try {

let data0 = await fetch(`https://vajiraapi-089fa316ec80.herokuapp.com/movie/sinhalasub/search?text=${text}`);   
let hasil = await data0.json() 
let data1 = hasil.result.data[0].link
console.log(data1)

let data = await fetch(`https://vajiraapi-089fa316ec80.herokuapp.com/movie/sinhalasub/movie?url=${data1}`);   	    
let anu = await data.json() 
let data2 = anu.result.data.pixeldrain_dl[2].link
console.log(data2)
  
let cap = `        
Title : ${anu.result.data.title}
Date : ${anu.result.data.date}
Country : ${anu.result.data.country}
`	  
await conn.sendMessage(m.chat, { image: { url: anu.result.data.image}, caption: cap } , { quoted: mek })


	  
        let message = {
            document: { url: anu.result.data.pixeldrain_dl[2].link },
	    caption: `${anu.result.data.pixeldrain_dl[2].size}\n*🎬 FIRE MD MOVIEDL 🎬*`,
            mimetype: "video/mp4",
            fileName: `${anu.result.data.title}.mp4`,
        };


	    
        await conn.sendMessage(m.chat, message );


  } catch (error) {
        console.error('Error fetching or sending', error);

    }
};
handler.command = handler.help = ['movies', 'films', 'actions'];
handler.tags = ['downloader'];
export default handler;

const shortId = require('shortid');
const urls={};

function shortenUrl(string){
    let originalUrl = new URL(string);
    let href = originalUrl.href;
    let pathname = originalUrl.pathname;
    const id = shortId.generate();
    urls[id] = href;
    const shortenedUrl = `http://theous.vercel.app/${id}`
    //const shortenedUrl = `http://localhost:/${id}`
    console.log(id);
    console.log(`${urls[id]}`);
    return shortenedUrl;
}

module.exports= { shortenUrl, urls };


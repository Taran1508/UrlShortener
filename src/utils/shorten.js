function generateAlphanumericString(length = 6) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const result = [];
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result.push(chars[randomIndex]);
    }
    return result.join('');
}

const randomString = generateAlphanumericString();
console.log(randomString);

function shortenUrl(string) {
    const originalUrl = new URL(string);
    const urlPath = originalUrl.pathname;
    const model = {};
    const uniqueKey = randomString;
    model[uniqueKey] = urlPath; 

    const shortenedUrl =`${originalUrl.protocol}`+`//`+`${originalUrl.hostname}`+`/`+`${model[uniqueKey]}`
    return shortenedUrl;
}

// module.exports=shortenUrl;
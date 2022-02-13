const nextTranslate = require('next-translate')

module.exports = {
    ...nextTranslate(),
    images: {
        domains: ['assets.vercel.com'],
        formats: ['image/avif', 'image/webp'],
    },   
};



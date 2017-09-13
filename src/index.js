import i18n from 'i18n'
i18n.configure({
    locales:['en'],
    directory: __dirname + '/locales'
})
console.log('Say :', i18n.__('hello'))
const discord = require('discord.js-selfbot');

let kanal = 'ID'
const { token1, token2, token3 } = require('./config.json')

const client1 = new discord.Client()
const client2 = new discord.Client()
const client3 = new discord.Client()

client1.on('message', message => {
    setInterval(() => client1.channels.get(kanal).send('sa'), 10000) //10000 yazan yere kanala kaç saniyede bir yazmasını sağlar (ms şeklinde yazınız)
})

client2.on('message', message => {
    setInterval(() => client2.channels.get(kanal).send('as'), 10000) //10000 yazan yere kanala kaç saniyede bir yazmasını sağlar (ms şeklinde yazınız)
})

client3.on('message', message => {
    setInterval(() => client3.channels.get(kanal).sned('nbr'), 10000) //10000 yazan yere kanala kaç saniyede bir yazmasını sağlar (ms şeklinde yazınız)
})

client1.login(token1)
client2.login(token2)
client3.login(token3)
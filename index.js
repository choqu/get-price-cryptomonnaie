const Discord = require('discord.js')
const client = new Discord.Client()
const Fetch = require('node-fetch').default;
const axios = require('axios');

client.on('ready', () => {
    console.log('Connected !')
})

client.on('message', async message => {
    if (message.content == '!price') {
            axios      
            .get("https://economia.awesomeapi.com.br/last/USD-BRL,BTC-USD")
            .then((dolar) => {
              Fetch("LINK", {
                method: "post",
              })
                .then(function (response) {
                  if (response.ok) {
                    response.json().then(function ({ Data }) {
                        const embed = new Discord.MessageEmbed()
                        .setTitle('Price')
                        .setColor('BLUE')
                        .setDescription(`Dollar: ${parseFloat(Data.USDDracoRate).toFixed(2)}`)
                        .setTimestamp()
                        message.channel.send(embed)
                    });
                  }

        })
    })
}})


setInterval(() => {
    axios
    .get("https://economia.awesomeapi.com.br/last/USD-BRL,BTC-USD")
    .then((dolar) => {
      Fetch("LINK", {
        method: "post",
      })
        .then(function (response) {
          if (response.ok) {
            response.json().then(function ({ Data }) {
                const channel = client.channels.cache.get("CHANNEL ID");
                const embed = new Discord.MessageEmbed()
                .setTitle('Price')
                .setColor('BLUE')
                .setDescription(`Dollar: ${parseFloat(Data.USDDracoRate).toFixed(2)}`)
                .setTimestamp()
                channel.send(embed);
            });
          }

})
})
  
}, 60000);

client.login('TOKEN')
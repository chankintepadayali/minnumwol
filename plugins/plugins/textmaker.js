@@ -1,10 +1,7 @@
/* Codded by Phaticusthiccy
Unlimited API for Photooxy, Textpro and Instagram scraper.
Material: https://www.npmjs.com/package/textmaker-thiccy
Github: https://github.com/phaticusthiccy/TextMaker-Unlimited
This code works with unlimited and completely free an API scraper.
Don't use it for illegal purposes.
*/
@@ -35,7 +32,7 @@ if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'textmaker$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
Asena.addCommand({pattern: 'txtit$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
@@ -129,44 +126,44 @@ Asena.addCommand({pattern: 'textmaker$', fromMe: wk, desc: desc_msg}, (async (me
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        usage_cmd = '⌨️ *Örnek:* _'
        command_cmd = '💻 *Komut:* '
        desc_cmd = 'ℹ️ *Açıklama:* _'
        usage_cmd = '📍 *Örnek:* _'
        command_cmd = '🔖 *Komut:* '
        desc_cmd = '♦️*Açıklama:* _'
    } else { 
        usage_cmd = '*⌨️ Example:* _'
        command_cmd = '💻 *Command:* '
        desc_cmd = 'ℹ️ *Description:* _'
        usage_cmd = '📍 Example : *'
        command_cmd = '🔖 Command : '
        desc_cmd = '♦️ Description : '
    }
    const msg = command_cmd + '```.textdevil``` \n' + t1 + '_\n' + usage_cmd + '.textdevil Phaticusthiccy_\n\n' +
        command_cmd + '```.textbear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '.textbear Phaticusthiccy_\n\n' +
        command_cmd + '```.textwolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '.textwolf Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.textneon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '.textneon Phaticusthiccy_\n\n' +
        command_cmd + '```.text2neon``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '.text2neon Phaticusthiccy_\n\n' +
        command_cmd + '```.text3neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '.text3neon Phaticusthiccy_\n\n' +
        command_cmd + '```.text4neon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '.text4neon Phaticusthiccy_\n\n' +
        command_cmd + '```.textlight``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '.textlight Phaticusthiccy_\n\n' +
        command_cmd + '```.textjoker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '.textjoker Phaticusthiccy_\n\n' +
        command_cmd + '```.textninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '.textninja Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.textglitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '.textglitter Phaticusthiccy_\n\n' +
        command_cmd + '```.textbokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '.textbokeh Phaticusthiccy_\n\n' +
        command_cmd + '```.textmarvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '.textmarvel Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.text2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '.text2marvel Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.textavengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '.textavengers Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.textgraf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '.textgraf Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.text2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '.text2graf Developer;Phaticusthiccy_\n\n' +       
        command_cmd + '```.textlion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '.textlion Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.textice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '.textice Phaticusthiccy_\n\n' +
        command_cmd + '```.textspace``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '.textspace Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.textsmoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '.textsmoke Phaticusthiccy_\n\n' + // Thanks for @Unique_hunter for base.
        command_cmd + '```.textglow``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '.textglow Phaticusthiccy_\n\n' +
        command_cmd + '```.textfire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '.textfire Phaticusthiccy_\n\n' +
        command_cmd + '```.textharry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '.textharry Phaticusthiccy_\n\n' +
        command_cmd + '```.textcup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '.textcup Phaticusthiccy_\n\n' +
        command_cmd + '```.textcemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '.textcemetery Phaticusthiccy_\n\n' +
        command_cmd + '```.textglitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '.textglitch Developer;Phaticusthiccy_'
    const msg = command_cmd + '```.devil``` \n' + t1 + '_\n' + usage_cmd + '.textdevil BOT X*\n\n' +
        command_cmd + '```.bear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '.textbear BOT X*\n\n' +
        command_cmd + '```.wolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '.textwolf pinky;BOT X*\n\n' +
        command_cmd + '```.neon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '.textneon BOT X*\n\n' +
        command_cmd + '```.future``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '.future BOT X*\n\n' +
        command_cmd + '```.ineon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '.ineon BOT X*\n\n' +
        command_cmd + '```.matneon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '.matneon BOT X*\n\n' +
        command_cmd + '```.light``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '.light BOT X*\n\n' +
        command_cmd + '```.joker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '.joker BOT X*\n\n' +
        command_cmd + '```.ninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '.ninja pinky;BOT X*\n\n' +
        command_cmd + '```.glitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '.glitter BOT X*\n\n' +
        command_cmd + '```.bokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '.bokeh BOT X*\n\n' +
        command_cmd + '```.marvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '.marvel pinky;BOT X*\n\n' +
        command_cmd + '```.imarvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '.imarvel pinky;BOT X*\n\n' +
        command_cmd + '```.iavengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '.iavengers pinky;BOT X*\n\n' +
        command_cmd + '```.graf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '.graf pinky;BOT X*\n\n' +
        command_cmd + '```.igraf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '.igraf pinky;BOT X*\n\n' +       
        command_cmd + '```.lion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '.lion pinky;BOT X*\n\n' +
        command_cmd + '```.ice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '.ice BOT X*\n\n' +
        command_cmd + '```.space``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '.space pinky;BOT X*\n\n' +
        command_cmd + '```.smoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '.smoke BOT X*\n\n' + // Thanks for @Unique_hunter for base.
        command_cmd + '```.glow``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '.glow BOT X*\n\n' +
        command_cmd + '```.fire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '.fire BOT X*\n\n' +
        command_cmd + '```.harry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '.harry BOT X*\n\n' +
        command_cmd + '```.cup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '.cup BOT X*\n\n' +
        command_cmd + '```.cemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '.cemetery BOT X*\n\n' +
        command_cmd + '```.glitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '.glitch pinky;BOT X*'
await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
Asena.addCommand({pattern: 'textdevil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'devil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -178,14 +175,14 @@ Asena.addCommand({pattern: 'textdevil ?(.*)', fromMe: wk, dontAddCommandList: tr
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/devil.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/devil.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textbear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'bear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -197,14 +194,14 @@ Asena.addCommand({pattern: 'textbear ?(.*)', fromMe: wk, dontAddCommandList: tru
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bear.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bear.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textwolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'wolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
@@ -225,14 +222,14 @@ Asena.addCommand({pattern: 'textwolf ?(.*)', fromMe: wk, dontAddCommandList: tru
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/wolf.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/wolf.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -244,14 +241,14 @@ Asena.addCommand({pattern: 'textneon ?(.*)', fromMe: wk, dontAddCommandList: tru
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'future ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -263,14 +260,14 @@ Asena.addCommand({pattern: 'text2neon ?(.*)', fromMe: wk, dontAddCommandList: tr
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon2.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon2.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textlight ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'light ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -282,14 +279,14 @@ Asena.addCommand({pattern: 'textlight ?(.*)', fromMe: wk, dontAddCommandList: tr
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/li.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/li.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textjoker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'joker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -301,14 +298,14 @@ Asena.addCommand({pattern: 'textjoker ?(.*)', fromMe: wk, dontAddCommandList: tr
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/joker.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/joker.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'ninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
@@ -329,14 +326,14 @@ Asena.addCommand({pattern: 'textninja ?(.*)', fromMe: wk, dontAddCommandList: tr
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ninja.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ninja.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textglitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'glitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -348,14 +345,14 @@ Asena.addCommand({pattern: 'textglitter ?(.*)', fromMe: wk, dontAddCommandList:
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textbokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'bokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -367,14 +364,14 @@ Asena.addCommand({pattern: 'textbokeh ?(.*)', fromMe: wk, dontAddCommandList: tr
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bkh.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bkh.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textmarvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
@@ -395,14 +392,14 @@ Asena.addCommand({pattern: 'textmarvel ?(.*)', fromMe: wk, dontAddCommandList: t
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/marvel.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/marvel.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'imarvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        @@ -423,14 +420,14 @@ Asena.addCommand({pattern: 'text2marvel ?(.*)', fromMe: wk, dontAddCommandList:
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/mar2.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/mar2.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textavengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'iavengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
@@ -451,14 +448,14 @@ Asena.addCommand({pattern: 'textavengers ?(.*)', fromMe: wk, dontAddCommandList:
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/aven.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/aven.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textglitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
@@ -479,14 +476,14 @@ Asena.addCommand({pattern: 'textglitch ?(.*)', fromMe: wk, dontAddCommandList: t
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt2.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt2.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textgraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
@@ -507,14 +504,14 @@ Asena.addCommand({pattern: 'textgraf ?(.*)', fromMe: wk, dontAddCommandList: tru
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ttgra.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ttgra.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'igraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
@@ -535,14 +532,14 @@ Asena.addCommand({pattern: 'text2graf ?(.*)', fromMe: wk, dontAddCommandList: tr
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t2gra.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t2gra.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textlion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'lion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
@@ -563,14 +560,14 @@ Asena.addCommand({pattern: 'textlion ?(.*)', fromMe: wk, dontAddCommandList: tru
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/lion.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/lion.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'ineon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -582,14 +579,14 @@ Asena.addCommand({pattern: 'text3neon ?(.*)', fromMe: wk, dontAddCommandList: tr
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon3.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon3.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'ice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -601,14 +598,14 @@ Asena.addCommand({pattern: 'textice ?(.*)', fromMe: wk, dontAddCommandList: true
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ice.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ice.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textspace ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'space ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
@@ -629,14 +626,14 @@ Asena.addCommand({pattern: 'textspace ?(.*)', fromMe: wk, dontAddCommandList: tr
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/space.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/space.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textsmoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'smoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -648,25 +645,25 @@ Asena.addCommand({pattern: 'textsmoke ?(.*)', fromMe: wk, dontAddCommandList: tr
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/smoke.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/smoke.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/smoke.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textglow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'glow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/WhatsAsenaDuplicated/glowttp.jpg', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/glowttp.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
        await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/glowttp.jpg'), MessageType.image, { caption: 'BOT X' })
    })
}));
Asena.addCommand({pattern: 'textfire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'fire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -678,14 +675,14 @@ Asena.addCommand({pattern: 'textfire ?(.*)', fromMe: wk, dontAddCommandList: tru
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tfire.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tfire.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tfire.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textharry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'harry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -697,14 +694,14 @@ Asena.addCommand({pattern: 'textharry ?(.*)', fromMe: wk, dontAddCommandList: tr
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/hp.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/hp.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/hp.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text4neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'matneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -716,14 +713,14 @@ Asena.addCommand({pattern: 'text4neon ?(.*)', fromMe: wk, dontAddCommandList: tr
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t4n.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t4n.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textcemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'cemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -735,14 +732,14 @@ Asena.addCommand({pattern: 'textcemetery ?(.*)', fromMe: wk, dontAddCommandList:
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cmth.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cmth.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textcup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
Asena.addCommand({pattern: 'cup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
@@ -754,7 +751,7 @@ Asena.addCommand({pattern: 'textcup ?(.*)', fromMe: wk, dontAddCommandList: true
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cup.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cup.jpg'), MessageType.image, { caption: 'BOT X' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

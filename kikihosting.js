const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@whiskeysockets/baileys')
const { getGroupAdmins,updateDatabase } = require('./lib/functions.js')
const { exec } = require('child_process')
const fs = require('fs')
const request = require("request")
module.exports = async (kikihosting, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = kikihosting.user.id.split(':')[0]
const sender = msg.key.fromMe ? (kikihosting.user.id.split(':')[0]+'@s.whatsapp.net' || kikihosting.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await kikihosting.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await kikihosting.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
0
// kirimprib(hasillrndy
const kirimprib =async(text,id) => { await kikihosting.sendMessage(id,{text: text},{quoted:msg}) }
//ALL DATABASE
server = JSON.parse(fs.readFileSync('./database/server.json'))
grups = JSON.parse(fs.readFileSync('./database/grups.json'))
switch (command) {

    // 2 OKTOBER 2022
    // FITUR HOST

     case 'menu' :
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menu =` *MENU*
Open Murid Curl
Open Pt Panel Jasteb
Silahkan Hubungi Wa Admin
${prefix}@62895428441228
${prefix}vcs : Untuk Add Grup
${prefix}menuweb : Liat List Web`
reply(menu)

        }else{
            reply("Join Dulu Biar Jadi Temen https://t.me/script_kikihosting")
        }
        break
      
        case 'update':
        if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        
            if(args == ""){
            psn = `SILAHKAN DI SIMAK
jika ingin update url server ketik *${prefix}${command}* url | xnxx.com
             
jika ingin update username server ketik *${prefix}${command}* username | root
             
jika ingin update password server ketik *${prefix}${command}* password | @@##ServerIndoNet##@@
             
jika ingin update ipaddress server ketik *${prefix}${command}* ip | 1.1.1.1
             
jika ingin tambah grup ketik *${prefix}${command}* grup | 120363024065162195@g.us
            `
            reply(psn)
            }else{
                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `
                
                *SUKSES OM KIKI*
            
            `
            reply(info)
                }
                
            }
            
            break
            
            case 'infobot' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            id = msg.key.remoteJid
        
            info = `
            
*MAU MALING YA DECK?*            
            
            
            `
            reply(info);
            
            break
            
        case 'listgrup':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        let text = "LIST GRUP VIP :\n\n"
            for (let i = 0; i < grups.length; i++) {
                text += "> "+ grups[i] + "\n";
            }
            reply(text)
            
            
            break    
            case 'vcs':
                id = msg.key.remoteJid
                pengirim = msg.key.participant
                nama = msg.pushName
          

    await kikihosting.sendMessage(pengirim,{text: `.update grup | ${id} \n\n`},{quoted:msg})

            break 
            
//CASE HOST

case 'list' :
case 'listweb' :
case 'listwebp' :
case 'webmenu' :
case 'menuwebp' :
case 'menuweb' :
menuweb = `
┏━━⊱ *「 LIST TAMPILAN WEB P 」*
┣❏ .webp1 : MediaFire Web Arya
┣❏ .webp2 : MediaFire Ber Ip
┣❏ .webp3 : Dana Kaget
┣❏ .webp4 : Grup Wa 18+
┣❏ .webp5 : Kouta Gratis
┣❏ .webp6 : Mobile Legends
┣❏ .webp7 : Spin FF Keren
┣❏ .webp8 : YouTube 18+
┣❏ .webp9 : Simontok 18+
┣❏ .webp10 : Nonton Video 18+
┣❏ .webp11 : Nonton Video 18+ 
┗━━[ *Web guwe* ]━━⊱
┏━━━━━━━━━━━━━━━━━━━⊱
┣❏ Ketik: .webp1
┣❏ Untuk Web MediaFire
┗━━━━━━━━━━━━━━━━━━━⊱

▬▭▬▭▬▭▬▭▬▭▬▭▬▭`
reply(menuweb)
break
                  case 'webp1' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "newlink" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses Jeda 2 Menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/mediafire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "kikihost",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/mediafire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        
                    }

                    hasillrndy = `*- WEB MediaFire*

==========================
*WEBSITE :*
https://${domain}/vhsfhqpdhdsih6
==========================
*WEB SETTING :* 
${domain}/vhsfhqpdhdsih6/setting.php
==========================
*DOWNLOAD SCRIPT GG*
https://t.me/script_kikihosting
==========================`


                    reply(`*Success* Membuat website ${namamu}`)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL JOIN DULU LAH BIAR NANTI DI ADD DI GRUP MU https://t.me/script_kikihosting  』*")
        }
break
        
                  case 'webp2' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "newlink" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses Jeda 2 Menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/mediafire2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "kikihost",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/mediafire2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        
                    }

                    hasillrndy = `*- WEB MediaFire Ber Ip*

==========================
*WEBSITE :*
https://${domain}/
==========================
*WEB SETTING :* 
${domain}/vhsfhqpdhdsih6/setting.php
==========================
*DOWNLOAD SCRIPT GG*
https://t.me/script_kikihosting
==========================`


                    reply(`*Success* Membuat website ${namamu}`)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL JOIN DULU LAH BIAR NANTI DI ADD DI GRUP MU https://t.me/script_kikihosting  』*")
        }
break

                  case 'webp3' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "newlink" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses Jeda 2 Menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/daget/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "kikihost",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/daget/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        
                    }

                    hasillrndy = `*- WEB Dana Kaget*

==========================
*WEBSITE :*
https://${domain}/
==========================
*WEB SETTING :* 
${domain}/vhsfhqpdhdsih6/setting.php
==========================
*DOWNLOAD SCRIPT GG*
https://t.me/script_kikihosting
==========================`


                    reply(`*Success* Membuat website ${namamu}`)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL JOIN DULU LAH BIAR NANTI DI ADD DI GRUP MU https://t.me/script_kikihosting  』*")
        }
break

                  case 'webp4' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "newlink" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses Jeda 2 Menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/grupwa/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "kikihost",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/grupwa/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        
                    }

                    hasillrndy = `*- WEB Grup WA 18+*

==========================
*WEBSITE :*
https://${domain}/
==========================
*WEB SETTING :* 
${domain}/vhsfhqpdhdsih6/setting.php
==========================
*DOWNLOAD SCRIPT GG*
https://t.me/script_kikihosting
==========================`


                    reply(`*Success* Membuat website ${namamu}`)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL JOIN DULU LAH BIAR NANTI DI ADD DI GRUP MU https://t.me/script_kikihosting  』*")
        }
break

                  case 'webp5' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "newlink" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses Jeda 2 Menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/kouta/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "kikihost",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/kouta/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        
                    }

                    hasillrndy = `*- WEB Kouta Gratis*

==========================
*WEBSITE :*
https://${domain}/
==========================
*WEB SETTING :* 
${domain}/vhsfhqpdhdsih6/setting.php
==========================
*DOWNLOAD SCRIPT GG*
https://t.me/script_kikihosting
==========================`


                    reply(`*Success* Membuat website ${namamu}`)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL JOIN DULU LAH BIAR NANTI DI ADD DI GRUP MU https://t.me/script_kikihosting  』*")
        }
break

                  case 'webp6' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "newlink" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses Jeda 2 Menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/mlbb/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "kikihost",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/mlbb/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        
                    }

                    hasillrndy = `*- WEB Mobile Legends*

==========================
*WEBSITE :*
https://${domain}/
==========================
*WEB SETTING :* 
${domain}/vhsfhqpdhdsih6/setting.php
==========================
*DOWNLOAD SCRIPT GG*
https://t.me/script_kikihosting
==========================`


                    reply(`*Success* Membuat website ${namamu}`)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL JOIN DULU LAH BIAR NANTI DI ADD DI GRUP MU https://t.me/script_kikihosting  』*")
        }
break

                  case 'webp7' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "newlink" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses Jeda 2 Menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/ffspin/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "kikihost",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/ffspin/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        
                    }

                    hasillrndy = `*- WEB Spin FF Keren*

==========================
*WEBSITE :*
https://${domain}/
==========================
*WEB SETTING :* 
${domain}/vhsfhqpdhdsih6/setting.php
==========================
*DOWNLOAD SCRIPT GG*
https://t.me/script_kikihosting
==========================`


                    reply(`*Success* Membuat website ${namamu}`)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL JOIN DULU LAH BIAR NANTI DI ADD DI GRUP MU https://t.me/script_kikihosting  』*")
        }
break

                  case 'webp8' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "newlink" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses Jeda 2 Menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/youtube/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "kikihost",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/youtube/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        
                    }

                    hasillrndy = `*- WEB YouTube 18+*

==========================
*WEBSITE :*
https://${domain}/
==========================
*WEB SETTING :* 
${domain}/vhsfhqpdhdsih6/set.php
==========================
*DOWNLOAD SCRIPT GG*
https://t.me/script_kikihosting
==========================`


                    reply(`*Success* Membuat website ${namamu}`)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL JOIN DULU LAH BIAR NANTI DI ADD DI GRUP MU https://t.me/script_kikihosting  』*")
        }
break

                  case 'webp9' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "newlink" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses Jeda 2 Menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/simontok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "kikihost",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        
                    }

                    hasillrndy = `*- WEB Simontok 18+*

==========================
*WEBSITE :*
https://${domain}/
==========================
*WEB SETTING :* 
${domain}/vhsfhqpdhdsih6/setting.php
==========================
*DOWNLOAD SCRIPT GG*
https://t.me/script_kikihosting
==========================`


                    reply(`*Success* Membuat website ${namamu}`)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL JOIN DULU LAH BIAR NANTI DI ADD DI GRUP MU https://t.me/script_kikihosting  』*")
        }
break

                  case 'webp10' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "newlink" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses Jeda 2 Menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/nonton/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "kikihost",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/nonton/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        
                    }

                    hasillrndy = `*- WEB Nonton Video 18+*

==========================
*WEBSITE :*
https://${domain}/
==========================
*WEB SETTING :* 
${domain}/vhsfhqpdhdsih6/setting.php
==========================
*DOWNLOAD SCRIPT GG*
https://t.me/script_kikihosting
==========================`


                    reply(`*Success* Membuat website ${namamu}`)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL JOIN DULU LAH BIAR NANTI DI ADD DI GRUP MU https://t.me/script_kikihosting  』*")
        }
break

                  case 'webp11' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "newlink" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses Jeda 2 Menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/nonton2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "kikihost",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiihwebguweh.hakikixd.biz.id/api-web/nonton2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        
                    }

                    hasillrndy = `*- WEB Nonton Video 18+*

==========================
*WEBSITE :*
https://${domain}/
==========================
*WEB SETTING :* 
${domain}/vhsfhqpdhdsih6/setting.php
==========================
*DOWNLOAD SCRIPT GG*
https://t.me/script_kikihosting
==========================`


                    reply(`*Success* Membuat website ${namamu}`)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL JOIN DULU LAH BIAR NANTI DI ADD DI GRUP MU https://t.me/script_kikihosting  』*")
        }
break


case 'grup':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (args.length < 1) return reply("silahkan pilih gc open/close")
if (args[0] === 'open'){ await kikihosting.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'close'){ await kikihosting.groupSettingUpdate(from, 'announcement')} else { reply('yang bener lah pantek')}
break

case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await kikihosting.groupParticipantsUpdate(from, [remove], "remove")
break

case 'promote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await kikihosting.groupParticipantsUpdate(from, [promote], "promote")
reply('Done!')
break

case 'demote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await kikihosting.groupParticipantsUpdate(from, [demote], "demote")
reply('Done!')
break

case 'leave':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await kikihosting.groupLeave(from)
break

case 'delete': case 'd': case 'del':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
kikihosting.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break

case 'restart':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 restart index.js`, (error, stdout, stderr) => {
    reply("BERHASIL RESTART ULANG")
    reply(stdout)
})
break

case 'shutdown':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break
default:
}} catch (e) {
console.log(e)
}
}
//正经人写的插件
import fetch from "node-fetch";
import fs from "fs";
export class kanshenme extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: '看什么',
            /** 功能1描述 */
            dsc: '看什么',
            /** https://oicqjs.github.io/oicq/#events */
            event: 'message',
            /** 优先级,数字越小等级越高 */
            priority: 500,
            rule: [{
                reg: '^#看(.*)',
                fnc: 'kt',

            }
            ]

        })
    }
    //https://xiaobapi.top/api/xb/api/meitui.php?type=
    //https://xiaobapi.top/api/xb/api/beauty_video.php

    async kt(e) {
        let url
        if (e.msg == '#看腿') {

            url = 'https://xiaobapi.top/api/xb/api/meitui.php?type='
            let res = await fetch(url)
            res = await res.text()
            e.reply(segment.image(res))
            return false
        }



       if (e.msg == '#看白丝') {
            url = 'https://api.caonm.net/api/bhs/b?key=JMHz65uMHMZ3WCpl4jQ1U1blRr'
            e.reply(segment.image(url))
            return
        }
        if (e.msg == '#看黑丝') {
            url = 'http://api.caonm.net/api/bhs/h?key=JMHz65uMHMZ3WCpl4jQ1U1blRr'
            e.reply(segment.image(url))
            return false
        }


        if (e.msg == '#看美铝' | e.msg == '#看漫剪') {
            if (e.msg == '#看美铝') url = 'https://api.caonm.net/api/cdmn/m.php?lx'
            if (e.msg == '#看漫剪') url = 'https://api.caonm.net/api/mjsp/m.php'
            await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/octet-stream'
                },
            }).then(res => res.buffer()).then(_ => {
                fs.writeFile("./resources/ml.mp4", _, "binary", function (err) {
                    if (err)
                        console.error(err);
                    else
                        console.log("下载成功");
                });
            })

            let msg = segment.video('./resources/ml.mp4')



            await e.reply(msg)
            return false
        }

        let name = e.msg.replace(/#看/, "").trim()
        name = name.replace(/ /, "|").trim()
        let url2 = `https://api.lolicon.app/setu/v2?tag=${name}&size=regular`

        let res2 = await fetch(url2)
        res2 = await res2.json()

        try{
            e.reply(segment.image(res2.data[0].urls.regular))
        }catch{
            e.reply('木有！看毛线了')
        }



       
        //https://api.lolicon.app/setu/v2?tag=&size=regular
        return false






    }

}

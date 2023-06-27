import fetch from "node-fetch";
import puppeteer from "../../..//lib/puppeteer/puppeteer.js";
let data1 = {}
let ml = process.cwd()
let lb = []
let tpj = []
let mz = []
let yema = 1
export class OrderGames extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: '[土块插件]点游戏',
            /** 功能描述 */
            dsc: '简单开发示例',
            event: 'message',
            /** 优先级，数字越小等级越高 */
            priority: 1145,
            rule: [{
                reg: "^#点游戏$|#玩游戏(.*)$|#下一页游戏|#上一页游戏", //匹配消息正则，命令正则
                /** 执行方法 */
                fnc: 'youxi'
            }

            ]

        })
    }

    async youxi(e) {
        if (e.msg == '#点游戏' | e.msg == '#下一页游戏' | e.msg == '#上一页游戏') {

            if (e.msg == '#下一页游戏') {
                if (yema < 5) {
                    yema = yema + 1
                }
            }
            if (e.msg == '#上一页游戏') {
                if (yema > 1) {
                    yema = yema - 1
                }
            }


            //ci_csrf_token=&type=3&pn=2&pc=10&order_by=
            let url = 'http://www.tukuai.one/yx.php?ym=' + yema

            let res = await fetch(url)
            let response = await res.json()


            //<a href="(.*?)"><
            lb = []
            tpj = []
            mz = []
            for (let n = 0; n < response.data.length; n++) {

                lb.push(response.data[n].rom_path)
                tpj.push(response.data[n].ico_remote)
                mz.push(response.data[n].game_name)

            }

            data1 = {
                tplFile: './plugins/earth-k-plugin/resources/html/Game/OrderGames.html',
                dz: ml,
                lb: lb,
                tp: tpj,
                mz: mz

            }
            let img = await puppeteer.screenshot("123", {
                ...data1,
            });
            e.reply(img)

        }

        if (e.msg.includes('#玩游戏')) {
            let id = e.msg.replace(/#玩游戏/g, "").trim()
            id = Number(id)

            let tp = segment.image(tpj[id - 1])
            e.reply([tp, lb[id - 1]])
        }

    }

}

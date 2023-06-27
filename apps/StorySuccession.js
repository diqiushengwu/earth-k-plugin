import fetch from "node-fetch";
import puppeteer from "../../../lib/puppeteer/puppeteer.js";
let ml = process.cwd()
let wanjia = []
let game = 0
let fq = 0
let daan = ""
let renshu = 0
let huihe = 0
let wjname = []
let wj = []
let fen = []
let wjname1 = []
let data1 = {}
let lunci = 0
let huihe1 = 0
let zhuren
let qun = 0
let gs = ""
let gushi = ""
let ciku = ['激情', '恐怖', '温馨', '可爱', '惊悚', '灵异', '团结', '有爱', '大哥', '小黑子', '666', '蔡徐坤', '黑夜', '马车', '侦探', '白日做梦', '手机', '痛苦', '可怕'
    , '有趣', '轻松', '愉快', '音乐', '唱', '跳', 'RAP', '篮球', '科幻', '战争', '温暖', '会飞', '残酷', '恐惧', '幻觉', '电影', '爱情', '大佬', '花海',"禁止登录", "版本过低", "你小子给我正常点", "娜娜", "锅巴插件", "喵喵插件", "土块插件", "ap插件", "苏苏", "煌", "渔火", "地球生物", "k宝由我保护","可爱不是性感吗","ip和不穿衣服一样","想和k佬贴贴","我化身白毛萝莉给你操好不好","我被渔糕吞进肚子里了","苏苏摸起来好舒服啊","喵喵除了吃c佬不吃其他人","白嫖乐神服务器","我可以贡献我的py","就好这口幼的","我干你","香香渔火","15岁就这么邢了","查爆我的小学","男的萝莉","更新就完了","我从娜娜还在喵群就暗恋他了","但我还是喜欢娜娜的","再表白一个","mua","不要质疑娜娜的话","安装p佬解决问题","我不信除非k佬让我透一下","禁言的一分钟内我被透了整整60次","煌是我唯一的精神寄托","其实我喜欢的是渔火","喵佬是可爱小萝莉","nude app","不可以涩涩","#绘个图丘丘人南半球","不要太离谱","地球生物是不是正经人","渔火和k私奔了","cos涩批","我要改一下可爱的c佬的代码了","我肯定会留一手的","派蒙的b","纳西妲的b","xx是按摩的意思","趁我睡觉玩弄我身体","为什么不加点灵魂","啊？","直播艹渔火","开银趴被抓住了","打不过就画涩图啊","因为冲的太多了","我认为这样可以让你们身体更好","习惯把官网搞崩","我与涩图不共戴天","再画一张","我可没看过完全不熟悉","我要备战幼儿园升学考试","苏苏怎么还没长胸","求求你","我应该可以","直播看片","气死你","来咬我啊","我tm想艹死你","会不会变硬","我就是个傻逼","每次看到cvs头像就想冲","有网址吗","小白兔白又白两个xx翘起来","地球进到喵喵里面了","你个凑撒比","煌佬是狗","你nnd","创死我了","过火了我就要打你小屁屁了","抢我苏苏是吧","揉起来刚刚好","我粉我家哥哥十年了","你丫丫的","还是喜欢希佬的声音","mua死你个小妖精","#cnmd","等等就伪造你信息卖身子","我等得起","活该被倒卖","可恶的苏苏","翻脸不认人","就是外面有狗了","苏苏是我的宝","资本家都没你们这么黑","我要把你日得喵喵叫","#图鉴插件更新","可以x但是一个个来","渔火换妹子","要进也是他进去","有小姐姐吗","赛马加入cvs","真怕喵喵半夜猝死了","我就倒卖不了了","中国十个首富八个倒卖云崽起家的","哪天不开房","你笑得比哭还难看","怎么拒绝别人给我冲","跑路了那妹子分一分吧","#进入p佬","5000块去嫖娼","一年后没跑路再写","是女的快同意","反正不是我解答","看看美女应该不犯法吧","我只是想给天下男孩子一个家","真变态","当我女朋友手把手教你","快说谢谢云崽","煌那特别关心一直响","渔火声音好受","最后k还不是和我睡","我已经14个小时没有涩涩了","来吧咱的小很紧很舒服的","我已经怀了煌的孩子","夹着枕头玩了一下","他说他爽死了","想侵犯喵佬","只有男人和伪娘罢了","渔火随地生个渔糕来看看","进来让我轰你两炮","我记得反弹管理只在蒙德生效","明年春晚没有渔火修渔糕我不看","喵佬好可爱想超","苏苏什么时候女装","#t@渔火","色色记录里面全是我","我有三天核酸检测证明","看到这小子这么幸福比噶了渔火还难受","问题不大一会改改政策","界~遗忘我~","剑，镜子，玉石","六道轮回，公元2006年，大连","下流　无耻　卑鄙","艺人,绯闻,狗仔","武僧，武警，大师"]

let kt = ['当晚最后一辆73路公交车返回公交总站，街上的路灯依次熄灭，李雷掐灭了手上的烟头，转身浸入一片黑暗。街角，提着高跟鞋的女人不紧不慢的尾随。“韩梅梅，你来了。”',
    '穿越过后宫，性格呆萌的我本打算混吃等死，当个小公主就好啦！  可偏偏获得了一个《皇帝宠幸别人我就会死系统》，  哎呀，皇帝今晚要去延禧宫，怎么办....眼看着天就要黑了！',
    '再来个系统叭，谁说得到系统就可以为所欲为？我这个系统简直一言难尽！天生高冷的我得到了一个舔狗系统，系统天天让我去舔那些一言难尽的人！.舔还不行吗！',
    '长生8000年，已经叱咤一界的我再次回到地球。呵呵，我脑补了许多自己在这里无敌的场面。一段时间之后等等，你说你活了8万年？他活了80万年？什么？还有800万年的！',
    '就想起昨天晚上这里闹鬼,小明就不敢出去,呆在家里看电视......突然,一阵声音传来,呜..........呜这声音如此的恐怖,他吓的赶紧躲到桌子底下,声音越来越近........忽然,一个白影闪过,小明尖叫一声"啊"........',
    '出门就被一架飞机撞死了！不过，还好，天龙2星上的智能生物昨天刚刚送给地球一批起死回生的食物，他吃下后，果然又活了过来，不过........',
    '我叫鸡哥，我经常被黑，但我从不。。。',
    '圣遗物又强化失败了，我独自一个人走到天台',
    '我是一个超能力者，这天我拯救了一个鸡哥',
    '为什么！为什么大家都要黑我，明明我只是爱打篮球而已',
    '我叫小鸡，我喜欢唱跳rap，我在学校有很多粉丝...',
    '某天，我收到了鸡哥的来信...',
    '这个世界，拒绝了我鸡哥吗？',
    '我来自鸡星球，在这里生活的人，各个都...',
    '我第一次打篮球的时候，是她...',
    '天呐。竟然是鸡哥，是鸡哥，啊啊啊..',
]

let gsnr = []
let msr = []
let gjc = []
let tx = []
export class StorySuccession extends plugin {
    constructor() {
        super({
            name: '[土块插件]故事接龙',
            dsc: '简单开发示例',
            event: 'message',
            priority: 1145,
            rule: [{
                reg: "^#加入故事接龙$",
                fnc: 'jryx'
            }, {
                reg: "^#开始故事接龙$|讲述(.*)",
                fnc: 'ksyx'
            }, {
                reg: "^#发起故事接龙$",
                fnc: 'jryx'
            }, {
                reg: "^#结束故事接龙$",
                fnc: 'jsyx'
            }

            ]

        })
    }
    async jsyx(e) {
        if (e.user_id == zhuren) {
            e.reply('故事接龙已结束')
            wanjia = []
            game = 0
            fq = 0
            daan = ""
            renshu = 0
            huihe = 0
            huihe1 = 0
            wjname = []
            wj = []
            fen = []
            wjname1 = []
            data1 = {}
            lunci = 0
            zhuren = 0
            qun = 0
            gsnr = []
            msr = []
            gjc = []
            tx = []

        }


    }


    async jryx(e) {

        if (fq == 0 & e.msg == '#发起故事接龙') {
            zhuren = e.user_id
            fq = 1
            e.reply('故事接龙已发起，快来加入吧')
            qun = e.group_id
            console.log(e.group_id)
        } else if (fq == 1 & e.msg != '#加入故事接龙') {
            e.reply('已经发起过了，哼哼啊啊啊啊啊')
            return
        }
        else if (fq == 0 & e.msg == '#加入故事接龙') {
            e.reply('游戏还没发起呢')
            return
        }

        console.log(wanjia.indexOf(e.user_id))
        if (wanjia.indexOf(e.user_id) == -1) {
            if (game == 0) {

                wanjia[wanjia.length] = e.user_id
                let msg = [segment.at(e.user_id), '加入游戏成功，当前人数', String(wanjia.length), '人']
                e.reply(msg)
                renshu = wanjia.length

                wjname[wanjia.length - 1] = e.author.username

            }
            if (game == 1) {
                e.reply('游戏已经开始了,哼哼啊啊啊啊啊啊啊')
            }

        } else {
            if (game == 0) {
                e.reply('你已经加入游戏了！')


            }
            if (game == 1) {
                e.reply('游戏已经开始了,哼哼啊啊啊啊啊啊啊')
            }
        }
    }

    async ksyx(e) {
        if (e.msg.includes('讲述') & game == 0) {
            return false
        }

        if (e.msg.includes('讲述') & game == 1) {

            if (e.user_id == wanjia[huihe]) {
                console.log(123123123)
                huihe1 = huihe1 + 1
                gs = e.msg.replace(/讲述/g, "").trim();
                msr.push(wjname[huihe])
                gsnr.push(gs)
                console.log(e.user_id, wanjia[huihe])
                let i = Math.floor(Math.random() * ciku.length);
                gjc.push(ciku[i])
				
                let a = e.author.avatar
                tx.push(a)
				console.log(a)

                data1 = {
                    tplFile: './plugins/earth-k-plugin/resources/html/StorySuccession/StorySuccession.html',
                    dz: ml,
                    wjname: wjname1,
                    msr: msr,
                    gsnr: gsnr,


                    gjc: gjc,
                    tx: tx,

                    huihe: huihe1,
                    ren: wanjia.length * 2
                }

                let img = await puppeteer.screenshot("123", {
                    ...data1,
                });
                e.reply(img)
                huihe = huihe + 1

                if (lunci == 1 & huihe == wanjia.length) {
                    e.reply('故事接龙游戏结束，以上为最终故事')
                    wanjia = []
                    game = 0
                    fq = 0
                    daan = ""
                    renshu = 0
                    huihe = 0
                    huihe1 = 0
                    wjname = []
                    wj = []
                    fen = []
                    wjname1 = []
                    data1 = {}
                    lunci = 0
                    zhuren = 0
                    qun = 0

                    gsnr = []
                    msr = []
                    gjc = []
                    tx = []

                    return
                }
                if (huihe == wanjia.length) {
                    huihe = 0
                    lunci = 1
                }
                e.reply(['已描述完毕' + '\n现在进入下一轮', '\n当前讲述:', segment.at(wanjia[huihe]), '\n当前关键词：' + ciku[i]])
            }
            return
        }
        if (game == 0 & e.msg == '#开始故事接龙') {
            let n = Math.floor(Math.random() * kt.length);
            gushi = kt[n]

            e.reply(['\n故事接龙已开始，请第一位描述者开始编造故事开头\n'])
            let i = Math.floor(Math.random() * ciku.length);
            daan = ciku[i]
            let msg2 = '以下为玩家对应的号码数'
            for (let i = 0; i < renshu; i++) {
                msg2 = msg2 + '\n' + String(i + 1) + '号：' + wjname[i]
            }
            gjc.push(ciku[i])
            e.reply([msg2, '\n当前讲述:', segment.at(wanjia[huihe]), '\n当前关键词:', ciku[i]])
            ciku.splice(i, 1)
            game = 1
        } else if (game == 1 & e.msg == '#开始故事接龙') {
            e.reply('游戏已经开始了,哼哼啊啊啊啊啊啊啊')
        }
    }
}


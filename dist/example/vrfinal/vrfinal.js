var WxParse = require('../wxParse/wxParse.js');
Page({
    data: {
        article: `<div class="box-bd">
                            <p class="MsoNormal" style="text-align: center;" align="center"><strong><span style="font-family: 宋体; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast;">炫境世界体验店与服务介绍</span></strong></p>
<p class="MsoNormal"><span lang="EN-US" style="font-family: 宋体; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast;">&nbsp;</span></p>
<p class="MsoNormal"><span style="font-family: 宋体; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast;">虚拟现实浸入未来，炫境世界由<span lang="EN-US">913VR</span>与拓普互动合力打造的一个集游乐、教育、发布未来科技概念等创新型娱教空间。炫境世界坐落于福州市繁华且交通便利的市中心五一北路<span lang="EN-US">126</span>号新华书店<span lang="EN-US">3</span>层，店内拥有实感赛车、骑行英雄、天地行、<span lang="EN-US">PSVR</span>等<span lang="EN-US">VR</span>设备。</span></p>
<p class="MsoNormal"><span lang="EN-US" style="font-family: 宋体; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast;">&nbsp;</span></p>
<p class="MsoNormal"><strong><span style="font-family: 宋体; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast;">实感赛车：</span></strong><span style="mso-bidi-font-size: 10.5pt; font-family: 宋体; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast; mso-bidi-font-family: 宋体; mso-bidi-theme-font: minor-fareast;">采用全新的赛车运动模拟思路，如临赛车场的真实感，独家运动机械结构设计，配套齐全的驾驶操控功能，能实感模拟赛车，有功能齐全的架势控制面板，细腻拟真画面，搭配高质环境配乐，让游戏充满临场气氛！准确还原车辆撞击、坠落、加速等瞬间重力速度、路面起伏感。</span></p>
<p><img src="http://i3.17173cdn.com/gdthue/YWxqaGBf/vrlive/viFNVqblgixyBfd-cSsiqN.png" alt=""></p>
<p class="MsoNormal">&nbsp;</p>
<p class="MsoNormal"><span lang="EN-US" style="mso-bidi-font-size: 10.5pt; font-family: 宋体; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast; mso-bidi-font-family: 宋体; mso-bidi-theme-font: minor-fareast;">&nbsp;</span></p>
<p class="MsoNormal"><strong><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;">骑行英雄（</span><span lang="EN-US">VR</span></strong><strong><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;">自行车）：</span></strong><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;">模拟真实的户外骑车体验，配合全方位多点检测传感器，系统实时监测骑行的速度和方向，并在画面中同步出来，骑行中，玩家能转动头部</span><span lang="EN-US">360</span><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;">°全方位欣赏沿途美景。我们还加入了助力系统，骑行阻力会根据地图中赛道地形的变化而变化。</span></p>
<p class="MsoNormal"><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;"><img src="http://i3.17173cdn.com/gdthue/YWxqaGBf/vrlive/oFBGwOblgixzpwb-lYyiHY.png" alt=""></span></p>
<p class="MsoNormal">&nbsp;</p>
<p class="MsoNormal"><strong><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;">全沉浸套装（天地行）：</span></strong><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;">采用目前最高端，沉浸感真实感都堪称最强的</span><span lang="EN-US">HTC Vive</span><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;">设备，你的整个视界都会扩展成一个全新的虚拟世界，你可以在这个世界中走动、下蹲、跳跃、倾斜、转头、看向任何方向，所以我们给这套设备取名为天地行，拥有</span><span lang="EN-US">CS</span><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;">枪战、弓箭手、切西瓜以及海洋世界，太空战机等等众多精品游戏。</span></p>
<p class="MsoNormal"><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;"><img src="http://i3.17173cdn.com/gdthue/YWxqaGBf/vrlive/LvcqekblgixzEwy-AfErIG.png" alt=""></span></p>
<p class="MsoNormal"><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;"><img src="http://i3.17173cdn.com/gdthue/YWxqaGBf/vrlive/yVDJjUblgixBgwr-bLVOpe.png" alt=""></span></p>
<p class="MsoNormal">&nbsp;</p>
<p class="MsoNormal">&nbsp;</p>
<p class="MsoNormal"><span style="font-family: 宋体; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast;">除了<span lang="EN-US">HTC Vive</span>，炫境世界还引进了索尼<span lang="EN-US">PSVR</span>设备，可根据玩家的喜好下载热门<span lang="EN-US">PSVR</span>游戏，深受不同年龄层的顾客喜爱。</span></p>
<p>&nbsp;</p>
<p><img src="http://i3.17173cdn.com/gdthue/YWxqaGBf/vrlive/YhmIQdblgixCawd-TvTzYb.png" alt=""></p>
<p class="MsoNormal"><span lang="EN-US" style="font-family: 宋体; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast;">&nbsp;</span></p>
<p class="MsoNormal">&nbsp;</p>
<p class="MsoNormal" align="left"><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;">至目前为止，炫境世界携手鳌峰书坊举办了开业大酬宾、元旦活动皆取得了很大的反响。来炫境世界玩</span><span lang="EN-US">VR</span><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;">游戏，还能获得优惠代金券以及</span><span lang="EN-US">VR</span><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;">眼镜设备等福利。同时炫境世界将不断引进</span><span lang="EN-US">VR</span><span style="font-family: 宋体; mso-ascii-font-family: Calibri; mso-ascii-theme-font: minor-latin; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-font-family: Calibri; mso-hansi-theme-font: minor-latin;">行业各厂商新硬件设备，满足顾客以及玩家的需求。</span></p>
                        </div>`,
        citys:["北京","上海","广州","深圳"],
        index: 0,
        imgUrls: [
            'http://i1.17173cdn.com/gdthue/YWxqaGBf/vrlive/uOHbLPblfuifjxF-gLCIVa.jpg',
            'http://i1.17173cdn.com/gdthue/YWxqaGBf/vrlive/jeRyYeblfuiflAe-YLKljn.jpg',
            'http://i2.17173cdn.com/gdthue/YWxqaGBf/vrlive/StVpECblfuifnwB-gSgGkD.jpg'
        ],
        indicatorActiveColor: '#55e1d2',
        indicatorColor: '#b7b7b7',
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000
    },
    onLoad (options){
        console.log('options=', options);
        var that = this;
        WxParse.wxParse('article', 'html', that.data.article, that, 5);
    },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    telTap () {
        console.log('view tap')
        wx.makePhoneCall({
            phoneNumber: '10086' //仅为示例，并非真实的电话号码
        })
    },
    getData (datas){

    }
});
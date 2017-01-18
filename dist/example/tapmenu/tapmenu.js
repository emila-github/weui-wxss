// 使用function初始化array，相比var initSubMenuDisplay = [] 既避免的引用复制的，同时方式更灵活，将来可以是多种方式实现，个数也不定的

function initSubMenuDisplay() {
    return ['hidden', 'hidden', 'hidden'];
}

Page({
    data:{
        typeMenu: [
            {
                title: '综合排序',
                subMenu: [
                    {
                        id:'price',
                        title: '价格最低'
                    },
                    {
                        id:'uv',
                        title: '人气最高'
                    },
                    {
                        id:'level',
                        title: '评分最高'
                    }
                ]
            },
            {
                title: '活动类型',
                subMenu: [
                    {
                        id:'1',
                        title: '免费体验'
                    },
                    {
                        id:'2',
                        title: '折扣优惠'
                    },
                    {
                        id:'3',
                        title: '到店有礼'
                    }
                ]
            },
            {
                title: '游戏类型',
                subMenu: [
                    {
                        id:'1',
                        title: '体育竞速'
                    },
                    {
                        id:'2',
                        title: '冒险解密'
                    },
                    {
                        id:'3',
                        title: '动作格斗'
                    },
                    {
                        id:'4',
                        title: '音乐舞蹈'
                    },
                    {
                        id:'5',
                        title: '休闲益智'
                    },
                    {
                        id:'6',
                        title: '射击飞行'
                    },
                    {
                        id:'7',
                        title: '生存恐怖'
                    },
                    {
                        id:'8',
                        title: '即时战略'
                    },
                    {
                        id:'9',
                        title: '沙盒模拟'
                    },
                    {
                        id:'10',
                        title: '桌面棋牌'
                    },
                    {
                        id:'11',
                        title: '角色扮演'
                    }
                ]
            }
        ],
        subMenuDisplay:initSubMenuDisplay()
    },
    tapMainMenu: function(e) {//        获取当前显示的一级菜单标识
        var index = parseInt(e.currentTarget.dataset.index);        // 生成数组，全为hidden的，只对当前的进行显示
        var newSubMenuDisplay = initSubMenuDisplay();//        如果目前是显示则隐藏，反之亦反之。同时要隐藏其他的菜单
        if(this.data.subMenuDisplay[index] == 'hidden') {
            newSubMenuDisplay[index] = 'show';
        } else {
            newSubMenuDisplay[index] = 'hidden';
        }        // 设置为新的数组
        this.setData({
            subMenuDisplay: newSubMenuDisplay
        });
    },
    tapSubMenu: function(e) {        //        获取当前显示的一级菜单标识
        this.setData({
            subMenuDisplay: initSubMenuDisplay()
        });        // 处理二级菜单，首先获取当前显示的二级菜单标识
        var indexArray = e.currentTarget.dataset.index.split('-');        // 初始化状态
        // var newSubMenuHighLight = initSubMenuHighLight;
        for (var i = 0; i < initSubMenuHighLight.length; i++) {            // 如果点中的是一级菜单，则先清空状态，即非高亮模式，然后再高亮点中的二级菜单；如果不是当前菜单，而不理会。经过这样处理就能保留其他菜单的高亮状态
            if (indexArray[0] == i) {                for (var j = 0; j < initSubMenuHighLight[i].length; j++) {                    // 实现清空
                initSubMenuHighLight[i][j] = '';
            }                // 将当前菜单的二级菜单设置回去
            }
        }        // 与一级菜单不同，这里不需要判断当前状态，只需要点击就给class赋予highlight即可
        initSubMenuHighLight[indexArray[0]][indexArray[1]] = 'highlight';        // 设置为新的数组
        this.setData({
            subMenuHighLight: initSubMenuHighLight
        });
    }
});

//定义初始化数据，用于运行时保存
var initSubMenuHighLight = [
    ['','','','',''],
    ['',''],
    ['','','']
];
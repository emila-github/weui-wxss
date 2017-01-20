Page({
    data: {
        //页面的初始数据
        title: '下拉菜单',
        showFilterSubGametypesAll: true,
        gametypes: [
            {
                id: 1,
                name: '体育竞速'
            },
            {
                id: 2,
                name: '冒险解密'
            },
            {
                id: 3,
                name: '动作格斗'
            },
            {
                id: 4,
                name: '音乐舞蹈'
            },
            {
                id: 5,
                name: '休闲益智'
            },
            {
                id: 6,
                name: '射击飞行'
            },
            {
                id: 7,
                name: '生存恐怖'
            },
            {
                id: 8,
                name: '即时战略'
            },
            {
                id: 9,
                name: '沙盒模拟'
            },
            {
                id: 10,
                name: '桌面棋牌'
            },
            {
                id: 11,
                name: '角色扮演'
            }
        ]
    },
    setFilterPanel: function(e){ //展开筛选面板
        const d = this.data;
        const i = e.currentTarget.dataset.findex;
        if(d.showfilterindex == i){
            this.setData({
                showfilter: false,
                showfilterindex: null
            })
        }else{
            this.setData({
                showfilter: true,
                showfilterindex:i,
            })
        }
        console.log('显示第几个筛选类别：'+d.showfilterindex);
    },
    setFilterPanelSubSort: function(e) { //选择排序依据
        console.log('setFilterPanelSubSort', e.currentTarget.dataset)
        const d = this.data;
        const id = e.currentTarget.dataset.id;
        if(d.showFilterSubSortIndex == id){
            this.setData({
                showFilterSubSortIndex: null
            })
        }else{
            this.setData({
                showFilterSubSortIndex: id
            })
        }

    },
    setFilterPanelSubActivetype: function(e) { //选择活动类型
        console.log('setFilterPanelSubActivetype', e.currentTarget.dataset)
        const d = this.data;
        const id = e.currentTarget.dataset.id;
        let activetypes = d.showFilterSubActivetypesIndex || [];
        let flag = d.showFilterSubActivetypesFlag || {};
        console.log(activetypes, activetypes.indexOf(id))
        if(activetypes.indexOf(id) == -1){
            activetypes.push(id);
            flag[id] = true;
        }else{
            activetypes.splice(activetypes.indexOf(id), 1);
            flag[id] = false;

        }
        this.setData({
            showFilterSubActivetypesIndex: activetypes,
            showFilterSubActivetypesFlag:flag
        })

    },
    setFilterPanelSubGametypes: function(e) { //选择游戏类型
        console.log('setFilterPanelSubGametypes', e.currentTarget.dataset)
        const d = this.data;
        const id = e.currentTarget.dataset.id;
        let gametypes = d.showFilterSubGametypesIndex || [];
        let flag = d.showFilterSubGametypesFlag || {};
        console.log(gametypes, gametypes.indexOf(id))
        if(gametypes.indexOf(id) == -1){
            gametypes.push(id);
            flag[id] = true;
        }else{
            gametypes.splice(gametypes.indexOf(id), 1);
            flag[id] = false;

        }
        this.setData({
            showFilterSubGametypesIndex: gametypes,
            showFilterSubGametypesFlag:flag,
            showFilterSubGametypesAll: gametypes.length ? false : true
        })
    },
    setFilterPanelSubGametypesAll: function(e) { //选择全部游戏类型
        this.setData({
            showFilterSubGametypesIndex: [],
            showFilterSubGametypesFlag:{},
            showFilterSubGametypesAll: true
        })
    },
    onLoad: function(options) {
        // Do some initialize when page load.
        // 生命周期函数--监听页面加载
    },
    onReady: function() {
        // Do something when page ready.
        // 生命周期函数--监听页面初次渲染完成
         wx.setNavigationBarTitle({ title: this.data.title + ' « 线下体验店 « VR' })
    },
    onShow: function() {
        // Do something when page show.
        // 生命周期函数--监听页面显示
    },
    onHide: function() {
        // Do something when page hide.
        // 生命周期函数--监听页面隐藏
    },
    onUnload: function() {
        // Do something when page close.
        // 生命周期函数--监听页面卸载
    },
    onPullDownRefresh: function() {
        // Do something when pull down.
        // 页面相关事件处理函数--监听用户下拉动作
    },
    onReachBottom: function() {
        // Do something when page reach bottom.
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // return custom share data when user share.
        // 用户点击右上角分享
    },
    // Event handler.
    viewTap: function() {
        this.setData({
            text: 'Set some data for updating view.'
        })
    },
    upper: function(e) {
        console.log(e)
    },
    lower: function(e) {
        console.log(e)
    },
    scroll: function(e) {
        console.log(e)
    },
    customData: {
        hi: 'MINA'
    }
})
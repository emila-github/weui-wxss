Page({
    data: {
        listData: [],
        loading: true, //是否加载中
        hasMore: true, //是否有更多数据
        city:1101,
        pageNo:1,
        pageSize:12
        //listData: [
        //    {
        //        "id": 410,
        //        "code": "a0elv4l5cg68dl74",
        //        "name": "上海卓御计算机有限公司",
        //        "activeType": '1',
        //        "recommendFlag": false,
        //        "price": 0,
        //        "uv": 7,
        //        "rank": null,
        //        "level": 3,
        //        "startTime": null,
        //        "updateTime": null,
        //        "createTime": null,
        //        "imageUrl": "http://i2.17173cdn.com/gdthue/YWxqaGBf/vrlive/isTiKKblfumzlcF-CmyRcF.jpg"
        //    },
        //    {
        //        "id": 409,
        //        "code": "a0elv4ijcx4x28lg",
        //        "name": "上海阿布数码科技有限公司",
        //        "activeType": '1,2',
        //        "recommendFlag": false,
        //        "price": 0,
        //        "uv": 9,
        //        "rank": null,
        //        "level": 3,
        //        "startTime": null,
        //        "updateTime": null,
        //        "createTime": null,
        //        "imageUrl": "http://i1.17173cdn.com/gdthue/YWxqaGBf/vrlive/ClqHImblfumtDdl-JxCWUE.jpg"
        //    },
        //    {
        //        "id": 408,
        //        "code": "a0elv3s3lixlfqkk",
        //        "name": "武汉万达影城汉街店",
        //        "activeType": '3',
        //        "recommendFlag": true,
        //        "price": 50,
        //        "uv": 9,
        //        "rank": null,
        //        "level": 4.6,
        //        "startTime": null,
        //        "updateTime": null,
        //        "createTime": null,
        //        "imageUrl": "http://i3.17173cdn.com/gdthue/YWxqaGBf/vrlive/NLUEIcblfuldqyB-qzrHyP.jpg"
        //    },
        //    {
        //        "id": 407,
        //        "code": "a0elv3g7lfoqk7ws",
        //        "name": "上海周浦万达广场店VR体验店",
        //        "activeType": null,
        //        "recommendFlag": true,
        //        "price": 50,
        //        "uv": 14,
        //        "rank": null,
        //        "level": 4.5,
        //        "startTime": null,
        //        "updateTime": null,
        //        "createTime": null,
        //        "imageUrl": "http://i1.17173cdn.com/gdthue/YWxqaGBf/vrlive/qLpjGIblfuknccg-lgeKCw.jpg"
        //    },
        //    {
        //        "id": 406,
        //        "code": "a0elv3cwun1d8eds",
        //        "name": "万达VR体验店（昆明同德广场店）",
        //        "activeType": null,
        //        "recommendFlag": true,
        //        "price": 50,
        //        "uv": 6,
        //        "rank": null,
        //        "level": 4.6,
        //        "startTime": null,
        //        "updateTime": null,
        //        "createTime": null,
        //        "imageUrl": "http://i2.17173cdn.com/gdthue/YWxqaGBf/vrlive/BXmBQIblfukhsvg-wVaIyb.jpg"
        //    },
        //    {
        //        "id": 405,
        //        "code": "a0elv37v26uoyzo6",
        //        "name": "万达VR体验店（广州白云）",
        //        "activeType": null,
        //        "recommendFlag": true,
        //        "price": 50,
        //        "uv": 19,
        //        "rank": null,
        //        "level": 4.3,
        //        "startTime": null,
        //        "updateTime": null,
        //        "createTime": null,
        //        "imageUrl": "http://i1.17173cdn.com/gdthue/YWxqaGBf/vrlive/gxPGOvblfwzmduv-UssPzn.jpg"
        //    },
        //    {
        //        "id": 404,
        //        "code": "a0elv31qodq2cjqv",
        //        "name": "万达VR体验店（上海宝山店）",
        //        "activeType": null,
        //        "recommendFlag": true,
        //        "price": 50,
        //        "uv": 12,
        //        "rank": null,
        //        "level": 4.5,
        //        "startTime": null,
        //        "updateTime": null,
        //        "createTime": null,
        //        "imageUrl": "http://i1.17173cdn.com/gdthue/YWxqaGBf/vrlive/pLPzecblfujsrir-vbBgXB.jpg"
        //    },
        //    {
        //        "id": 403,
        //        "code": "a0elv2l8q641qthx",
        //        "name": "2046未来空间VR体验馆",
        //        "activeType": null,
        //        "recommendFlag": false,
        //        "price": 30,
        //        "uv": 4,
        //        "rank": null,
        //        "level": 3,
        //        "startTime": null,
        //        "updateTime": null,
        //        "createTime": null,
        //        "imageUrl": "http://i1.17173cdn.com/gdthue/YWxqaGBf/vrlive/cUpuloblfuisdDo-uRcmwl.jpg"
        //    },
        //    {
        //        "id": 402,
        //        "code": "a0elv2d76rpy5sne",
        //        "name": "炫境世界（福州鼓楼）",
        //        "activeType": null,
        //        "recommendFlag": false,
        //        "price": 30,
        //        "uv": 88,
        //        "rank": null,
        //        "level": 3,
        //        "startTime": null,
        //        "updateTime": null,
        //        "createTime": null,
        //        "imageUrl": "http://i2.17173cdn.com/gdthue/YWxqaGBf/vrlive/uOHbLPblfuifjxF-BdQTLe.jpg"
        //    },
        //    {
        //        "id": 401,
        //        "code": "a0elu2e758ktubhm",
        //        "name": "Dream Dog VR虚拟现实体验馆(上海火车站店)",
        //        "activeType": null,
        //        "recommendFlag": false,
        //        "price": 70,
        //        "uv": 10,
        //        "rank": null,
        //        "level": 3,
        //        "startTime": null,
        //        "updateTime": null,
        //        "createTime": null,
        //        "imageUrl": "http://i2.17173cdn.com/gdthue/YWxqaGBf/vrlive/GuAVHcblfrDptAo-qDfegg.jpg"
        //    },
        //    {
        //        "id": 400,
        //        "code": "a0elu2c6xur4renm",
        //        "name": "万有引力vr虚拟现实体验中心(周浦店) ",
        //        "activeType": null,
        //        "recommendFlag": false,
        //        "price": 30,
        //        "uv": 9,
        //        "rank": null,
        //        "level": 3,
        //        "startTime": null,
        //        "updateTime": null,
        //        "createTime": null,
        //        "imageUrl": "http://i2.17173cdn.com/gdthue/YWxqaGBf/vrlive/QhpctYblfrDlmum-BbxYgT.jpg"
        //    },
        //    {
        //        "id": 399,
        //        "code": "a0elu14hpzlnyix6",
        //        "name": "VR空间—虚拟现实VR体验馆",
        //        "activeType": null,
        //        "recommendFlag": false,
        //        "price": 85,
        //        "uv": 8,
        //        "rank": null,
        //        "level": 3,
        //        "startTime": null,
        //        "updateTime": null,
        //        "createTime": null,
        //        "imageUrl": "http://i2.17173cdn.com/gdthue/YWxqaGBf/vrlive/oqamKablfrABlap-YtMRoA.jpg"
        //    }
        //]
    },
    onLoad (){
        this.handleLoadMore();
    },
   // /**
   //  * 页面相关事件处理函数--监听用户下拉动作
   //  */
   // onPullDownRefresh () {
   //     this.handleLoadMore();
   // }
   //,
   // /**
   //  * 页面上拉触底事件的处理函数
   //  */
   // onReachBottom () {
   //     this.handleLoadMore();
   // },
    handleLoadMore () {
        console.log('handleLoadMore')
        let that = this;

        if (!this.data.hasMore) return;

        this.setData({loading: true });

        wx.request({
            //url: 'http://vr.17173.com/ty/m/store/list', //仅为示例，并非真实的接口地址
            url: 'http://vrlive.test.17173.com/ty/m/store/list', //仅为示例，并非真实的接口地址
            data: {
                city:this.data.city,
                pageNo: this.data.pageNo++,
                pageSize:this.data.pageSize
            },
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                console.log(res.data)
                let listData = that.fatData(res.data.data);
                if(listData.length) {
                    that.setData({
                        listData: that.data.listData.concat(listData),
                        loading: false
                    })
                } else {
                    that.setData({
                        hasMore: false,
                        loading: false
                    })
                }

            }
        })
    },
    fatData (datas){
        console.log(datas)
        var listData = datas.listData || [];
        for(let i = 0, len = listData.length; i < len; i++) {
            let item = listData[i];
            let activeType = item.activeType || '';
            let activeTypes = activeType.split(',') || [];
            item.type1 = activeTypes.indexOf('1') !== -1;
            item.type2 = activeTypes.indexOf('2') !== -1;
            item.type3 = activeTypes.indexOf('3') !== -1;
            let total = 5;
            let level = +item.level;
            item.levelPercent = level/total*100;
        }
        return listData;
        //this.setData({listData: listData})
        //console.log(this.data)
    }
});
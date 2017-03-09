Page({
    data: {},
    onLoad (options){
        console.log('options=', options);
    },
    scanCode () {
        wx.scanCode({
            success: (res) => {
                console.log(res)
            }
        })
    }
})
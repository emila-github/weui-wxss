Page({
    data: {
        toView: 'hash1'
    },
    goHash (e) {
        let hash = e.currentTarget.dataset.hash
        this.setData({
            toView: hash
        })
    }
})
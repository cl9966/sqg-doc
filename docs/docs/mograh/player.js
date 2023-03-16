//创建动效播放器 MograhPlayer继承自Node
const player = new SQG.MograhPlayer({
    //是否启动
    enabled: false,
    /**
     * 播放模式
     * true 从起始处重新播放
     * false 从结束处重新播放 
     */
    repeat: true,
    //播放次数
    count: -1,
    //延迟时间
    delay: 0,
    //节点位置
    position: { x: 0, y: 0 },
})

//创建3D世界
const world = new SQG.World()

//将播放器加入到Wolrd的动效中
world.mograh.add(player)

//启动
const container = document.getElementById('container')
world.start(container)



//创建动效组 MograhGroup继承自Node
const group = new SQG.MograhGroup({
    //动效组的持续时间
    time: 1,
    //节点位置
    position: { x: 0, y: 0 },
})

//创建播放器
const player = new SQG.MograhPlayer()

//将动效组加入到播放器的中
player.add(group)

//创建3D世界
const world = new SQG.World()

//将播放器加入到Wolrd的动效中
world.mograh.add(player)

//启动
const container = document.getElementById('container')
world.start(container)



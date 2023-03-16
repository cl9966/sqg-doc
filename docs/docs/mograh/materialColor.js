//创建材质颜色动效
//MaterialColorMograh继承自MograhClip MograhClip继承自Node
const clip = new SQG.MaterialColorMograh({
    //属性
    key: 'color',
    //属性的起始值
    start: '#ffffff',
    //属性的结束值
    end: '#ff0000'
})

//创建播放器
const player = new SQG.MograhPlayer()

//创建组
const group = new SQG.MograhGroup({
    time: 4
})

//将动效片段加入组中
group.add(clip)

//将动效组加入到播放器的中
player.add(group)

//创建3D世界
const world = new SQG.World()

//将播放器加入到Wolrd的动效中
world.mograh.add(player)

//使用贴图创建默认材质
const material = SQG.Utils.material.create()

//创建网格
const mesh = new SQG.Mesh({ material })

//将网格加入场景
world.add(mesh)

//设置动效的目标
clip.target = SQG.Utils.material.use(material)

//启动
const container = document.getElementById('container')
world.start(container)



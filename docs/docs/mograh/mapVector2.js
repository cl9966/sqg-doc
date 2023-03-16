//创建贴图向量动效
//MapVector2Mograh继承自MograhClip MograhClip继承自Node
const clip = new SQG.MapVector2Mograh({
    //属性
    key: 'offset',
    //属性的起始值
    start: { x: 0, y: 0 },
    //属性的结束值
    end: { x: 1, y: 0 },
})

//创建播放器
const player = new SQG.MograhPlayer()

//创建组
const group = new SQG.MograhGroup({ time: 10 })

//将动效片段加入组中
group.add(clip)

//将动效组加入到播放器的中
player.add(group)

const url = 'sqg/image/earth-map.jpg'
SQG.assetsManager.add({ type: 'image', url })
SQG.assetsManager.ready().then(() => {

    // 使用该资产创建贴图
    const map = SQG.Utils.map.create({
        url,
        wrapS: THREE.RepeatWrapping,
        wrapT: THREE.RepeatWrapping
    })

    //使用贴图创建默认材质
    const material = SQG.Utils.material.create({ map })

    //使用贴图创建球几何体
    const geometry = SQG.Utils.geometry.create({
        type: 'SphereGeometry',
        radius: 3
    })

    //创建网格
    const mesh = new SQG.Mesh({ material, geometry })

    //设置动效的目标
    clip.target = SQG.Utils.map.use(map)

    //创建3D世界
    const world = new SQG.World()

    //将播放器加入到Wolrd的动效中
    world.mograh.add(player)

    //将网格加入场景
    world.add(mesh)

    //启动
    const container = document.getElementById('container')
    world.start(container)
})



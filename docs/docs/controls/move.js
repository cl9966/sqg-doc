//移动控制器 继承自Node
const controls = new SQG.MoveControls({
    //移动速度
    speed: 0.01
})

//MoveControls.getPath 在鼠标点击屏幕时触发以获取移动的路径
const getPath = controls.getPath.bind(controls)
controls.getPath = (info) => {
    console.log(info)
    return getPath(info)
}

//目标网格
const target = new SQG.Mesh({
    geometry: SQG.Utils.geometry.create({
        type: 'SphereGeometry'
    })
})

//将控制器加入目标
target.add(controls)

//创建3D世界
const world = new SQG.World()

//将目标加入场景
world.add(target)


//根据目标创建移动点网格
const locations = [
    { x: 10, y: 0, z: 0 },
    { x: -10, y: 0, z: 0 },
    { x: 0, y: 0, z: 10 },
    { x: 0, y: 0, z: -10 },
]
locations.forEach(loc => {
    world.add(new SQG.Mesh({
        position: loc
    }))
})


world.camera.source.position.set(0, 20, 20)
//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

//启动
const container = document.getElementById('container')
world.start(container)



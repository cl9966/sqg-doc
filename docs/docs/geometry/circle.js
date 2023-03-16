//创建圆几何体
const circle = SQG.Utils.geometry.create({
    //几何类型
    type: 'CircleGeometry',
    //几何体名称
    name: '',
    //圆的半径
    radius: 1,
    //圆的分段数
    segments: 32,
    //圆的起始角度
    thetaStart: 0,
    //圆的终止角度
    thetaLength: Math.PI * 2,
})

//使用圆几何体创建网格
const mesh = new SQG.Mesh({ geometry: circle })

//创建3D世界
const world = new SQG.World()

//将网格加入场景
world.add(mesh)

//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

//启动
const container = document.getElementById('container')
world.start(container)





//创建环几何体
const ring = SQG.Utils.geometry.create({
    //几何类型
    type: 'RingGeometry',
    //几何体名称
    name: '',
    //环的内部半径
    innerRadius: 0.5,
    //环的外部半径
    outerRadius: 1,
    //水平分段数
    thetaSegments: 32,
    //垂直分段数
    phiSegments: 8,
    //圆的起始角度
    thetaStart: 0,
    //圆的终止角度
    thetaLength: Math.PI * 2,
})

//使用环几何体创建网格
const mesh = new SQG.Mesh({ geometry: ring })

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




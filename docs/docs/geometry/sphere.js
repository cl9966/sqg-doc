//创建球几何体
const sphere = SQG.Utils.geometry.create({
    //几何类型
    type: 'SphereGeometry',
    //几何体名称
    name: '',
    //球的半径
    radius: 1,
    //球的水平分段数
    widthSegments: 32,
    //球的垂直分段数
    heightSegments: 16,
    //水平起始角度
    phiStart: 0,
    //水平起始角度
    phiLength: Math.PI * 2,
    //垂直起始角度
    thetaStart: 0,
    //垂直起始角度
    thetaLength: Math.PI,
})

//使用球几何体创建网格
const mesh = new SQG.Mesh({ geometry: sphere })

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




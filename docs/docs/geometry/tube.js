//创建管道几何体
const tube = SQG.Utils.geometry.create({
    //几何类型
    type: 'TubeGeometry',
    //几何体名称
    name: '',
    //管道的路径
    path: [[0, 0, 0], [5, 0, 0]],
    //管道的分段数
    tubularSegments: 64,
    //管道的半径
    radius: 0.1,
    //管道横截面的分段数
    radialSegments: 32,
    // 管道的两端是否闭合
    closed: false,
})

//使用管道几何体创建网格
const mesh = new SQG.Mesh({ geometry: tube })

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




//创建立方体
const box = SQG.Utils.geometry.create({
    //几何类型
    type: 'BoxGeometry',
    //几何体名称
    name: '',
    //立方体的宽度(x轴)
    width: 1,
    //立方体的高度(y轴)
    height: 1,
    //立方体的深度(z轴)
    depth: 1,
    //宽度的分段数
    widthSegments: 1,
    //高度的分段数
    heightSegments: 1,
    //深度的分段数
    depthSegments: 1,
})

//使用立方体创建网格
const mesh = new SQG.Mesh({ geometry: box })

//创建3D世界
const world = new SQG.World()

//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

//将网格加入场景
world.add(mesh)

//启动
const container = document.getElementById('container')
world.start(container)





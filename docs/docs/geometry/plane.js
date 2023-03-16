//创建平面几何体
const plane = SQG.Utils.geometry.create({
    //几何类型
    type: 'PlaneGeometry',
    //几何体名称
    name: '',
    //平面的宽度(x轴)
    width: 1,
    //平面的高度(y轴)
    height: 1,
    //宽度的分段数
    widthSegments: 1,
    //高度的分段数
    heightSegments: 1,
})

//使用平面几何体创建网格
const mesh = new SQG.Mesh({ geometry: plane })

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





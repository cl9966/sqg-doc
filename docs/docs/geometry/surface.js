//创建曲面几何体 SurfaceGeometry继承自ExtrudeGeometry
const surface = SQG.Utils.geometry.create({
    //几何类型
    type: 'SurfaceGeometry',
    //几何体名称
    name: '',
    //曲面的半径
    radius: 1,
})

//使用曲面几何体创建网格
const mesh = new SQG.Mesh({ geometry: surface })

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





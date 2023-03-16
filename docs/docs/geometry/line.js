//创建线几何体
const line = SQG.Utils.geometry.create({
    //几何类型
    type: 'LineGeometry',
    //几何体名称
    name: '',
    //线的路径
    path: [[0, 0, 0], [5, 0, 0]],
})

//使用线几何体创建网格
const mesh = new SQG.Line({ geometry: line })

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





//创建透视相机
//OrthographicCamera继承自Camera Camera继承自Object3D
const camera = new SQG.OrthographicCamera({
    //相机的近端面
    near: 0.1,
    //相机的远端面
    far: 2000,
})

//创建3D世界
const world = new SQG.World()

//将相机加入场景
world.add(camera)

//设置渲染相机
world.setCamera(camera)

//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

const box = new SQG.Mesh()
world.add(box)

const scale = 15
box.source.scale.set(scale, scale, scale)


//启动
const container = document.getElementById('container')
world.start(container)







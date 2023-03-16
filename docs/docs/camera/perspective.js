//创建透视相机
//PerspectiveCamera继承自Camera Camera继承自Object3D
const camera = new SQG.PerspectiveCamera({
    //相机的近端面
    near: 0.1,
    //相机的远端面
    far: 2000,
    //相机视锥体的长宽比
    aspect: 1,
    //相机的垂直视野角度
    fov: 50,
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

//设置相机的位置
camera.source.position.set(3, 5, 10)

//设置相机的朝向
camera.source.lookAt(0, 0, 0)

//启动
const container = document.getElementById('container')
world.start(container)






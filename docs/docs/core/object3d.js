//创建Object3D 
//Object3D继承自Node 是大多数渲染对象的基类
const object3d = new SQG.Object3D({
    //控制3D对象展示隐藏
    visible: true,
    //控制3D对象的位移变化
    position: { x: 0, y: 0, z: 0 },
    //控制3D对象的旋转变化
    rotation: { x: 0, y: 0, z: 0 },
    //控制3D对象的缩放变化
    scale: { x: 1, y: 1, z: 1 },
    //控制3D对象的渲染顺序
    renderOrder: 0,
    //控制3D对象是否产生阴影
    castShadow: false,
    //控制3D对象是否接收阴影
    receiveShadow: false,
})

//旋转3D对象
object3d.source.rotation.set(0.5, Math.PI / 4, 0)

//3D对象的变化会影响子对象
object3d.add(new SQG.Mesh())

//创建3D世界
const world = new SQG.World()

//将3D对象加入场景
world.add(object3d)

//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

//启动
const container = document.getElementById('container')
world.start(container)





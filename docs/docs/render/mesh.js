//创建基础网格材质
const material = SQG.Utils.material.create()

//创建几何体
const geometry = SQG.Utils.geometry.create()

//创建网格 Mesh继承自Object3D
const mesh = new SQG.Mesh({
    //网格的材质
    material,
    //网格的几何体
    geometry,
})

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



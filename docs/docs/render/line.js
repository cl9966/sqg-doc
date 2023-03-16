//创建基础线材质
const material = SQG.Utils.material.create({
    type: 'LineBasicMaterial'
})

//创建几何体
const geometry = SQG.Utils.geometry.create({
    type: 'LineGeometry',
    path: [[0, 0, 0], [5, 0, 0]]
})

//创建线 Line继承自Object3D
const line = new SQG.Line({
    //线的材质
    material,
    //线的几何体
    geometry,
})

//创建3D世界
const world = new SQG.World()

//将线加入场景
world.add(line)

//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

//启动
const container = document.getElementById('container')
world.start(container)



//创建环境光 
//AmbientLight继承自Light Light继承自Object3D
const ambient = new SQG.AmbientLight({
    //光照颜色
    color: '#ffffff',
    //光照强度
    intensity: 1
})

//创建3D世界
const world = new SQG.World()

//将环境光加入场景
world.add(ambient)

//创建受光照影响的立方体
const box = new SQG.Mesh({
    material: SQG.Utils.material.create({
        type: 'MeshStandardMaterial'
    })
})

//将立方体加入场景
world.add(box)


world.camera.source.position.set(0, 5, 10)
//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

//启动
const container = document.getElementById('container')
world.start(container)




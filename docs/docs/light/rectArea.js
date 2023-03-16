//创建平面光
//RectAreaLight继承自Light Light继承自Object3D
const rectArea = new SQG.RectAreaLight({
    //光照颜色
    color: '#ffffff',
    //光照强度
    intensity: 1,
    //宽度
    width: 10,
    //高度
    height: 10,
})

//创建3D世界
const world = new SQG.World()

//将平面光加入场景
world.add(rectArea)

//创建受光照影响的平面
const plane = new SQG.Mesh({
    material: SQG.Utils.material.create({
        type: 'MeshStandardMaterial',
        color: '#979797'
    }),
    geometry: SQG.Utils.geometry.create({
        type: 'PlaneGeometry',
        width: 100,
        height: 100
    }),
    rotation: { x: -Math.PI / 2, y: 0, z: 0 },
})

//将平面加入场景
world.add(plane)

world.camera.source.position.set(5, 5, 10)
//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

//添加环境光
world.add(new SQG.AmbientLight({ color: '#292929' }))


//启动
const container = document.getElementById('container')
world.start(container)




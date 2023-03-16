//创建点光源
//PointLight继承自Light Light继承自Object3D
const point = new SQG.PointLight({
    //光照颜色
    color: '#ffffff',
    //光照强度
    intensity: 1,
    //衰减
    decay: 1,
    //距离
    distance: 10,
    //位置
    position: { x: 2, y: 5, z: 2 },
    //产生阴影
    castShadow: true,
})

//创建3D世界
const world = new SQG.World({
    shadow: { enabled: true }
})

//将点光源加入场景
world.add(point)

//创建受光照影响的立方体
const box = new SQG.Mesh({
    material: SQG.Utils.material.create({
        type: 'MeshStandardMaterial'
    }),
    //产生阴影
    castShadow: true,
})

//将立方体加入场景
world.add(box)


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
    //接收阴影
    receiveShadow: true,
})

//将平面加入场景
world.add(plane)

world.camera.source.position.set(5, 5, 10)
//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))


//启动
const container = document.getElementById('container')
world.start(container)




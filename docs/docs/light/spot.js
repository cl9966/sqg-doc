//创建聚光灯
//SpotLight继承自Light Light继承自Object3D
const spot = new SQG.SpotLight({
    //光照颜色
    color: '#ffffff',
    //光照强度
    intensity: 1,
    //角度
    angle: Math.PI / 3,
    //距离
    distance: 10,
    //半影衰减
    penumbra: 2,
    //衰减
    decay: 2,
    //阴影
    shadow: {
        //阴影大小
        camera: {
            far: 500,
            near: 0.5,
        },
        //阴影尺寸
        mapSize: {
            width: 512,
            height: 512,
        },
    },
    //产生阴影
    castShadow: true,
    //位置
    position: { x: 0, y: 4, z: 0 }
})

//创建3D世界
const world = new SQG.World({
    shadow: { enabled: true }
})

//将聚光灯加入场景
world.add(spot)

const util = {
    target: new SQG.Object3D(),
    time: 0
}
//设置聚光灯的目标
spot.source.target = util.target.source
spot.register('update', (e) => {
    const v = Math.sin(util.time += e.delay)
    util.target.source.position.x = v
})

//将目标加入场景
world.add(util.target)

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

//添加环境光
world.add(new SQG.AmbientLight({ color: '#030303' }))

world.camera.source.position.set(0, 5, 10)
//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))


//启动
const container = document.getElementById('container')
world.start(container)




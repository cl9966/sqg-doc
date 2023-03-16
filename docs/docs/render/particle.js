const url = 'sqg/image/sprite.jpg'
SQG.assetsManager.add({ type: 'image', url })
//加载资产
SQG.assetsManager.ready().then(() => {

    //创建粒子材质
    const material = SQG.Utils.material.create({
        type: 'ParticleMaterial',
        alphaMap: SQG.Utils.map.create({ url }),
        transparent: true,
        depthTest: false
    })

    //创建粒子 Particle继承自Object3D
    const particle = new SQG.Particle({
        //网格的材质
        material,
        //路径
        path: [[0, 0, 0], [0, 0, 1]],
        //数量
        count: 1,
        //大小
        size: { min: 1, max: 5 },
        //速度
        speed: { min: 0.1, max: 0.2 },
        //起始位置，在0-1之间
        start: { min: 0, max: 0 },
        //变换
        transform: {
            position: {
                x: { min: 0, max: 0 },
                y: { min: 0, max: 0 },
                z: { min: 0, max: 0 },
            },
            rotation: {
                x: { min: 0, max: 0 },
                y: { min: 0, max: 0 },
                z: { min: 0, max: 0 },
            },
            scale: {
                x: { min: 1, max: 1 },
                y: { min: 1, max: 1 },
                z: { min: 1, max: 1 },
            },
        },
    })

    //创建3D世界
    const world = new SQG.World()

    //将粒子加入场景
    world.add(particle)

    //添加轨道控制器
    world.camera.add(new SQG.OrbitControls({
        enabled: true
    }))

    //启动
    const container = document.getElementById('container')
    world.start(container)
})



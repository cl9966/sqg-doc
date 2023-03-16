const url = 'sqg/image/sprite.jpg'
SQG.assetsManager.add({ type: 'image', url })
//加载资产
SQG.assetsManager.ready().then(() => {

    //创建粒子材质
    const material = SQG.Utils.material.create({
        type: 'SpriteMaterial',
        alphaMap: SQG.Utils.map.create({ url }),
        transparent: true,
    })

    //创建粒子 Sprite继承自Object3D
    const sprite = new SQG.Sprite({
        //网格的材质
        material,
    })

    //创建3D世界
    const world = new SQG.World()

    //将粒子加入场景
    world.add(sprite)

    //添加轨道控制器
    world.camera.add(new SQG.OrbitControls({
        enabled: true
    }))

    //启动
    const container = document.getElementById('container')
    world.start(container)
})



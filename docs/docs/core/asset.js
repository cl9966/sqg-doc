//资产管理器

//开始加载资产时触发
SQG.assetsManager.register('start', () => {
    console.log('start loading')
})

//资产加载完毕时触发
SQG.assetsManager.register('ready', () => {
    console.log('ready ')
})


const url = 'sqg/image/earth-map.jpg'
/**
 *资产管理器支持添加多种资产:
 * 1. 图片资产
 * 2. 音频资产
 * 3. 字体资产,需要将字体转换成json文件
 * 4. 模型资产,自有格式(.model.json)
 */
SQG.assetsManager.add({ type: 'image', url })


//加载资产
SQG.assetsManager.ready().then(() => {

    // 使用该资产创建贴图
    const map = SQG.Utils.map.create({ url })

    //使用贴图创建默认材质
    const material = SQG.Utils.material.create({ map })

    //使用贴图创建球几何体
    const geometry = SQG.Utils.geometry.create({
        type: 'SphereGeometry',
        radius: 3
    })

    //创建网格
    const mesh = new SQG.Mesh({ material, geometry })

    //创建3D世界
    const world = new SQG.World()

    //加入World
    world.add(mesh)

    //添加轨道控制器
    world.camera.add(new SQG.OrbitControls({
        enabled: true
    }))

    //启动
    const container = document.getElementById('container')
    world.start(container)
})




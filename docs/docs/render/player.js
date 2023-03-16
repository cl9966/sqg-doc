const url = 'sqg/model/Cesium_Air.model.json'
SQG.assetsManager.add({ type: 'model', url })
//加载资产
SQG.assetsManager.ready().then(() => {

    //创建模型播放器 Player继承自Object3D
    const modelPlayer = new SQG.Player({
        actions: []
    })

    //创建模型 Model继承自Object3D
    const model = new SQG.Model({ url })
    model.add(modelPlayer)

    //播放动画
    modelPlayer.actions.forEach(action => action.aClip.play())

    //创建3D世界
    const world = new SQG.World()

    //加入World
    world.add(model)

    //创建环境光 
    world.add(new SQG.AmbientLight())

    world.camera.source.position.set(0, 20, 20)
    //添加轨道控制器
    world.camera.add(new SQG.OrbitControls({
        enabled: true
    }))

    //启动
    const container = document.getElementById('container')
    world.start(container)
})


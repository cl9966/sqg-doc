//创建3D世界 World继承自Node
const world = new SQG.World({
    //画布的透明度
    alpha: 1,
    //编码格式
    output: THREE.sRGBEncoding,
    //阴影设置
    shadow: {
        //启动阴影
        enabled: false,
        //阴影类型
        type: THREE.PCFSoftShadowMap,
    }
})

//窗口调整大小时触发
world.register('resize', (e) => {
    console.log('resize', e)
})

//设置渲染相机
const camera = new SQG.PerspectiveCamera()

//添加轨道控制器
camera.add(new SQG.OrbitControls({
    enabled: true
}))

//将相机加入world
world.add(camera)

//将相机设为渲染相机
world.setCamera(camera)

//创建一个立方体
const box = new SQG.Mesh()

//将立方体加入世界
world.add(box)

//启动World并挂载到容器上
const container = document.getElementById('container')
world.start(container)

//停止World并从容器上移除
// world.stop()


//加载数据，根据数据回复场景设置并生成各种Node
// world.loadData()

//点击事件
const listener = (e) => {
    console.log('click', e)

    //世界坐标转屏幕坐标
    const location = new THREE.Vector3()
    const v2 = world.toScreenLocation(location)
    console.log(v2)

    //射线检测,检测
    const intersects = world.ray(e, world.children)
    console.log(intersects)

    //解绑各种浏览器事件
    world.un('click', listener)
}
//绑定各种浏览器事件
world.on('click', listener)




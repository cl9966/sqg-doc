const url = 'sqg/font/font.json'
SQG.assetsManager.add({ type: 'font', url })
SQG.assetsManager.ready().then(() => {

    //创建字体几何体
    const text = SQG.Utils.geometry.create({
        //几何类型
        type: 'TextGeometry',
        //几何体名称
        name: '',
        //字体的资源
        url,
        //字体的文字
        text: 'SQG',
        //字体的大小
        size: 1,
        //字体的高度
        height: 1,
        //字体曲线的分段数
        curveSegments: 12,
        //字体是否应用斜角
        bevelEnabled: false,
        //斜角的厚度
        bevelThickness: 0,
        //斜角与原始形状轮廓之间的延伸距离
        bevelSize: 0,
        //斜角的分段层数
        bevelSegments: 3,
    })

    //使用字体几何体创建网格
    const mesh = new SQG.Mesh({ geometry: text })

    //创建3D世界
    const world = new SQG.World()

    //将网格加入场景
    world.add(mesh)

    //添加轨道控制器
    world.camera.add(new SQG.OrbitControls({
        enabled: true
    }))

    //启动
    const container = document.getElementById('container')
    world.start(container)
})





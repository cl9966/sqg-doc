//UI3D继承自UI UI的位置将跟随场景
//UI3D将在每一帧中自动更新视图
const ui = new SQG.UI3D({
    //UI是否可见
    visible: true,
    //UI是否绝对定位
    relative: false,
    //UI的位置
    position: { x: 0, y: 0, z: 0 },
    //UI的x轴选项
    x: { dir: true, unit: 'px' },
    //UI的y轴选项
    y: { dir: true, unit: 'px' },
    //是否自动刷新视图,该值将被强制设为true
    autoUpdate: true,
    //UI使用的视图组件,设置不同类型的视图组件可切换展示效果
    style: {
        //视图组件的类型 BaseUIView是自带的视图组件
        type: 'BaseUIView'
    }
})

//创建3D世界
const world = new SQG.World()

//将UI加入场景
world.add(ui)

//添加网格
world.add(new SQG.Mesh())

//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

//启动
const container = document.getElementById('container')
world.start(container)

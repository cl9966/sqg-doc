//UI2D继承自UI 固定在窗口的指定位置 
const ui = new SQG.UI2D({
    //UI是否可见
    visible: true,
    //UI使用的视图组件,设置不同类型的视图组件可切换展示效果
    view: {
        //视图组件的类型 BaseUIView是自带的视图组件
        type: 'BaseUIView',
        //视图组件的样式 
        style: SQG.BaseUIView.getStyle({
            position: { x: 20, y: 20, z: 0 }
        })
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

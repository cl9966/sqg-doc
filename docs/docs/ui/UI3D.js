//UI3D继承自UI UI的位置将跟随场景
//updateView将在每一帧的更新中自动调用
const ui = new SQG.UI3D({
    //UI是否可见
    visible: true,
    //UI使用的视图组件,设置不同类型的视图组件可切换展示效果
    view: {
        //视图组件的类型 BaseUIView是自带的视图组件
        type: 'BaseUIView',
        //视图组件的样式 
        style: SQG.BaseUIView.getStyle({
            position: { x: 2, y: 0, z: 0 }
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

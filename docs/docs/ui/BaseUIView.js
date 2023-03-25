//BaseUIView继承自UIView 
const ui = new SQG.UI2D({
    //UI是否可见
    visible: true,
    //UI使用的视图组件,设置不同类型的视图组件可切换展示效果
    view: {
        //视图组件的类型 BaseUIView是自带的视图组件
        type: 'BaseUIView',
        //视图组件的样式 
        style: {
            position: { x: 0, y: 0, z: 0 },
            translate: { x: 0, y: 0 },
            width: 100,
            height: 100,
            radius: 0,
            x: { unit: 'px', dir: true },
            y: { unit: 'px', dir: true },
            text: {
                color: '#000000',
                content: '',
                size: 14,
            },
            background: {
                color: '#ffffff',
                opacity: 1,
                image: '',
            },
            border: {
                color: '#ffffff',
                opacity: 1,
                size: 0,
            },
            shadow: {
                color: '#ffffff',
                opacity: 1,
                offset: {
                    x: 0,
                    y: 0,
                },
                blur: 0,
                spread: 0,
            },
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        }
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

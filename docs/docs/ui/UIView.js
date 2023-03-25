//UIView是抽象类无法直接实例化
class UserUIView extends SQG.UIView {

    constructor(style = UserUIView.getStyle()) {
        super(style)
        this.type = 'UserUIView'
        this.dom = document.createElement('div')
    }

    //子类必须实现该静态方法
    static getStyle(p = {}) {
        //必须定义position属性,其他的可以根据需要进行扩展
        const style = {
            position: p.position || { x: 20, y: 20, z: 0 },
            width: p.width ?? 100,
            height: p.height ?? 100,
            radius: p.radius ?? 0,
        }

        return style
    }

    //子类必须实现该方法
    updateView(state) {
        const cssStyle = `
        display:${state.visible ? 'block' : 'none'};
        position:absolute;
        left:${state.location.x}${state.unit.x};
        top:${state.location.y}${state.unit.y};
        width:${this.style.width}px;
        height:${this.style.height}px;
        background-color:rgba(255,255,255,1);
        `

        this.dom.setAttribute('style', cssStyle)
    }

    //子类必须实现该方法
    getViewDOM() {
        return this.dom
    }
}

//注册视图组件
SQG.UI.ADD_UI_VIEW('UserUIView', UserUIView)

//创建3D世界
const world = new SQG.World()

//使用自定义的视图创建UI
const ui = new SQG.UI2D({
    view: {
        type: 'UserUIView', style: UserUIView.getStyle()
    }
})

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

//UIView是抽象类无法直接实例化
//通过继承UIView 可扩展UI所能使用的视图组件
class UserUIView extends SQG.UIView {
    constructor(p = {}) {
        super(p = {})
        this.type = 'UserUIView'
        this.style = {
            width: 100,
            height: 100
        }
        Object.assign(this.style, p.style)
        this.dom = document.createElement('div')
    }


    //子类必须实现该方法
    updateView(state) {
        const cssStyle = `
        display:${state.visible ? 'block' : 'none'};
        position:absolute;
        left:${state.location.x}${state.x.unit};
        top:${state.location.y}${state.y.unit};
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

    //子类必须实现该方法
    addChild(el) {
        this.dom.appendChild(el)
    }
}

//注册视图组件
SQG.UI.ADD_UI_VIEW('UserUIView', UserUIView)

//创建3D世界
const world = new SQG.World()

//使用自定义的视图创建UI
const ui = new SQG.UI2D({
    position: { x: 20, y: 20, z: 0 },
    style: { type: 'UserUIView' }
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

//UI是抽象类无法直接实例化 UI继承自Node
//UserUI的实现和 UI2D 一致
class UserUI extends SQG.UI {

    constructor(p = {
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
    }) {
        super(p)
    }

    //子类必须实现该方法
    getSource(p = {}) {
        const parameter = {
            type: 'UserUI',
            uuid: p.uuid || SQG.Utils.uuid(),
            name: p.name || '',
            visible: p.visible ?? true,
        }

        return parameter
    }

    //子类必须实现该方法
    getUpdateViewState() {
        const state = {
            visible: this.source.visible,
            unit: { x: 'px', y: 'px' },
            location: new THREE.Vector3(
                this.view.style.position.x,
                this.view.style.position.y,
                this.view.style.position.z
            ),
        }

        return state
    }

    //子类必须实现该方法
    updateView() {
        if (!this.refWorld) return

        const state = this.getUpdateViewState()

        this.view.updateView(state)
    }
}

//创建3D世界
const world = new SQG.World()

//将UI加入场景
world.add(new UserUI())

//添加网格
world.add(new SQG.Mesh())

//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

//启动
const container = document.getElementById('container')
world.start(container)



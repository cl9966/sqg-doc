//创建Node Node是大多数对象的基类
const node = new SQG.Node({
    //节点的类型
    type: 'Node',
    //节点的名称
    name: '',
})

//节点或父节点进入场景时触发
node.register('world-enter', (e) => {
    console.log('world-enter', e)
})
//节点或父节点离开场景时触发
node.register('world-leave', (e) => {
    console.log('world-leave', e)
})
//节点被添加时触发
node.register('enter', (e) => {
    console.log('enter', e)
})
//节点被移除时触发
node.register('leave', (e) => {
    console.log('leave', e)
})
//添加节点时触发
node.register('add', (e) => {
    console.log('add', e)
})
//移除节点时触发
node.register('remove', (e) => {
    console.log('remove', e)
})
//在每一帧中调用
node.register('update', (e) => {
    console.log('update', e)
})
//节点销毁时调用
node.register('dispose', (e) => {
    console.log('dispose', e)
})

const sub = new SQG.Node()

//添加子节点
node.add(sub)

//遍历当前节点及其子节点
node.traverse((node) => {
    console.log('traverse', node)
})

//追溯子节点所有父节点
sub.track((node) => {
    console.log('track', node)
})

//查找子节点
const gNode = node.get(sub.source.uuid)
console.log('get', gNode)

//移除子节点
node.remove(sub)

//自定义节点
class Custmoize extends SQG.Node {

    constructor(p = {}) {
        super(p)

        console.log(p.name)
    }

    provide() {
        console.log('---生命周期---')
        console.log('---provide---')
    }

    getSource(p) {
        console.log('---getSource---')
        const source = super.getSource(p)
        //修改节点的类型
        source.type = 'Custmoize'

        return source
    }

    setSource(p, s) {
        console.log('---setSource---')
        super.setSource(p, s)
        s.name = 'custmoize-user'
    }
}
const c1 = new Custmoize({
    name: '通过 new 创建的节点'
})

//将自定义节点添加到派生节点中
SQG.Node.ADD_DERIVED_NODE(Custmoize)
SQG.Node.CREATE_DERIVED_NODE({
    type: 'Custmoize',
    name: '通过方法创建的节点'
})

//创建3D世界
const world = new SQG.World()

//将Node加入World
world.add(node)

//将Node从World中移除
world.remove(node)

//销毁节点
node.dispose()

//启动
const container = document.getElementById('container')
world.start(container)




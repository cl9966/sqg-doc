//创建圆柱几何体
const cylinder = SQG.Utils.geometry.create({
    //几何类型
    type: 'CylinderGeometry',
    //几何体名称
    name: '',
    //圆柱的顶部半径
    radiusTop: 1,
    //圆柱的底部半径
    radiusBottom: 1,
    //圆柱的高度
    height: 1,
    //圆柱的分段数
    radialSegments: 32,
    //高度的分段数
    heightSegments: 1,
    //圆锥的底面是开放的还是封顶的
    openEnded: false,
    //圆的起始角度 
    thetaStart: 0,
    //圆的终止角度
    thetaLength: Math.PI * 2,
})

//使用圆柱几何体创建网格
const mesh = new SQG.Mesh({ geometry: cylinder })

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




//创建挤压几何体
const extrude = SQG.Utils.geometry.create({
    //几何类型
    type: 'ExtrudeGeometry',
    //几何体名称
    name: '',
    //挤压几何体的形状
    shape: {
        points: [
            [-4, 0, -4],
            [-4, 0, 4],
            [4, 0, 4],
            [4, 0, -4],
        ],
        holes: [
            [
                [-2, 0, -2],
                [-2, 0, 2],
                [2, 0, 2],
                [2, 0, -2],
            ]
        ]
    },
    //曲线的分段数
    curveSegments: 12,
    //深度的细分数
    steps: 1,
    //挤压几何体的深度
    depth: 1,
    //对挤出的形状应用是否斜角
    bevelEnabled: false,
    //设置原始形状上斜角的厚度
    bevelThickness: 0,
    //斜角与原始形状轮廓之间的延伸距离
    bevelSize: 0,
    //斜角的分段层数
    bevelSegments: 3,
})

//使用挤压几何体创建网格
const mesh = new SQG.Mesh({ geometry: extrude })

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



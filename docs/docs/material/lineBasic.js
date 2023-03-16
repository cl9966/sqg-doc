//创建基础线材质
const material = SQG.Utils.material.create({
    //材质类型
    type: 'LineBasicMaterial',
    //材质名称
    name: '',
    /**颜色 */
    color: '#ffffff',
    /**是否透明 */
    transparent: false,
    /**透明度 */
    opacity: 1,
    /**材质类型 */
    side: THREE.FrontSide,
    /**是否渲染材质的颜色 */
    colorWrite: true,
    /**是否启用深度测试 */
    depthTest: true,
    /**深度函数 */
    depthFunc: THREE.LessEqualDepth,
})


//使用平面几何体创建线
const line = new SQG.Line({
    material,
    geometry: SQG.Utils.geometry.create({
        type: 'LineGeometry',
        path: [
            [0, 0, 0],
            [5, 0, 0]
        ]
    })
})

//创建3D世界
const world = new SQG.World()

//将网格加入场景
world.add(line)

//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

//启动
const container = document.getElementById('container')
world.start(container)




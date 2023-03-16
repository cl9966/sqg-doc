//创建粒子材质
const material = SQG.Utils.material.create({
    //材质类型
    type: 'ParticleMaterial',
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
    /**颜色贴图 */
    map: '',
    /** 透明度贴图 */
    alphaMap: '',
    /**随相机深度衰减 */
    sizeAttenuation: true,
})

//使用平面几何体创建粒子
const particle = new SQG.Particle({ material })

//创建3D世界
const world = new SQG.World()

//将网格加入场景
world.add(particle)

//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

//启动
const container = document.getElementById('container')
world.start(container)




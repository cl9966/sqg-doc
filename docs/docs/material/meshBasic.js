//创建基础网格材质
const material = SQG.Utils.material.create({
    //材质类型
    type: 'MeshBasicMaterial',
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
    /**表面颜色与环境贴图如何结合 */
    combine: THREE.MultiplyOperation,
    /**环境贴图对表面的影响程度 */
    reflectivity: 1,
    /**空气折射率 */
    refractionRatio: 0.98,
    /**烘焙光的强度 */
    lightMapIntensity: 1,
    /**颜色贴图 */
    map: '',
    /**透明度贴图 */
    alphaMap: '',
    /**环境贴图 */
    envMap: '',
    /**光照贴图 */
    lightMap: '',
    /**高光贴图 */
    specularMap: '',
})

//使用平面几何体创建网格
const mesh = new SQG.Mesh({ material })

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




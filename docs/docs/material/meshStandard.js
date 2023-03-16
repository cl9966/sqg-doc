//创建标准网格材质
const material = SQG.Utils.material.create({
    //材质类型
    type: 'MeshStandardMaterial',
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
    /**烘焙光的强度 */
    lightMapIntensity: 1,
    /**环境贴图强度 */
    envMapIntensity: 1,
    /**凹凸贴图会对材质产生多大影响 */
    bumpScale: 1,
    /**材质的放射（光）颜色 */
    emissive: '#000000',
    /**放射光强度 */
    emissiveIntensity: 1,
    /**材质与金属的相似度.木材或石材，使用0.0，金属使用1.0 */
    metalness: 0,
    /**法线贴图对材质的影响程度 */
    normalScale: { x: 1, y: 1 },
    /**材质的粗糙程度 */
    roughness: 1,
    /**颜色贴图 */
    map: '',
    /**透明度贴图 */
    alphaMap: '',
    /**环境贴图 */
    envMap: '',
    /**光照贴图 */
    lightMap: '',
    /**凹凸贴图 */
    bumpMap: '',
    /**放射（发光）贴图 */
    emissiveMap: '',
    /**材质的金属度贴图 */
    metalnessMap: '',
    /**材质的法线贴图 */
    normalMap: '',
    /**材质的粗糙度贴图 */
    roughnessMap: '',
})

//使用平面几何体创建网格
const mesh = new SQG.Mesh({ material })

//创建3D世界
const world = new SQG.World()

//将网格加入场景
world.add(mesh)

//创建环境光
world.add(new SQG.AmbientLight())

//添加轨道控制器
world.camera.add(new SQG.OrbitControls({
    enabled: true
}))

//启动
const container = document.getElementById('container')
world.start(container)




//添加图片资产
const url = 'sqg/image/earth-map.jpg'
SQG.assetsManager.add({ type: 'image', url })

//加载资产
SQG.assetsManager.ready().then(() => {

    // 使用该资产创建图片贴图
    const imageMap = SQG.Utils.map.create({
        //几何类型
        type: 'Image',
        //几何体名称
        name: '',
        //资产的url
        url,
        /**映射模式 */
        mapping: THREE.UVMapping,
        /**水平UV包裹 */
        wrapS: THREE.ClampToEdgeWrapping,
        /**垂直UV包裹 */
        wrapT: THREE.ClampToEdgeWrapping,
        /**纹理偏移 */
        offset: { x: 0, y: 0 },
        /**纹理中心 */
        center: { x: 0, y: 0 },
        /**纹理旋转 */
        rotation: 0,
    })

    //使用贴图创建默认材质
    const material = SQG.Utils.material.create({
        map: imageMap
    })

    //使用贴图创建球几何体
    const geometry = SQG.Utils.geometry.create({
        type: 'SphereGeometry',
        radius: 3
    })

    //创建网格
    const mesh = new SQG.Mesh({ material, geometry })
    mesh.register('update', () => {
        mesh.source.rotation.y += 0.001
    })

    //创建3D世界
    const world = new SQG.World()

    //加入World
    world.add(mesh)

    //启动
    const container = document.getElementById('container')
    world.start(container)
})





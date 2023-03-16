//轨道控制器 继承自Node
const controls = new SQG.OrbitControls({
    /**控制器是否响应用户的操作 */
    enabled: false,
    /**启用或禁用摄像机平移 */
    enablePan: false,
    /**位移的速度 */
    panSpeed: 1.0,
    /**定义当平移的时候摄像机的位置将如何移动。
     * 如果为true，摄像机将在屏幕空间内平移。 
     * 否则，摄像机将在与摄像机向上方向垂直的平面中平移。
     */
    screenSpacePanning: true,
    /**启用或禁用摄像机的缩放 */
    enableZoom: true,
    /**你能够将相机向内移动多少 */
    minDistance: 0,
    /**你能够将相机向外移动多少 */
    maxDistance: Infinity,
    /**启用或禁用摄像机水平或垂直旋转 */
    enableRotate: true,
    /**你能够垂直旋转的角度的下限 */
    minPolarAngle: 0,
    /**你能够垂直旋转的角度的上限 */
    maxPolarAngle: Math.PI * 2,
    /**你能够水平旋转的角度下限 */
    minAzimuthAngle: -Infinity,
    /**你能够水平旋转的角度上限 */
    maxAzimuthAngle: Infinity,
    /**将其设置为true以启用阻尼（惯性），
     * 这将给控制器带来重量感
     */
    enableDamping: false,
    /**阻尼(惯性)大小 */
    dampingFactor: 0.05,
    /**将其设为true，以自动围绕目标旋转 */
    autoRotate: false,
    /**围绕目标旋转的速度将有多快 */
    autoRotateSpeed: 2,
    /**你能够将相机放大多少 */
    minZoom: 0,
    /**你能够将相机缩小多少 */
    maxZoom: Infinity,
    /**摄像机旋转的速度 */
    rotateSpeed: 1,
    /**摄像机缩放的速度 */
    zoomSpeed: 1
})

//启动控制器
controls.source.enabled = true

//鼠标按下启动控制器时触发
controls.register('start', () => {
    console.log('start controls')
})
//控制器运行时时触发
controls.register('change', () => {
    console.log('change controls')
})
//鼠标按下关闭控制器时触发
controls.register('stop', () => {
    console.log('stop controls')
})

//创建3D世界
const world = new SQG.World()

//将控制器加入相机(轨道控制器只对相机生效)
world.camera.add(controls)

//创建网格
world.add(new SQG.Mesh())

//创建目标
const target = new SQG.Mesh({
    position: { x: -3, y: 0, z: 0 }
})
world.add(target)

//设置轨道的目标
controls.target = target

//启动
const container = document.getElementById('container')
world.start(container)



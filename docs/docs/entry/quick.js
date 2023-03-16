//创建3D世界
const world = new SQG.World({
})

//设置默认相机的高度
world.camera.source.position.y = 10

//设置项目朝向原点
world.camera.source.lookAt(new THREE.Vector3())


//创建一个立方体
const box = new SQG.Mesh()

//在每一帧更新中旋转立方体
box.register('update', () => {
    box.source.rotation.y += 0.02
})

//将立方体加入世界
world.add(box)

//启动
const container = document.getElementById('container')
world.start(container)





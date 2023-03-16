//以Vue3项目为例

//vue.config.js
const { defineConfig } = require('@vue/cli-service')
const SqgEditor = require('sqg-editor/webpack')

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: (config) => {
        //注册编辑器插件
        config.plugin('sqg-editer').use(SqgEditor).tap(() => [
            {
                //ctrl + s 时场景数据的保存目录
                save: 'src/sqg/projectData.ts',
                //全屏(隐藏编辑器)
                fullScreen: false
            }
        ])
    },
})


//world.ts
import * as SQG from 'sqg'
import * as THREE from 'three'
import projectData from 'src/sqg/projectData'

//创建3D世界
const world = new SQG.World(projectData)

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
const enabled = () => {
    const container = document.getElementById('app')
    world.start(container)
}

export { enabled }


//App.vue
<script lang="ts" setup>
    import {onMounted} from "vue"
    import {enabled} from "./world"

    onMounted(enabled)
</script>



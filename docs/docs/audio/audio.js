//加载资产
const url = 'sqg/audio/bgm.mp3'
SQG.assetsManager.add({ type: 'audio', url })
SQG.assetsManager.ready().then(() => {

    //创建音频 Audio继承自Node
    const auido = new SQG.Audio({
        /**音频资源地址 */
        url,
        /**是否播放 */
        play: false,
        /**播放时长,默认为音频的播放时长 */
        duration: undefined,
        /**音量 */
        volume: 1,
        /**是否循环播放 */
        loop: false,
    })

    //创建3D世界
    const world = new SQG.World()

    //播放音频
    auido.source.play()

    //将音频加入场景
    world.add(auido)

    //启动
    const container = document.getElementById('container')
    world.start(container)
})









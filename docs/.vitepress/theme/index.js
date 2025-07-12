import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import {onMounted, nextTick, watch} from 'vue'
import {useRoute} from 'vitepress'
import './style.css'

export default {
    ...DefaultTheme,
    setup() {
        const route = useRoute()

        const initZoom = () => {
            mediumZoom('.main img', {
                background: 'rgba(0, 0, 0, 0.8)'
            })
        }

        onMounted(() => {
            watch(
                () => route.path,
                () => {
                    // 等待页面 DOM 渲染完成再执行 zoom
                    nextTick(() => {
                        initZoom()
                    })
                },
                {immediate: true}
            )
        })
    }
}
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import {onMounted, watch} from 'vue'
import './style.css'

export default {
    ...DefaultTheme,
    setup() {
        onMounted(() => {
            watch(
                () => document.querySelectorAll('.main img'),
                () => {
                    mediumZoom('.main img', {background: 'rgba(0, 0, 0, 0.8)'})
                },
                {immediate: true}
            )
        })
    }
}
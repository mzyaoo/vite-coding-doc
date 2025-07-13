import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import {onMounted, nextTick, watch} from 'vue'
import {useRoute} from 'vitepress'
import {h} from 'vue' // h函数
import './style/index.css'

let homePageStyle: HTMLStyleElement | undefined

import ArticleMetadata from "./components/ArticleMetadata.vue"
import Backtotop from "./components/Backtotop.vue";


export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            // 指定组件使用doc-footer-before插槽
            'doc-footer-before': () => h(Backtotop),
        })
    },
    enhanceApp({app, router}) {
        app.component('ArticleMetadata', ArticleMetadata)
        // 彩虹背景动画样式
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => updateHomePageStyle(location.pathname === '/'),
                {immediate: true},
            )
        }

    },
    setup() {
        const route = useRoute()

        const initZoom = () => {
            mediumZoom('.main img', {
                background: 'rgba(0, 0, 0, 0.8)'
            })
        }

        onMounted(async () => {
            watch(
                () => route.path,
                () => {
                    // 等待页面 DOM 渲染完成再执行 zoom
                    nextTick(() => {
                        initZoom()
                    }).then(r => {
                        console.info(r)
                    })
                },
                {immediate: true}
            )
        })
    }
}

// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
    if (value) {
        if (homePageStyle) return

        homePageStyle = document.createElement('style')
        homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
        document.body.appendChild(homePageStyle)
    } else {
        if (!homePageStyle) return

        homePageStyle.remove()
        homePageStyle = undefined
    }
}
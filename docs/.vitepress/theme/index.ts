import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import {onMounted, nextTick, watch} from 'vue'
import {h} from 'vue' // h函数
import './style/index.css'

import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import {useData, useRoute} from 'vitepress';

let homePageStyle: HTMLStyleElement | undefined

/*组建*/
import ArticleMetadata from "./components/ArticleMetadata.vue"
import Backtotop from "./components/Backtotop.vue";
import MouseFollower from "./components/MouseFollower.vue"
import DocLayout from "./components/layout/DocLayout.vue";
import HomePage from "./components/HomePage.vue";
import Linkcard from "./components/Linkcard.vue"


export default {
    ...DefaultTheme,
    Layout() {
        return h(DocLayout, null, {
            // 指定组件使用doc-footer-before插槽
            'doc-footer-before': () => h(Backtotop),
        })
    },
    head: [
        // 设置 favicon
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    enhanceApp({app, router}) {
        app.component('ArticleMetadata', ArticleMetadata)
        app.component('MouseFollower', MouseFollower)
        app.component('HomePage', HomePage)
        app.component('Linkcard', Linkcard)
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
        // Get frontmatter and route
        const {frontmatter} = useData();
        const route = useRoute();
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom('.main img', {background: 'var(--vp-c-bg)'}); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );

        // giscus配置
        giscusTalk({
                repo: 'mzyaoo/vite-coding-doc', //仓库
                repoId: 'R_kgDOPJE5VA', //仓库ID
                category: 'General', // 讨论分类
                categoryId: 'DIC_kwDOPJE5VM4Cs4fH', //讨论分类ID
                mapping: 'pathname',
                inputPosition: 'bottom',
                lang: 'zh-CN',
            },
            {
                frontmatter, route
            },
            //默认值为true，表示已启用，此参数可以忽略；
            //如果为false，则表示未启用
            //您可以使用“comment:true”序言在页面上单独启用它
            true
        );
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
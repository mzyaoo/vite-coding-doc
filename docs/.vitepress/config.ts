import {defineConfig} from "vitepress";


export default defineConfig({
    base: '/vite-coding-doc/',
    title: "小姚随手记",
    description: "专注后端、安全与实战经验",
    ignoreDeadLinks: true,
    head: [
        ['link', {rel: 'icon', href: '/vite-coding-doc/favicon.ico'}],
        ['meta', { name: 'algolia-site-verification', content: '1EF515598795DEB3' }],
    ],
    markdown: {
        //行号显示
        lineNumbers: true, //false关闭
        // 组件插入h1标题下
        config: (md) => {
            md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
                let htmlResult = slf.renderToken(tokens, idx, options);
                if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
                return htmlResult;
            }
        }
    },
    themeConfig: {
        logo: '/favicon.ico', // 左侧图标
        siteTitle: '小姚随手记', // 标题文字
        outline: 'deep', // 支持多级标题
        outlineTitle: '本文目录',
        nav: [
            {text: "首页", link: "/"},
            {
                text: "快速导航",
                items: [
                    {text: "服务器相关", link: "/docker/start"},
                ]
            },
            {text: "关于", link: "/about"},
        ],
        //自定义上下页名
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        sidebar: [
            {
                text: "",
                items: [
                    {text: "快速开始", link: "/quickstart"},
                ]
            },
            {
                text: "服务器相关",
                collapsed: true,
                items: [
                    {text: 'Docker安装', link: '/docker/start'},
                    {text: 'Docker常用命令', link: '/docker/command'},
                    {text: 'Docker服务安装', link: '/docker/server'},
                    {text: 'CentOS环境安装', link: '/linux/server'},
                ]
            },
            {
                text: '后端',
                collapsed: true,
                items: [
                    {text: 'SpringCloud', link: '/backend/springcloud'},
                ]
            },
            {
                text: '前端',
                collapsed: true,
                items: [
                    {text: 'Vue', link: '/frontend/vue'},
                    {text: 'Echarts', link: '/frontend/echarts'},
                ]
            },
            {
                text: '问题总结',
                collapsed: true,
                items: [
                    {text: 'Git', link: '/issue/git'},
                ]
            },
            {
                text: '其他',
                collapsed: true,
                items: [
                    {text: 'Mac相关', link: '/other/mac'},
                    {text: 'MacDocker开发环境', link: '/other/m1-docker'},
                ]
            }
        ]
    },

})
export default {
    title: "小姚随手记",
    description: "专注后端、安全与实战经验",
    themeConfig: {
        outline: 'deep', // 支持多级标题
        outlineTitle: '本文目录',
        nav: [
            {text: "首页", link: "/"},
            {text: "关于", link: "/about"},
            {text: "GitHub", link: "https://github.com/yourname"},
        ],
        sidebar: [
            {
                text: "",
                items: [
                    {text: "快速开始", link: "/quickstart"},
                ]
            },
            {
                text: '服务器相关',
                collapsible: true,
                items: [
                    {text: 'Docker安装', link: '/docker/start'},
                    {text: 'Docker常用命令', link: '/docker/command'},
                    {text: 'Docker服务安装', link: '/docker/server'},
                    {text: 'CentOS环境安装', link: '/linux/server'},
                ]
            },
            {
                text: '后端',
                collapsible: true,
                items: [
                    {text: 'SpringCloud', link: '/backend/springcloud'},
                ]
            },
            {
                text: '前端',
                collapsible: true,
                items: [
                    {text: 'Vue', link: '/frontend/vue'},
                    {text: 'Echarts', link: '/frontend/echarts'},
                ]
            },
            {
                text: '问题总结',
                collapsible: true,
                items: [
                    {text: 'Git', link: '/issue/git'},
                ]
            },
            {
                text: '其他',
                collapsible: true,
                items: [
                    {text: 'Mac', link: '/other/mac'},
                    {text: 'MacDocker开发环境', link: '/other/m1-docker'},
                ]
            }
        ]
    }
}
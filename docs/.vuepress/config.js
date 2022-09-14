module.exports = {
    title: '离散数学与概率论', // 网站标题
    description: '计算机科学的数学基础', // 网站描述

    // 插入html头
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],

    // 插件
    plugins: [
        ['@maginapp/vuepress-plugin-katex', { // katex公式
          delimiters: 'dollars'
        }],

        ['vuepress-plugin-container', {
            type: 'definition',
            before: info => `<div class="definition"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['vuepress-plugin-container', {
            type: 'theorem',
            before: info => `<div class="theorem"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['vuepress-plugin-container', {
            type: 'conclusion',
            before: info => `<div class="conclusion"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['@vuepress/back-to-top'],

        ['vuepress-plugin-mygitalk', {
            // 是否启用(关闭请设置为false)(default: true)
            enable: false,
            // 是否开启首页评论(default: true)
            home: false,
            // Gitalk配置
            gitalk: {
                // GitHub Application Client ID.
                clientID: '',
                // GitHub Application Client Secret.
                clientSecret: '',
                // GitHub repository. 存储评论的 repo
                repo: '',
                // GitHub repository 所有者，可以是个人或者组织。
                owner: 'JacyCui',
                // 设置语言(default: zh-CN)
                language: 'zh-CN',
            }
        }]
    ],
    
    markdown: { // markdown渲染设置
        lineNumbers: true
    },

    locales: {  // 网站语言设置
        '/': {
            lang: 'zh-CN'
            // title: 'VuePress',
            // description: 'Vue-powered Static Site Generator'
        }
    },

    themeConfig: { // 主题设置
        // 关于导航栏
        logo: '/favicon.png', // 导航栏logo
        navbar: true, // 启用导航栏
        nav: [ // 导航栏内容设置
            {
                text: '目录',
                items: [
                    {text: '0 集合与数学记号', link: '/00-sets-and-mathematical-notation/'}
                ]
            },
            { text: '笔者博客', link: 'https://blog.cuijiacai.com' },
        ],
        repo: 'JacyCui/cs-math', // 文档项目的github仓库

        // 关于侧边栏
        displayAllHeaders: false, // 显示所有页面的标题链接，否则只显示当前页面的
        activeHeaderLinks: false, // 活动的标题链接
        sidebarDepth: 3, // 
        sidebar: [
            // ['/demo', 'Explicit link text'], // 显示地指定文字
            '/preface/',
            '/00-sets-and-mathematical-notation/'
        ],

        // 关于页脚
        nextLinks: true, // 下一篇
        prevLinks: true, // 上一篇
        lastUpdated: '最后更新', // string | boolean 最后更新时间
        repoLabel: '查看源码',
        // docsRepo: 'vuejs/vuepress', // 文档仓库，默认为项目仓库
        docsDir: 'docs', // 文档目录
        docsBranch: 'main', // 文档分支
        editLinks: true,
        editLinkText: '帮助我改善此页面！',

        smoothScroll: true // 页面滚动 
    }
}


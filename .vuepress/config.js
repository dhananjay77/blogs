module.exports = {
    title: 'BeeZeal Consultancy',
    head: [
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
      ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'Speaking', link: '/speaking'}
        ],
        sidebar: [
            '/',
            '/blog/'
        ]
    }
}
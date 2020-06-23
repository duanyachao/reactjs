const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: '大数据',
        key: '/common/bds'
    },
    {
        title: '农业物联网',
        key: '/aIot',
        children: [
            {
                title: '机构管理',
                key: '/aIot/jggl',
            },
            {
                title: '用户管理',
                key: '/aIot/yhgl',
            },
            {
                title: '生产区域管理',
                key: '/aIot/scqygl',
            },
            {
                title: '设备管理',
                key: '/aIot/deviceMg',
            },

        ]
    },
   
];
export default menuList;
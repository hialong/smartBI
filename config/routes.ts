export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name:'管理员页面',
    routes: [
      { path: '/admin', name:'管理界面', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name:'管理界面2', component: './Admin' },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList' ,name: '表格页'},
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];

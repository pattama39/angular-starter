import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    moduleName: '',
    icon: '',
    class: 'header',
    groupTitle: true,
    submenu: []
  },
  {
    path: '',
    title: 'MENUITEMS.HOME.TEXT',
    moduleName: 'dashboard',
    icon: 'menu-icon ti-home',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/dashboard/main',
        title: 'MENUITEMS.HOME.LIST.DASHBOARD1',
        moduleName: 'dashboard',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/dashboard/dashboard2',
        title: 'MENUITEMS.HOME.LIST.DASHBOARD2',
        moduleName: 'dashboard',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/dashboard/dashboard3',
        title: 'MENUITEMS.HOME.LIST.DASHBOARD3',
        moduleName: 'dashboard',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: '-- Extra',
    moduleName: '',
    icon: '',
    class: 'header',
    groupTitle: true,
    submenu: []
  },
  {
    path: '',
    title: 'Authentication',
    moduleName: 'authentication',
    icon: 'menu-icon ti-user',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/authentication/signin',
        title: 'Sign In',
        moduleName: 'authentication',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/signup',
        title: 'Sign Up',
        moduleName: 'authentication',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/forgot-password',
        title: 'Forgot Password',
        moduleName: 'authentication',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/locked',
        title: 'Locked',
        moduleName: 'authentication',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/page404',
        title: '404 - Not Found',
        moduleName: 'authentication',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/authentication/page500',
        title: '500 - Server Error',
        moduleName: 'authentication',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Extra Pages',
    moduleName: 'extra-pages',
    icon: 'menu-icon ti-receipt',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/extra-pages/blank',
        title: 'Blank Page',
        moduleName: 'extra-pages',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Multi level Menu',
    moduleName: 'multilevel',
    icon: 'menu-icon ti-angle-double-down',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/multilevel/first1',
        title: 'First',
        moduleName: 'multilevel',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/',
        title: 'Second',
        moduleName: 'secondlevel',
        icon: '',
        class: 'ml-sub-menu',
        groupTitle: false,
        submenu: [
          {
            path: '/multilevel/secondlevel/second1',
            title: 'Second 1',
            moduleName: 'secondlevel',
            icon: '',
            class: 'ml-sub-sub-menu',
            groupTitle: false,
            submenu: []
          },
          {
            path: '/multilevel/secondlevel/second2',
            title: 'Second 2',
            moduleName: 'secondlevel',
            icon: '',
            class: 'ml-sub-sub-menu',
            groupTitle: false,
            submenu: []
          }
        ]
      },
      {
        path: '/multilevel/first3',
        title: 'Third',
        moduleName: 'multilevel',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  }
];

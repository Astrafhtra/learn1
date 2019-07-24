const tripUser = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/user/login'),
    meta: {
      title: '登录'
    }
  }
]

export default tripUser;
const tripRoutes = [
  {
    path:'/trip',
    name:'trip',
    component:()=>import('@/views/trip/trip'),
    // meta 显示标签
    meta:{
      title:'出行'
    },
    children:[
      {
        path:'Map',
        name:'Map',
        component:()=>import('@/components/MapLocation/index'),
        meta:{
          title:'地图'
        }
      }
    ]
  }
]
export default tripRoutes
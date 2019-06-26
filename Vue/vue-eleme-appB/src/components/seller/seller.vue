<template>
<div>
    <div class="header">
      <div class="sellername">粥品香坊（回龙观）</div>
      <star></star>
      <span class="text">(24) 月售90单</span>
      <div class="collect">
        <img id='show' src="./dislike.png" @click="choose" width="50px" height="50px"/>
        <span type="text">收藏</span>
      </div>
      <div class="standard">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="deliveryprice" label="起送价" width="180"></el-table-column>
          <el-table-column prop="sellersend" label="商家配送" width="180"></el-table-column>
          <el-table-column prop="times" label="平均配送时间"></el-table-column>
       </el-table>
      </div>
      
    </div>
</div>

</template>

<script>
import star from '@/components/star/star'
export default {
    name:'Seller',
    props:{
      seller: {
      type: Object
    }
    },
    data(){
      return{
         tableData: [{
            deliveryprice: '20元',
            sellersend: '商家配送',
            times: '38分钟'
          }]
      }
    },
    methods:{
      choose(){
        a=document.getElementById('show')
        a.src='./like.png'
      }
    }
}
</script>

<style scoped>
  /* .img{
    display: absolute;
    width: 100px;
    height: 100px;
  } */
  .title{
    position: absolute;
    vertical-align: center
  }
</style>

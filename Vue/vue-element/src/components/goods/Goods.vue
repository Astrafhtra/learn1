<template>
  <div>
    <div class="goods">
      <div class="menu-wapper" ref="menuWrapper">
        <ul>
          <li
            v-for="(item,index) in goods"
            :key="index"
            class="menu-item"
            :class="{'current' : currentIndex === index }"
            @click="selectMenu(index,$event)"
          >
            <span class="text border-1px">
              <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
              {{ item.name}}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Goods",

  data() {
    return {
      currentIndex: "",
      classMap: [],
      goods: ""
    };
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
    }
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5ca457efc4e9a575b66b625c/example/vue-eleme-goods"
      )
      .then(res => {
        console.log(res);
        if (res.data.errno === 0) {
          // 页面渲染完成之后，把数据放到数据源
          // 防止我们拿到数据之后需要塞到页面上，但是页面还没有编译完成，可能看不到数据
          this.$nextTick(() => {
            this._initScroll();
            this.goods = Object.assign({}, this.goods, res.data.data);
          });
        }
      });
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'
    .goods
        display flex
        position absolute
        top 174px
        bottom 46px
        width 100%
        overflow hidden
        .menu-wapper
            flex 0 0 80px       
            width 80px
            background #f3f5f7
            .menu-item
                display table
                height 54px
                width 56px
                padding 0 12px
                line-height 14px
                // border-top 1px solid #000      
                &.current
                    position relative
                    z-index 10
                    margin-top #ffffff
                    font-weight 700
                .text
                    border-none()
                    .icon
                        display inline-block
                        vertical-align top
                        width 12px
                        height 12px
                        margin-right 2px
                        background-size 12px 12px   //其实就是100% 宽高都是 12px
                        background-repeat no-repeat
                        &.decrease {
                            bg-image('decrease_3');
                        }
                        &.discount {
                        bg-image('discount_3');
                        }
                        &.guarantee {
                        bg-image('guarantee_3');
                        }
                        &.invoice {
                        bg-image('invoice_3');
                        }
                        &.special {
                        bg-image('special_3');
                        }



</style>

<template>
  <mt-swipe :auto="4000" class="h-banner">
    <mt-swipe-item v-for="item in bannerList" :key="item.id">
      <div class="imgtitle">
        <a :style="{backgroundImage:'url(' + item.src + ')'}">
          <h1>{{item.title}}</h1>
        </a>
      </div>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'mint-ui';
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default {
    name: 'swips',
    data () {
      return {
        bannerList : [
          {
            src : '/static/images/banner1.jpg',
            href : '#',
            title : '瞎扯·如何正确的吐槽'
          },{
            src : '/static/images/banner2.jpg',
            href : '#',
            title : '作为保险行业的人，讲讲普通人是怎么被保险公司套路的'
          },{
            src : '/static/images/banner3.jpg',
            href : '#',
            title : '妈妈，我不是在玩游戏，而是在理解世界'
          },{
            src : '/static/images/banner4.jpg',
            href : '#',
            title : '你都当妈了，就不能为孩子忍一忍'
          },
        ],
      }
    },
    mounted(){
        console.log('bannerList',this.bannerList)
    }
  }
</script>
<style scoped>
  .mint-swipe{
    height: 380px;
  }
  .mint-swipe a{
    height: 380px;
    width: 100%;
    background-size:100% auto;
    background-position: 0 -150px;
    display:block;
    color:#fff;
  }
  .mint-swipe a h1{
    font-weight: 600;
    padding: 0 18px;
    position: absolute;
    bottom: 12px;
    text-shadow:2px 2px #333;
    font-size: 36px;
  }

</style>


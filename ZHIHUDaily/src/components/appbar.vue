<template>
  <div>
    <mu-appbar title="今日热闻" titleClass="appbar_title">
      <mu-raised-button icon="menu" label="" @click="toggle(true)" slot="left" class="raised-btn"/>
    </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list class="avatar">
        <mu-list-item title="请登录" disabled>
          <mu-avatar  slot="left" src="static/images/uicon.jpg" :size="40"/>
        </mu-list-item>
      </mu-list>
      <mu-list class="operation">
        <mu-list-item title="收藏" disabled>
          <mu-avatar slot="left" icon="star" :size="30"/>
        </mu-list-item>
        <mu-list-item title="消息" disabled>
          <mu-avatar slot="left" icon="star" :size="30"/>
        </mu-list-item>
        <mu-list-item title="设置" disabled>
          <mu-avatar slot="left" icon="star" :size="30"/>
        </mu-list-item>
      </mu-list>
      <mu-list @itemClick="docked ? '' : toggle()" class="list">
        <mu-list-item :title="item.title" v-for="item in classificationList">
          <mu-icon slot="right" value="+"/>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>
<script>
  import getData from '../mock/contentdata';
  export default {
    data () {
      return {
        open: false,
        docked: true,
        classificationList : []
      }
    },
    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      }
    },
    mounted(){
      const data = getData;
      if(data.status == 'success'){
        this.classificationList = data.data.classificationList
      }
    }
  }
</script>
<style scope>
  .mu-appbar{
    background-color: rgba(0,0,0,0);
    position: absolute;
    height:100px;
    top: 0;
    left: 0;
    box-shadow: none;
  }
  .mu-avatar{
    background-color: rgba(0,0,0,0);
    color:rgba(255,255,255,0.9);
  }
  .appbar_title{
    text-align: center;
    font-size: 32px;
    color:rgba(255,255,255,0.9);
    font-weight:500;
  }
  .raised-btn{
    background-color: rgba(0,0,0,0);
    box-shadow: none;
    color: #fff;
    margin-top: -8px;
    width: 50px !important;
    min-width: 0;
  }

  .raised-btn .mu-raised-button-wrapper{
    width:50px;
    height:50px;
  }
  .mu-overlay{
    background-color: rgba(0,0,0,0);
  }
  .mu-paper{
    background-color: #222726;
  }
  .mu-item{
    color: rgba(255,255,255,0.6);
  }
  .mu-item-title{
    font-size: 28px;
  }
  .avatar .mu-item{
    padding-left:140px;
  }
  .operation{
    margin-top:-60px;
  }
  .operation .mu-item{
    float: left;
    padding-left:0
  }
  .operation .mu-item-wrapper .mu-item-content{
    display: block;
  }
  .operation .mu-item-wrapper .mu-item-content .mu-item-title-row{
    padding: 80px 0 0px 36px;
  }
  .list{
    margin-top: -40px;
  }
</style>

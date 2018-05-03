<template>
  <div>
    <div class="content-item" v-if="contentData" v-for="(item,index) in contentData">
      <router-link :to="{ name: 'detials', params: { id: index }}">
        <div class="content-title">
          {{item.title}}
        </div>
        <div class="content-picture">
          <img :src="item.src" style="width: 100%;height: 100%">
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import getData from '../mock/contentdata';
  export default {
    name: 'contentList',
    data () {
      return {
        contentData : [],
      }
    },
    //直接加载
    mounted(){
      const data = getData;
      if(data.status == 'success'){
          this.contentData = data.data.contentList
      }
    },
  }
</script>
<style scoped>
  .content-item{
    box-sizing: content-box;
    height:150px;
    padding:20px 0;
    margin: 0 24px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
  .content-title{
    float: left;
    width:73%;
    height:100%;
    padding-right:2%;
    font-size: 30px;
    color: rgba(0,0,0,.85);
  }
  .content-picture{
    float: left;
    width:25%;
    height:100%;
  }
</style>

<template>
  <div>
    <div class="title">
      <img :src="detial.src">
      <h1>{{detial.title}}</h1>
    </div>
    <div v-html='detial.content' class="article"></div>
  </div>
</template>
<style scope>
  .title{
    margin-top: -150px;
    position: relative;
  }
  img{
    width:100%;
    z-index: 1;
  }
  .title h1{
    z-index: 2;
    position: absolute;
    left: 0;
    color: #fff;
    font-weight: 600;
    padding: 0 18px;
    bottom: 200px;
    text-shadow:2px 2px #333;
    font-size: 36px;
  }
  .article{
    background-color: #fff;
    position: absolute;
    top: 440px;
  }
</style>
<script>
  import getData from '../mock/contentdata';
  export default{
    data(){
      return{
        detial:{}
      }
    },
    mounted(){
      if(getData.status == 'success'){
        let index = this.$route.params.id;
        this.detial = getData.data.contentList[index];
      }
    }
  }
</script>

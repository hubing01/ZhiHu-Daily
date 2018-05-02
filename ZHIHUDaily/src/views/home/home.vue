<template>
  <div>
    <appbar></appbar>
    <swips></swips>
    <contentList></contentList>
  </div>
</template>
<script>
  import appbar from '@/components/appbar.vue'
  import swips from '@/components/swips.vue'
  import contentList from '@/components/contentList.vue'
  export default {
    components:{swips,contentList,appbar},
  }
</script>

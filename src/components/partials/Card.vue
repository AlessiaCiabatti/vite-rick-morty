
<script>
  export default {
    props:{
      name: String,
      status: String,
      Species: String,
      image: String,
    }
  }
</script>


<template>
  
<div class="col mb-5 ">

  <div class="card text-center" style="width: 18rem;">
    <img :src="image" class="card-img-top" :alt="name">
    <div class="card-body">
      <h5 class="card-title">TITOLO</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>

</div>
</template>


<style lang="scss" scoped>

</style>
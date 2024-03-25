
<script>
  export default {
    props:{
      name: String,
      status: String,
      species: String,
      image: String,
    }
  }
</script>


<template>
  
<div class="col mb-5 ">

  <div class="card text-center" style="width: 18rem;">
    <img :src="image" class="card-img-top" :alt="name">
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <hr>
      <p class="card-text">{{status}}</p>
      <p class="card-text">{{species}}</p>
    </div>
  </div>

</div>
</template>


<style lang="scss">
.card{
  border: none;
  img{
    border-radius: 50% 20% / 10% 40%;
  }
}
</style>
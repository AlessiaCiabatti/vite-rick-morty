
<script>
// import store no default
import {store} from '../assets/data/store';

  export default {
    data(){
      store
    }
    
  }
</script>


<template>
<div class="container mt-5">
  <h1 class="text-center mb-5">
    -Rick&Morty-
  </h1>

  <div class="d-flex my_container justify-content-between ">

    <div>
      search
    </div>

    <div>
      select
    </div>

    <div>
      button search
    </div>

    <div>
      button reset
    </div>

  </div>

</div>
</template>


<style lang="scss">
.my_container{
  width: 50%;
  margin: 0 auto;
}

</style>
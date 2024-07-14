<script>
import { store } from '../../assets/data/store';
  export default {
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div class="container">
    <div class="my_container text-center">
      <p>Risultati trovati: {{ store.cardList.length }}</p>
    </div>
  </div>
</template>



<style lang="scss">
.my_container{
  width: 50%;
  margin: 0 auto;
}
</style>
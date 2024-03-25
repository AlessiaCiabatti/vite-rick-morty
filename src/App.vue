<script>
import axios from 'axios';
//importa store
import {store} from './assets/data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

  export default {
    components:{
        Header,
        Main,
      },
      data(){
        return{
          store
        }
      },

      methods:{
        getApi(){
          axios.get(this.store.apiUrl)
          // risposta
          .then(result =>{
            console.log(result.data);
          })
          //errore
          .catch(error =>{
            console.log(error);
          })
        }
      },
      mounted(){
        this.getApi()
      }
  }
</script>


<template>
  <Header />
  <Main />
</template>



<style lang="scss">
@use './assets/scss/main.scss';
</style>

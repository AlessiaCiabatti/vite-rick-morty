<script>
import axios from 'axios';
//importa store
import {store} from './assets/data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/partials/Footer.vue';

  export default {
    components:{
        Header,
        Main,
        Footer,
      },
      data(){
        return{
          store
        }
      },

      methods:{
        getApi(){
          axios.get(this.store.apiUrl, {
            params: this.store.queryParams,
          })
          // risposta
          .then(result =>{
            this.store.cardList = result.data.results;
            console.log(this.store.cardList);
          })
          //errore
          .catch(error =>{
            console.log(error);
          })
        },

        // getAllNames
        getAllNames(){
          axios.get(this.store.apiUrl)
          .then(result =>{
            console.log(result.data.results);
            // rimappo per avere solo i nomi in un array vuoto, pusha automaticamente nell'array
            this.store.namesList = result.data.results.map(item => item.name)
            console.log(this.store.namesList)
          })
        },

      },
      
      mounted(){
        this.getApi()
        // richiama
        this.getAllNames()
      }
  }
</script>


<template>
  <Header @startSearch="getApi"/>
  <Main />
  <Footer />
</template>



<style lang="scss">
@use './assets/scss/main.scss';

</style>

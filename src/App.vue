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
          axios.get(this.store.apiUrl)
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
          axios.get(this.store.nameUrl)
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
  <Header :store="store"/>
  <Main />
  <Footer />
</template>



<style lang="scss">
@use './assets/scss/main.scss';

</style>

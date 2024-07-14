<script>
import axios from 'axios';
//importa store
// con graffe o senza graffe, differenza: 
// export default se non c'è sono costretto ad importare ci le graffe, se c'è export default, devo usare lel graffe
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
            // adesso devo andare in store per fare un array vuoto nel quale ci pusho con map cosa????

            // cico tutti i characters per prendere tutti gli stati
            this.store.cardList.forEach( item => {
              console.log(item.status)
              // se item.status non è contenuto in store.statusList lo pusho
              if(!this.store.statusList.includes(item.status)){
                this.store.statusList.push(item.status);
              }
            });
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
  <Header @ricerca="getApi"/>
  <Main />
  <Footer />
</template>



<style lang="scss">
@use './assets/scss/main.scss';

body{
  font-family: 'Roboto', sans-serif;
  background-color: rgb(238, 211, 244)
}

</style>

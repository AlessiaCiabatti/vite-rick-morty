
<script>
// import store no default
import axios from 'axios';
import {store} from '../assets/data/store';

  export default {
    data(){
    // il return
      return{
      store,
      nameToSearch: ''
      }
    },
    methods:{
      startSearch(){
        console.log('ricerca nome');
        this.store.queryParams= {
          name: this.nameToSearch
        }
        this.$emit('startSearch')
      }
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
      <!-- <label for="exampleDataList" class="form-label">Datalist example</label> -->
      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." 
      v-model.trim="nameToSearch"
      @keyup.enter="startSearch">
      <datalist id="datalistOptions">
        <!-- ciclo for per i nomi dentro la lista -->
        <option v-for="(name, index) in this.store.namesList" 
        :key="index"
        :value="name"></option>
        <!-- <option value="New York"></option>
        <option value="Seattle"></option>
        <option value="Los Angeles"></option>
        <option value="Chicago"></option> -->
      </datalist>
    </div>

    <div>
      <select class="form-select" aria-label="Default select example">
        <option selected>Select Status</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div>
      <button @click="startSearch" type="button" class="btn btn-info">Search</button>
    </div>

    <div>
      <button type="button" class="btn btn-warning">Reset</button>
    </div>

  </div>

</div>
</template>


<style lang="scss">


.my_container{
  width: 50%;
  margin: 0 auto;
  .input-group{
    width: 120%;
  }
}

</style>
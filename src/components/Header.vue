
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
      <!-- <label for="exampleDataList" class="form-label">Datalist example</label> -->
      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
      <datalist id="datalistOptions">
        <option value="San Francisco"></option>
        <option value="New York"></option>
        <option value="Seattle"></option>
        <option value="Los Angeles"></option>
        <option value="Chicago"></option>
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
      <button type="button" class="btn btn-info">Search</button>
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
// importo reactive da vue
import { reactive }  from 'vue'

//  lo importo nei componenti che ne hanno bisogno
export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardList: [],
  // nuova api
  nameUrl: 'https://rickandmortyapi.com/api/character/?name',
  // nuovo array con solo i nomi
  namesList: [],
  queryParams: {

  }
  
})
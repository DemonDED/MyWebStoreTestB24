<template>
  <table>
    <thead>
      <tr class="trT">
        <th>Назначение платежа</th>
        <th>Тип оплаты</th>
        <th>Сумма</th>
        <th>Планируемая дата</th>
        <th>Фактическая дата</th>
        <th>Ответственный</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="item" v-for="item in itemsData">
        <td>{{item.pay}}</td>
        <td>{{item.type_cost}}</td>
        <td>{{item.sum}}</td>
        <td>{{item.favorite_date}}</td>
        <td>{{item.factic_date}}</td>
        <td>{{item.person}}</td>
      </tr>
    </tbody>
  </table>
  <button @click='this.addElementForm = true'>Добавить сделку</button>
  <HelloWorld v-show="this.addElementForm" msg="Welcome to Your Vue.js App"/>
</template>

<script>
import BX24API from './bx24';
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  data() {
    return {
      keyForRest: [],
      itemsData: [
        {pay: 'Долг', type_cost: 'Наличные', sum: '100', favorite_date: '01.01.2001', factic_date: '02.02.2001', person: 'Дмитрий'},
        {pay: 'Долг', type_cost: 'Наличные', sum: '100', favorite_date: '01.01.2001', factic_date: '02.02.2001', person: 'Дмитрий'},
      ],
      addElementForm: false,
    }
  },
  mounted() {
    this.getKey();
    this.setPosition();
  },
  methods: {
    getKey() {
      BX24API.callMethod('palcement.bind', {
        PLACEMENT: 'CRM_LEAD_DETAIL_TAB',

      })
      .catch(function(error) {
        console.log(error);
      });
    },
    setPosition() {
      BX24API.callMethod('lists.get', {
        'IBLOCK_TYPE_ID': 'lists',

      }, function(result) {
        if (result.error())
          console.log('error' + result.error());
        else 
          console.log(result.data());
      })
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table, tr, td {
  border: 1px solid black;
}
.trT {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>

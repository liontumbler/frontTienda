<template>
  <div class="bg-body-tertiary">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 col-xxl-3 mt-3">
          <CardProduct :product="{
            //img: 'https://avatars.githubusercontent.com/u/60611243?v=4',
            name: 'EDWIN',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            stock: 0,
            reference: 'asd1234',
            price: 1000,
          }" />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 col-xxl-3 mt-3">
          <CardProduct :product="{
            //img: 'https://avatars.githubusercontent.com/u/60611243?v=4',
            name: 'title',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            stock: 10,
            reference: 'asd1234',
            price: 1000,
          }" />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 col-xxl-3 mt-3">
          <CardProduct :product="{
            img: 'https://avatars.githubusercontent.com/u/60611243?v=4',
            name: 'title',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            stock: 10,
            reference: 'asd1234',
            price: 1000,
          }" />
        </div>
        
        <div class="col-sm-12 col-md-6 col-lg-4 col-xxl-3 mt-3">
          <CardProduct></CardProduct>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12 mt-3">
          <CardUser></CardUser>
        </div>
      </div>
    </div>

    <Table
      :data="data"
      :columns="columns"
    ></Table>

    <!--Login
      @login="login"
    /-->

    
  </div>
  <Loading 
    class="z-3 w-100 h-100 position-absolute top-0 start-0 bg-dark text-white opacity-50"
    :visible="isLoading"
  />
</template>

<script>
//console.log('VITE_AUTOR', import.meta.env.VITE_AUTOR);
//console.log('APIPRINCIPAL_APP', import.meta.env.APIPRINCIPAL_APP);
//console.log('MODE', import.meta.env.MODE);
//console.log('BASE_URL', import.meta.env.BASE_URL);
//console.log('PROD', import.meta.env.PROD);
//console.log('DEV', import.meta.env.DEV);
//console.log('SSR', import.meta.env.SSR);
//console.log('env', import.meta.env);

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';//-
import CardProduct from '../components/CardProduct.vue';
import CardUser from '../components/CardUser.vue';
import Table from '../components/Table.vue';
import Login from '../components/Login.vue';
import Loading from '../components/Loading.vue';

export default {
  name: 'Tienda',
  components: {
    CardProduct,
    Table,
    Login,
    Loading,
    CardUser
  },
  data() {
    return {
      isLoading: false,
      columns: {
        accion: {
          label: 'acciones',
          type: 'accion',
          width: '117',
          alignH: 'center',
          alignB: 'center'
        },
        id: {
          label: 'uno',
          type: 'number',
          sortable: true,
          width: '50',
          alignH: 'center',
          alignB: 'center'
        },
        qwe: {
          label: 'dos',
          type: 'number',
          sortable: true,
          width: '100',
          alignH: '',
          alignB: ''
        },
        asd: {
          label: 'tre',
          type: 'number',
          sortable: true,
          width: '150',
          alignH: '',
          alignB: ''
        },
        rty: {
          label: 'cuatro',
          type: 'number',
          sortable: true,
          width: '200',
          alignH: '',
          alignB: ''
        },
      },
      data: [
        {
          id: 300,
          qwe: 300,
          asd: 300,
          rty: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
          id: 200,
          qwe: 200,
          asd: 200,
          rty: 200
        },
        {
          id: 400,
          qwe: 400,
          asd: 400,
          rty: 400
        }
      ]
    }
  },
  
  async mounted() {
    document.title = 'Tienda';
    this.cargartooltipsbootstrap()
  },
  methods: {
    cargartooltipsbootstrap() {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    },
    login(nickname, password){
      this.isLoading = true;
      console.log('llega', nickname, password);
    }
  },
}

</script>
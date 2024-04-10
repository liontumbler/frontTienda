<template>
    <div>
        <article class="card d-block m-auto shadow" style="width: 18rem;">
            <img :src="product.img || defaultImage" class="card-img-top d-none d-sm-block" alt="Imagen Producto">
            <div class="card-body">
                <h5 class="card-title text-large" data-bs-toggle="tooltip" data-bs-placement="right" :title="product.name">
                    {{ product.name || defaultName}}
                </h5>
                <p class="card-text text-large" data-bs-toggle="tooltip" data-bs-placement="bottom" :title="product.description">
                    {{ product.description || defaultDescription }}
                </p>
                <h6 class="card-text">disponible: <span>{{ product.stock || product.stock == 0 ? product.stock : defaultStock }}</span></h6>
                <h6 class="card-text">ref: <span>{{ product.reference || defaultReference}}</span></h6>
                <h6 class="card-text">$ <span>{{ product.price || defaultPrice}}</span></h6>
                <div class="row">
                    <div class="col-sm-6">
                        <input type="number" v-model="stock" class="form-control" min="1" :max="product.stock" v-if="product.stock">
                    </div>
                    <div class="col-sm-6">
                        <button @click="$emit('agregar', product, stock)" class="btn btn-primary form-control">Agregar</button>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'CardProduct',
    props: {
        product: {
            type: Object,
            default: () => ({
                img: '/img/shop.svg',
                name: '',
                description: '',
                stock: '',
                reference: '',
                price: 0,
            }),
        }
    },
    data() {
        return {
            defaultImage: '/img/shop.svg',
            defaultStock: 'N/A',
            defaultName: 'N/A',
            defaultDescription: 'N/A',
            defaultReference: 'N/A',
            defaultPrice: 0,
            stock: 1
        }
    },
}
</script>
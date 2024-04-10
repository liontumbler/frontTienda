<template>
    <div class="table-responsive table-center">
        <table class="table w-0">
            <caption>{{ caption }}</caption>
            <thead>
                <div>
                    <tr>
                        <th v-for="(item, index) in columns" :key="index" 
                            :style="`text-align: ${(item.alignH ? item.alignH : 'left')};`"
                        >
                            <div class="text-large p-2" :style="(item.width ? `width: ${item.width}px;` : '')">
                                {{ item.label }}
                            </div>
                        </th>
                    </tr>
                </div>
            </thead>
            <tbody>
                <div v-for="(item, index) in data" :key="index">
                    <tr>
                        <td v-for="(item2, index2) in columns" :key="index2"
                            :style="`text-align: ${(item2.alignB ? item2.alignB : 'left')};`"
                        >
                            <div :style="(item2.width ? `width: ${item2.width}px;` : '')">
                                <div class="text-large p-2" v-if="item2.type && item2.type.toLowerCase() == 'date'">
                                    {{ formatearFecha(item[index2]) }}
                                </div>
                                <div class="text-large p-2" v-if="item2.type && item2.type.toLowerCase() == 'accion'">
                                    <div class="row">
                                        <div class="col-sm-4 col-md-4"><img alt="Ver" title="Ver" class="cursos-pointer" data-bs-toggle="tooltip" data-bs-placement="bottom" @click="$emit('ver', item.id)" src="/img/view.svg" width="20" height="20" /></div>
                                        <div class="col-sm-4 col-md-4"><img alt="Editar" title="Editar" class="cursos-pointer" data-bs-toggle="tooltip" data-bs-placement="bottom" @click="$emit('editar', item.id)" src="/img/update.svg" width="20" height="20" /></div>
                                        <div class="col-sm-4 col-md-4"><img alt="Eliminar" title="Eliminar" class="cursos-pointer" data-bs-toggle="tooltip" data-bs-placement="bottom" @click="$emit('eliminar', item.id)" src="/img/delete.svg" width="20" height="20" /></div>
                                    </div>
                                </div>
                                <div class="text-large p-2" v-else>
                                    {{ item[index2] }}
                                </div>
                            </div>
                        </td>
                    </tr>
                    
                    <tr style="display: none;">
                        <td :colspan="Object.keys(columns).length"><div>asd</div></td>
                    </tr>
                </div>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        data: {
            type: Array,
            default: []
        },
        columns: {
            type: Object,
            default: {}
        },
    },
    data() {
        return {
            caption: 'Lista de datos'
        }
    },
    mounted() {
    },
    methods: {
        formatearFecha(date) {
            const fecha = new Date(date);
            return fecha.toLocaleString('en-US', { timeZone: 'America/Bogota' });
        }
    },
}
</script>

<style>
.fied-align-r{
    text-align: right
}
.fied-align-l{
    text-align: left
}
.fied-align-c{
    text-align: center
}
</style>
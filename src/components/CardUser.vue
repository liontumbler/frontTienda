<template>
    <div>
        <article class="card d-block m-auto shadow" style="width: 95%;">
            <div class="card-body p-3">
                <div class="row">
                    <div class="col-xs-12 col-sm-9 col-md-9">
                        <h5 class="card-title">Nombres: {{ user.name || defaultName }}</h5>
                        <h6>Apellidos: {{ user.lastName || defaultLastName }}</h6>
                        <h6>Nickname: {{ user.nickName || defaultLastName }}</h6>
                        <h6>Clave: {{ user.password || defaultPassword }}</h6>
                        <h6>Correo: {{ user.email || defaultEmail }}</h6>
                        <h6>Telefono: {{ user.phone || defaultPhone }}</h6>
                        <h6>Activo: {{ user.active || defaultActive }}</h6>
                        <h6>Admin: {{ user.admin || defaultAdmin }}</h6>
                        <h6>Clave de caja: {{ user.caja || defaultCaja }}</h6>
                        <h6>Rol: {{ user.rol || defaultRol }}</h6>
                        <h6>Empresa: {{ user.company || defaultCompany }}</h6>
                    </div>
                    <div class="col-sm-3 d-none d-sm-block">
                        <img :src="user.img || defaultImage" class="w-100 d-none d-sm-block" alt="Imagen Usero">
                    </div>
                    <div class="col-sm-12">
                        <button class="btn btn-primary" @click="$emit('editar', user)">Editar</button>
                        &nbsp;
                        <button class="btn btn-primary" @click="$emit('eliminar', user)">Eliminar</button>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'CardUser',
    props: {
        user: {
            type: Object,
            default: () => ({
                img:  '/img/user.svg',
                name: 'N/A',
                lastName: 'N/A',
                nickName: 'N/A',
                password: 'N/A',
                email: 'N/A',
                phone: 'N/A',
                active: 'N/A',
                admin: 'N/A',
                caja: 'N/A',
                rol: 'N/A',
                company: 'N/A',
            }),
        }
    },
    data() {
        return {
            defaultImage: '/img/user.svg',
            defaultName: 'N/A',
            defaultLastName: 'N/A',
            defaultNickName: 'N/A',
            defaultPassword: 'N/A',
            defaultEmail: 'N/A',
            defaultPhone: 'N/A',
            defaultActive: 'N/A',
            defaultAdmin: 'N/A',
            defaultCaja: 'N/A',
            defaultRol: 'N/A',
            defaultCompany: 'N/A',
        }
    },
}
</script>
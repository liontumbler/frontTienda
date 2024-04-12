<template>
    <div v-if="mostrar" class="modal fade show modal__general" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalDefaultLabel">{{ titulo }}</h5>
                    <button type="button" class="btn-close" aria-label="Close" @click="cerraModal()"></button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <button v-if="visibleBtnCerrar" type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cerraModal()">{{ msjBtnCerrar }}</button>
                    <button v-if="visibleBtnContinuar" type="button" class="btn btn-primary" @click="$emit('continuar')">{{ msjBtnContinuar }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Modal',
    props :{
        titulo:{
            type: String,
            default: ''
        },
        msjBtnCerrar:{
            type: String,
            default: 'Cerrar'
        },
        msjBtnContinuar:{
            type: String,
            default: 'Continuar'
        },
        visibleBtnCerrar:{
            type: Boolean,
            default: false
        },
        visibleBtnContinuar:{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            mostrar: false,
            isForgotPasswordModal: false,
        };
    },
    methods:{
        cerraModal() {
            this.hide();
            this.$emit('cerrar')
        },
        hide() {
            this.mostrar = false;
        },
        show() {
            this.mostrar = true;
        },
    }
}
</script>
<style>
.modal__general{
    display: block;
    background: #00000091;
}
</style>

<template>
    <div>
        <main class="text-center p-3">
            <div>
                <img class="mb-4" :src="logo" alt="Login" width="72" height="57">
                <h1 class="mb-3 fw-normal">{{ name }}</h1>

                <div class="form-floating mb-3">
                    <input v-model="nickname" type="text" class="form-control" id="nickname" placeholder="">
                    <label for="nickname">nickname (Alias)</label>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="">
                    <label for="floatingPassword">Password</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" @click="$emit('login', nickname, password)">login</button>
            </div>
        </main>
    </div>
</template>
<!--div class="">
    <p class="position-fixed translate-middle bottom-0 start-50 mb-3 text-muted">© 2017–2021</p>
</div-->

<script>
export default {
    name: 'Login',
    props: {
        logo: {
            type: String,
            default: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg'
        },
        name: {
            type: String,
            default: 'frase'
        },
    },
    data() {
        return {
            nickname: null,
            password: null
        }
    },
}
</script>
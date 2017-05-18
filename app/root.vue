<style scoped>
    .container{
        padding: 20px 40px;
    }
</style>
<template>
    <div class="container">
        <h2>Hello, markit!</h2>
        <link-component></link-component>
        <router-view></router-view>
    </div>
</template>
<script>
    import linkComponent from './link_component.vue'
    export default{
        components:{
            linkComponent
        }
    }
</script>

<template>
    <div>
        <ul>
            <li v-for="item in link">
                <span v-if="item.children">
                    <router-link :to="item.link">{{item.name}}</router-link>
                    <ul>
                        <li v-for="i in item.children">
                            <router-link :to="i.link">{{i.name}}</router-link>
                        </li>
                    </ul>
                </span>
                <span v-else>
                    <router-link :to="item.link">{{item.name}}</router-link>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
    import link from './link.json'
    export default{
        data(){
            return {
                link: link
            }
        },
        components: {},
        mounted(){

        },
        computed: {},
        methods: {}
    }
</script>

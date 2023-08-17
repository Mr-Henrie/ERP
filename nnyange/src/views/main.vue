<template>
    <section class="app-container h-screen grid bg-slate-800 text-slate-200">
        <div class="aside h-full w-min bg-slate-900">
            <app_aside/>
        </div>
        <div class="main-content grid h-full">
            <div class="header h-full bg-slate-900">
                <app_header/>
            </div>
            <div class="main h-full">
                <app_main/>
            </div>
        </div>
    </section>
</template>

<script>
    import app_header from './includes/app_header.vue'
    import app_aside from './includes/app_aside.vue'
    import app_main from './includes/app_main.vue'

    export default {
        components: {
            app_header,
            app_aside,
            app_main
        },
        setup(){

        }
    }

</script>

<style>
    .app-container{
        grid-template-columns: min-content 1fr;
        grid-template-rows: 100%;
        grid-template-areas: "aside main-content";
    }
    .aside{
        grid-area: aside;
    }
    .main-content{
        grid-area: main-content;
        grid-template-columns: 100%;
        grid-template-rows: 10% 90%;
        grid-template-areas: "header" "main";
    }
    .header{
        grid-area: header;
    }
    .main{
        grid-area: main;
    }

</style>
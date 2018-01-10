<template>
    <div class="container">
        <div class="row1"></div>
        <div class="row2"></div>
        <div class="row3">
            <router-link to="/">
                <div class="middlecol1"><img id='logo' src="../assets/logo2.png"/></div>
            </router-link>
            <div class="middlecol2">Please wait while your input is being processed</div>

        </div>
        <div class="row4"></div>
        <div class="row5"></div>
    </div>
</template>

<script>
    import SystemInformation from './LandingPage/SystemInformation'

    export default {

        name: 'loading-page',
        components: {
            SystemInformation
        },
        methods: {
            open (link) {
                this.$electron.shell.openExternal(link)
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');

    body {
        font-family: 'Open Sans', sans-serif;
        background: #e2e6ef url('~@/assets/bg1.jpg') no-repeat fixed center;
        background-size: 100%
    }

    #logo{
        max-width: 60%;
        max-height: 250px;
        background-repeat: no-repeat;
        display: block;
        margin: auto;
    }

    .container {
        display: grid;
        grid-template-columns: 60px 80px auto 80px 60px;
        grid-template-rows: 25% 100px auto;
        align-content: center;
        justify-items: center;
        grid-gap: 10px;
        /*border: 3px black dashed;*/

    }

    .row1 {
        grid-column: 1;
        grid-row: 1;
        /*border: 3px black dashed;*/

    }

    .row2 {
        /*border: 3px black dashed;*/
        grid-column: 2;
    }

    .row3 {
        grid-column: 3;
        /*border: 3px black dashed;*/
        padding-left: 20px;
        padding-right: 20px;
    }

    .row4 {
        grid-column: 4;
        /*border: 3px black dashed;*/
    }

    .middlecol1 {
        grid-column: 3;
        grid-row: 1;
        justify-content: center;
    }

    .middlecol2 {
        margin-top: 200px;
        min-height: 200px;
        grid-column: 3;
        grid-row: 4/5;
        /*border: 3px dashed pink;*/
        text-align: center;
        vertical-align: middle;
        line-height: 200px;
        background: rgba(0, 0, 0, 0.3);
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 20px;
    }

    a:hover, a:visited, a:link, a:active {
        color: #FFF;
        text-decoration: none;
    }


</style>

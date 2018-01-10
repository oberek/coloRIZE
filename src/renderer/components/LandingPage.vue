<template>

    <div class="container">
        <div class="row1"> </div>
        <div class="row2"> </div>
        <div class="row3">
            <router-link to="/">
            <div class="middlecol1"><img id='logo' src="../assets/logo2.png"/></div>
            </router-link>

            <router-link to="/processing">
                <div class="middlecol2"></div>
            </router-link>

        </div>
        <div class="row4"></div>
        <div class="row5"></div>
    </div>
</template>

<script>
    import SystemInformation from './LandingPage/SystemInformation'


    export default {
        name: 'landing-page',
        components: {
            SystemInformation,
            vueDropzone: vue2Dropzone
        },
        methods: {
            open (link) {
                this.$electron.shell.openExternal(link)
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Titillium+Web');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Titillium Web', sans-serif;
        font-size: 19px;
        background-size: 100%;
        background: #e2e6ef url('~@/assets/bg1.jpg') no-repeat fixed center;

    }
    #logo{
        max-width: 50%;
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
    .row1{
        grid-column: 1;
        grid-row: 1;
        /*border: 3px black dashed;*/

    }
    .row2{
        /*border: 3px black dashed;*/
        grid-column: 2;
    }
    .row3{
        grid-column: 3;
        /*border: 3px black dashed;*/

    }
    .row4{
        grid-column: 4;
        /*border: 3px black dashed;*/
    }
    .middlecol1{
        grid-column: 3;
        grid-row: 1;
        justify-content: center;
    }
    .middlecol2{
        margin-top: 80px;
        min-height: 200px;
        grid-column: 3;
        grid-row: 4/5;
        /*border: 3px dashed pink;*/
        text-align: center;
        vertical-align: middle;
        line-height: 200px;
        background: rgba(0,0,0,0.3);
        border-radius: 20px;
    }
    a:hover, a:visited, a:link, a:active
    {
        color: #FFF;
        text-decoration: none;
    }

</style>

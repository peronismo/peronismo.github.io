<template>
    <section id="intro" class="hero is-fullheight" v-if="intro">


       <div id="containerIntro" class="container">




                <div id="ayuda" class="hero-body">
                    <article id="help" class="message is-warning is-fluid">
                        <header class="message-header">
                            <h4 class="has-text-weight-bold is-size-4" id="comoFunciona">¿Cómo funciona el test?</h4>
                            <button class="delete" aria-label="Quitar ayuda" @click="removeHelp"></button>
                        </header>
                        <div class="message-body content is-size-5" id="contenidoAyuda">
                            <ul class="is-size-5">
                            <li>Ocho enunciados que responden a cuatro preguntas según las distintas visiones que hay en el peronismo. Debés responder en cada uno de ellos qué tan de acuerdo o en desacuerdo estás </li>
                            <li>Si estás indeciso podés pasar al siguiente</li>
                            <li>No es obligatario seleccionar una opción en todos los casos, pero mientrás más opines, más certero será el resultado</li><br>
                            </ul>
                        </div>
                    </article>


                </div>
           <article id="mainTitleContainer">

               <div id="mainTitlte" class="title is-1 has-text-centered" style="font-family: Montserrat;font-weight: bolder; margin-top: 50px; margin-bottom:40px;color: white; text-shadow: black 1px 4px 2px !important;font-size: 60px">

                    Test de coyuntura peronista

               </div>
               <div id="mainSubtititle" class="has-text-centered subtitle is-3" style="color: white; font-family: Montserrat;text-shadow: black 1px 4px 2px !important; font-weight: bolder">

                   <span style="color:#209cee">  ¿Qué línea interna te identifica más? ¿Cuál menos?</span>
                   
               </div>
               
               <div class="escudo has-text-centered"><img src="resources/img/wip2.png" style="max-width: 280px"></div>
           </article>
        </div>

        <p id="abajo" class="has-text-right"><a href="#1"><i class="fa fa-arrow-circle-down fa-5x is-warning" aria-hidden="true"></i></a></p>

    </section>
</template>

<script>
    export default {
        name: "main-content",
        data: () => ({
            // reactive data property of the component.
            webpack: 'Powered by webpack!',
            intro: true
        }),
    }
</script>

<style scoped>
    /*
     * Some styles so that our first component
     * looks somewhat special
    */
    .main-content {
        margin: 0 auto;
        font-family: sans-serif;
        background-color: #ccf7e2;
        padding: 10px;
        border-radius: 5px;
        max-width: 500px;
    }
</style>


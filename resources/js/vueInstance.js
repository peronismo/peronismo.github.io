
var resultadoTemplate = {
    template:'<div class="container"><p class="title is-1"> Sos peronista línea {{recibeprimero}}. Además, podemos decirte que estás {{diferenciaAplicada}} {{recibesegundo}}. Por otro lado, estás bien lejitos del compañero {{recibeultimo}}.</p></div>',
    props:['recibeprimero', 'recibesegundo', 'recibeultimo','recibediferencia'],
    computed: {
          diferenciaAplicada: function () {
              if (this.recibediferencia===0){
                return this.diferencia='prácticamente en la misma sintonía que';
          }
              else if(this.recibediferencia===1){
                return this.diferencia='bastante cerca de la línea'

            }

            else if(this.recibediferencia===2){
              return this.diferencia='cerca de la línea'
              }
          },

    },


}

var app = new Vue({
    el: '#app',
    components:{'componente-resultado': resultadoTemplate},
    data: {

        julioBarbaro1: 0,
        miguelAngelPichetto1: 0,
        sergioMassa1: 0,
        martinInsaurralde1:0,
        guillermoMoreno1: 0,
        chinoNavarro1: 0,
        chivoRossi1: 0,
        cuervoLarroque1: 0,


        julioBarbaro2: 0,
        miguelAngelPichetto2: 0,
        sergioMassa2: 0,
        martinInsaurralde2:0,
        guillermoMoreno2: 0,
        chinoNavarro2: 0,
        chivoRossi2: 0,
        cuervoLarroque2: 0,


        julioBarbaro3: 0,
        miguelAngelPichetto3: 0,
        sergioMassa3: 0,
        martinInsaurralde3:0,
        guillermoMoreno3: 0,
        chinoNavarro3: 0,
        chivoRossi3: 0,
        cuervoLarroque3: 0,



        julioBarbaro4: 0,
        miguelAngelPichetto4: 0,
        sergioMassa4: 0,
        martinInsaurralde4:0,
        guillermoMoreno4: 0,
        chinoNavarro4: 0,
        chivoRossi4: 0,
        cuervoLarroque4: 0,



        julioBarbaro: 0,
        miguelAngelPichetto: 0,
        guillermoMoreno: 0,
        martinInsaurralde:0,
        sergioMassa: 0,
        chinoNavarro: 0,
        chivoRossi: 0,
        cuervoLarroque: 0,



        page1: true,
        page2: false,
        page3: false,
        page4: false,
        intro: true,

        musica:true,

        totales: [],

        primero: '',
        segundo: '',
        diferencia:'',
        ultimo: '',


    },
    methods: {
            sumar: function (event, quien, cuanto) {
            switch (quien) {
//Switch para saber saber a quien se le suman puntos solo si la variable estaba en cero
                case 11: { if (this.julioBarbaro1 == 0) { this.julioBarbaro1 += cuanto };break}
                case 12: { if (this.miguelAngelPichetto1 == 0) {this.miguelAngelPichetto1 += cuanto};break}
                case 13: { if (this.sergioMassa1 == 0) { this.sergioMassa1 += cuanto};break}
                case 14: { if (this.martinInsaurralde1 == 0) { this.martinInsaurralde1 += cuanto};break}
                case 15: { if (this.guillermoMoreno1 == 0) { this.guillermoMoreno1 += cuanto};break}
                case 16: { if (this.chinoNavarro1 == 0) { this.chinoNavarro1 += cuanto};break}
                case 17: { if (this.chivoRossi1 == 0) { this.chivoRossi1 += cuanto};break}
                case 18: { if (this.cuervoLarroque1 == 0) { this.cuervoLarroque1 += cuanto};break}

                case 21: { if (this.julioBarbaro2 == 0) { this.julioBarbaro2 += cuanto};break}
                case 22: { if (this.miguelAngelPichetto2 == 0) { this.miguelAngelPichetto2 += cuanto}; break}
                case 23: { if (this.sergioMassa2 == 0) { this.sergioMassa2 += cuanto};break}
                case 24: { if (this.martinInsaurralde2 == 0) { this.martinInsaurralde2+= cuanto};break}
                case 25: { if (this.guillermoMoreno2 == 0) {this.guillermoMoreno2 += cuanto};break}
                case 26: { if (this.chinoNavarro2 == 0) {this.chinoNavarro2 += cuanto};break}
                case 27: { if (this.chivoRossi2 == 0) {this.chivoRossi2 += cuanto};break}
                case 28: { if (this.cuervoLarroque2 == 0) {this.cuervoLarroque2 += cuanto};break}

                case 31: { if (this.julioBarbaro3 == 0) {this.julioBarbaro3 += cuanto};break}
                case 32: { if (this.miguelAngelPichetto3 == 0) {this.miguelAngelPichetto3 += cuanto};break}
                case 33: { if (this.sergioMassa3 == 0) {this.sergioMassa3 += cuanto};break}
                case 34: { if (this.martinInsaurralde3 == 0) {this.martinInsaurralde3 += cuanto};break}
                case 35: { if (this.guillermoMoreno3 == 0) {this.guillermoMoreno3 += cuanto};break}
                case 36: { if (this.chinoNavarro3 == 0) {this.chinoNavarro3 += cuanto};break}
                case 37: { if (this.chivoRossi3 == 0) {this.chivoRossi3 += cuanto};break}
                case 38: { if (this.cuervoLarroque3 == 0) {this.cuervoLarroque3 += cuanto};break}

                case 41: { if (this.julioBarbaro4 == 0) {this.julioBarbaro4 += cuanto};break}
                case 42: { if (this.miguelAngelPichetto4 == 0) {this.miguelAngelPichetto4 += cuanto};break}
                case 43: { if (this.sergioMassa4 == 0) {this.sergioMassa4 += cuanto};break}
                case 44: { if (this.martinInsaurralde4 == 0) {this.martinInsaurralde4 += cuanto};break}
                case 45: { if (this.guillermoMoreno4 == 0) {this.guillermoMoreno4 += cuanto};break}
                case 46: { if (this.chinoNavarro4 == 0) {this.chinoNavarro4 += cuanto};break}
                case 47: { if (this.chivoRossi4 == 0) {this.chivoRossi4 += cuanto};break}
                case 48: { if (this.cuervoLarroque4 == 0) { this.cuervoLarroque4 += cuanto};break}

            }


            var get = event.currentTarget;

            get.className += " " + "is-success is-selected";
            getNextSibling(get);
            function getNextSibling(get) {

                while (get = get.nextElementSibling) {
                    get.style.display = 'none'
                }
                ;
            }

            getPrevSibling(get);
            function getPrevSibling(get) {
                while (get = get.previousElementSibling) {
                    get.style.display = 'none'
                }
                ;
            }


        },

        restar: function (event, quien, cuanto) {
            switch (quien) {
                case 11: { if (this.julioBarbaro1 == 0) { this.julioBarbaro1 -= cuanto };break}
                case 12: { if (this.miguelAngelPichetto1 == 0) {this.miguelAngelPichetto1 -= cuanto};break}
                case 13: { if (this.sergioMassa1 == 0) { this.sergioMassa1 -= cuanto};break}
                case 14: { if (this.martinInsaurralde1 == 0) { this.martinInsaurralde1 -= cuanto};break}
                case 15: { if (this.guillermoMoreno1 == 0) { this.guillermoMoreno1 -= cuanto};break}
                case 16: { if (this.chinoNavarro1 == 0) { this.chinoNavarro1 -= cuanto};break}
                case 17: { if (this.chivoRossi1 == 0) { this.chivoRossi1 -= cuanto};break}
                case 18: { if (this.cuervoLarroque1 == 0) { this.cuervoLarroque1 -= cuanto};break}

                case 21: { if (this.julioBarbaro2 == 0) { this.julioBarbaro2 -= cuanto};break}
                case 22: { if (this.miguelAngelPichetto2 == 0) { this.miguelAngelPichetto2 -= cuanto}; break}
                case 23: { if (this.sergioMassa2 == 0) { this.sergioMassa2 -= cuanto};break}
                case 24: { if (this.martinInsaurralde2 == 0) {this.martinInsaurralde2 -= cuanto};break}
                case 25: { if (this.guillermoMoreno2 == 0) {this.guillermoMoreno2 -= cuanto};break}
                case 26: { if (this.chinoNavarro2 == 0) {this.chinoNavarro2 -= cuanto};break}
                case 27: { if (this.chivoRossi2 == 0) {this.chivoRossi2 -= cuanto};break}
                case 28: { if (this.cuervoLarroque2 == 0) {this.cuervoLarroque2 -= cuanto};break}

                case 31: { if (this.julioBarbaro3 == 0) {this.julioBarbaro3 -= cuanto};break}
                case 32: { if (this.miguelAngelPichetto3 == 0) {this.miguelAngelPichetto3 -= cuanto};break}
                case 33: { if (this.sergioMassa3 == 0) {this.sergioMassa3 -= cuanto};break}
                case 34: { if (this.martinInsaurralde4 == 0) {this.martinInsaurralde4 -= cuanto};break}
                case 35: { if (this.guillermoMoreno3 == 0) {this.guillermoMoreno3 -= cuanto};break}
                case 36: { if (this.chinoNavarro3 == 0) {this.chinoNavarro3 -= cuanto};break}
                case 37: { if (this.chivoRossi3 == 0) {this.chivoRossi3 -= cuanto};break}
                case 38: { if (this.cuervoLarroque3 == 0) {this.cuervoLarroque3 -= cuanto};break}

                case 41: { if (this.julioBarbaro4 == 0) {this.julioBarbaro4 -= cuanto};break}
                case 42: { if (this.miguelAngelPichetto4 == 0) {this.miguelAngelPichetto4 -= cuanto};break}
                case 43: { if (this.sergioMassa4 == 0) {this.sergioMassa4 -= cuanto};break}
                case 44: { if (this.martinInsaurralde4 == 0) {this.martinInsaurralde4 -= cuanto};break}
                case 45: { if (this.guillermoMoreno4 == 0) {this.guillermoMoreno4 -= cuanto};break}
                case 46: { if (this.chinoNavarro4 == 0) {this.chinoNavarro4 -= cuanto};break}
                case 47: { if (this.chivoRossi4 == 0) {this.chivoRossi4 -= cuanto};break}
                case 48: { if (this.cuervoLarroque4 == 0) { this.cuervoLarroque4 -= cuanto};break}
            }

            var get2 = event.currentTarget;
            get2.className += " " + "is-danger is-selected";

            getNextSibling(get2);
            function getNextSibling(get2) {

                while (get2 = get2.nextElementSibling) {
                    get2.style.display = 'none'
                }
                ;
            }

            getPrevSibling(get2);
            function getPrevSibling(get2) {
                while (get2 = get2.previousElementSibling) {
                    get2.style.display = 'none'
                }
                ;
            }


        },


        getPage2: function () {

           damePagina2();
           function damePagina2() {

               app.page2=true;


            }
            this.page1 = false;
            setTimeout(window.scrollTo(0, 1000),100);
        },


        getPage3: function () {
            damePagina3();

            function damePagina3() {

                app.page3=true;


            }
            this.page2 = false;
            setTimeout(window.scrollTo(0, 1000),100);
        },


        getPage4: function () {

            damePagina4();
            function damePagina4() {

                app.page4=true;


            }
            this.page3 = false;
            setTimeout(window.scrollTo(0, 1000),100);
        },

        removeHelp: function () {
            var child = document.getElementById('help');
            child.parentNode.remove();


        },

        undo: function (event, pagina) {
//Coleccion de botonones escondidos re-aparecen

            var buttonsInvisible = document.getElementsByClassName('button');
            for (var i = 0; i < buttonsInvisible.length; i++) {
                buttonsInvisible[i].style.display = "block";
            }

//Coleccion de bottones "de acuerdo" y devueltos a clase de "no seleccionados"
            var buttonsGreen = document.getElementsByClassName('button is-success is-selected');
            while (buttonsGreen.length > 0) {
                buttonsGreen[0].className = 'button';
//Coleccion de bottones "de acuerdo" y devueltos a clase de "no seleccionados"

            }
            var buttonsRed = document.getElementsByClassName('button is-danger is-selected');
            while (buttonsRed.length > 0) {
                buttonsRed[0].className = 'button';
            }

//Reseteando array de la variable correspondiente a la pagina

            if (pagina == 1) {

                this.julioBarbaro1 = 0;
                this.miguelAngelPichetto1 = 0;
                this.guillermoMoreno1 = 0;
                this.chinoNavarro1 = 0;
                this.chivoRossi1 = 0;
                this.cuervoLarroque1 = 0;
                this.sergioMassa1 = 0;
                this.martinInsaurralde1 = 0;
            }

            else if (pagina == 2) {
                this.julioBarbaro2 = 0;
                this.miguelAngelPichetto2 = 0;
                this.guillermoMoreno2 = 0;
                this.chinoNavarro2 = 0;
                this.chivoRossi2 = 0;
                this.cuervoLarroque2 = 0;
                this.sergioMassa2 = 0;
                this.martinInsaurralde2 = 0;

            }
            else if (pagina == 3) {
                this.julioBarbaro3 = 0;
                this.miguelAngelPichetto3 = 0;
                this.guillermoMoreno3 = 0;
                this.chinoNavarro3 = 0;
                this.chivoRossi3 = 0;
                this.cuervoLarroque3 = 0;
                this.sergioMassa3 = 0;
                this.martinInsaurralde3 = 0;

            }

            else if (pagina == 4) {
                this.julioBarbaro4 = 0;
                this.miguelAngelPichetto4 = 0;
                this.guillermoMoreno4 = 0;
                this.chinoNavarro4 = 0;
                this.chivoRossi4 = 0;
                this.cuervoLarroque4 = 0;
                this.sergioMassa4 = 0;
                this.martinInsaurralde4 = 0;
            }

        },
//Calculo final
        final: function () {
           this.intro=true;

            julioBarbaro = this.julioBarbaro1 + this.julioBarbaro2 + this.julioBarbaro3 + this.julioBarbaro4
            this.totales.push(julioBarbaro);

            miguelAntelPichetto = this.miguelAngelPichetto1 + this.miguelAngelPichetto2 + this.miguelAngelPichetto3 + this.miguelAngelPichetto4;
            this.totales.push(miguelAntelPichetto);

            sergioMassa = this.sergioMassa1 + this.sergioMassa2 + this.sergioMassa3 + this.sergioMassa4;
            this.totales.push(sergioMassa);

            martinInsaurralde = this.martinInsaurralde1 + this.martinInsaurralde2 + this.martinInsaurralde3 + this.martinInsaurralde4;
            this.totales.push(martinInsaurralde);

            guillermoMoreno = this.guillermoMoreno1 + this.guillermoMoreno2 + this.guillermoMoreno3 + this.guillermoMoreno4;
            this.totales.push(guillermoMoreno);

            chinoNavarro = this.chinoNavarro1 + this.chinoNavarro2 + this.chinoNavarro3 + this.chinoNavarro4;
            this.totales.push(chinoNavarro);

            chivoRossi = this.chivoRossi1 + this.chivoRossi2 + this.chivoRossi3 + this.chivoRossi4;
            this.totales.push(chivoRossi);

            cuervoLarroque = this.cuervoLarroque1 + this.cuervoLarroque2 + this.cuervoLarroque3 + this.cuervoLarroque4;
            this.totales.push(cuervoLarroque);



//Cerrar quiz div y sacar intro

            this.page4=false;
            this.intro=false;
//Calcular primero y segundo

            function findIndicesOfMax(inp, count) {
                var outp = new Array();
                for (var i = 0; i < inp.length; i++) {
                    outp.push(i);
                    if (outp.length > count) {
                        outp.sort(function (a, b) {
                            return inp[b] - inp[a];
                        });
                        outp.pop();
                    }
                }
                return outp;
            }


            var indices = findIndicesOfMax(this.totales, 2);

            this.primero = indices[0];
            this.segundo = indices[1];

  //Diferencia entre primero y segundo

    /*Si Son iguales*/
            if(this.totales[indices[0]] === this.totales[indices[1]]){this.diferencia=0}
    /*Si hay uno o dos de diferencia*/
            else if(this.totales[indices[0]] - this.totales[indices[1]]<= 2){this.diferencia=1}
    /*Si hay dos o mas de diferencia*/
            else if(this.totales[indices[0]] - this.totales[indices[1]] > 2){this.diferencia=2}

//Calcular el ultimo
            function indexOfMin(arr) {
                if (arr.length === 0) {
                    return -1;
                }

                var min = arr[0];
                var minIndex = 0;

                for (var i = 1; i < arr.length; i++) {
                    if (arr[i] < min) {
                        minIndex = i;
                        min = arr[i];
                    }
                }

                return minIndex;
            }

            this.ultimo = indexOfMin(this.totales);
        },
 //Reemplazar numero de posicion con el de dirigente
        replaceNames:function () {


            switch (app.primero) {
                case 0 : {
                    this.primero = 'Julio Bárbaro';
                    break
                }
                case 1 : {
                    this.primero = 'Miguel Ángel Pichetto';
                    break
                }
                case 2 : {
                    this.primero = 'Sergio Massa';
                    break
                }
                case 3 : {
                    this.primero = 'Martín Insaurralde';
                    break
                }
                case 4 : {
                    app.primero = 'Guillermo Moreno';
                    break
                }
                case 5 : {
                    app.primero = 'Fernando Chino Navarro';
                    break
                }
                case 6 : {
                    app.primero = 'Agustín Chivo Rossi';
                    break
                }
                case 7 : {
                    app.primero = 'Andrés Cuervo Larroque';
                    break
                }
            }

            switch (app.segundo) {
                case 0 : {
                    this.segundo = 'Julio Bárbaro';
                    break
                }
                case 1 : {
                    this.segundo = 'Miguel Ángel Pichetto';
                    break
                }
                case 2 : {
                    this.segundo = 'Sergio Massa';
                    break
                }
                case 3 : {
                    this.segundo = 'Martín Insaurralde';
                    break
                }
                case 4 : {
                    app.segundo = 'Guillermo Moreno';
                    break
                }
                case 5 : {
                    app.segundo = 'Fernando \"Chino\" Navarro';
                    break
                }
                case 6 : {
                    app.segundo = 'Agustín \"Chivo\" Rossi';
                    break
                }
                case 7 : {
                    app.segundo = 'Andrés \"Cuervo\" Larroque';
                    break
                }
            }

            switch (app.ultimo) {
                case 0 : {
                    this.ultimo = 'Julio Bárbaro';
                    break
                }
                case 1 : {
                    this.ultimo = 'Miguel Ángel Pichetto';
                    break
                }
                case 2 : {
                    this.ultimo = 'Sergio Massa';
                    break
                }
                case 3 : {
                    this.ultimo = 'Martín Insaurralde';
                    break
                }
                case 4 : {
                    app.ultimo = 'Guillermo Moreno';
                    break
                }
                case 5 : {
                    app.ultimo = 'Fernando \"Chino\" Navarro';
                    break
                }
                case 6 : {
                    app.ultimo = 'Agustín \"Chivo\" Rossi';
                    break
                }
                case 7 : {
                    app.ultimo = 'Andrés \"Cuervo\" Larroque';
                    break
                }
            }
        },

        cerrarModal : function (event) {
               var button = event.currentTarget;
               var parent= button.parentNode.parentNode.parentNode;
               parent.classList.remove('is-active')


            }

    },

});


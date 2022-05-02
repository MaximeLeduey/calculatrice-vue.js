let vueCalc = new Vue({

    // On choisie l'élément qu'on écoute
    el: "#app",

    data: {
        expression: 0,
    },

    methods: {
        appendToNumber: function(n) {
            if(this.expression == 0){
                this.expression = n;
            }
            else {
                this.expression = "" + this.expression + n;
            }
        },
        clear: function() {
            this.expression = 0;
        },
        percentage: function() {
            this.expression = this.expression / 100;
        }
    }
})
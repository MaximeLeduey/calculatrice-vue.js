let vueCalc = new Vue({

    // On choisie l'élément qu'on écoute
    el: "#app",

    data: {
        expression: 0,
        varTampon: '',
    },

    methods: {
        appendToNumber: function(n) {
            if(this.expression === 0){
                this.expression = n;
            }
            else {
                this.expression = "" + this.expression + n;
                this.varTampon = "" + n;
            }
        },
        appendOperator: function(o) {
            if(this.varTampon !== o) {
                this.expression = "" + this.expression + o;
                this.varTampon = o;
            }
        },
        clear: function() {
            this.expression = 0;
        },
        percentage: function() {
            this.expression = this.expression / 100;
        },
        equal: function() {
            if(this.varTampon == "." || this.varTampon == "+" || this.varTampon == "-" || this.varTampon == "*" || this.varTampon == "/") {
                let calcule = parsInt(this.expression);
                this.expression = calcule;
            }
        }
    }
})
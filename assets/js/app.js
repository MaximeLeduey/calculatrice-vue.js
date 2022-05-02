let vueCalc = new Vue({

    // On choisie l'élément qu'on écoute
    el: "#app",

    data: {
        // Variable qui stock l'expression entière
        expression: 0,
        // Variable pour stocker le dernier caractère ajouté
        varTampon: '',
    },

    methods: {
        // Fonction qui ajoute le chiffre n après l'expression
        appendToNumber: function(n) {
            // Si l'expression est égale à 0 alors on garde seulement le chiffre entré
            if(this.expression === 0){
                this.expression = n;
            }
            // Sinon on l'ajoute après l'expression
            else {
                this.expression = "" + this.expression + n;
                this.varTampon = "" + n;
            }
        },
        // Fonction qui vérifie si le dernier caractère entrée est un opérateur ou non
        appendOperator: function(o) {
            if(this.varTampon !== o) {
                this.expression = "" + this.expression + o;
                this.varTampon = o;
            }
        },
        // Fonction qui remet à 0 l'expression
        clear: function() {
            this.expression = 0;
        },
        // Fonction qui calcule le pourcentage de l'expression
        percentage: function() {
            this.expression = this.expression / 100;
        },
        // Fonction qui calcule toute l'expression
        equal: function() {
            // On vérifie si le dernier caractère entrée n'est pas un opérateur, si oui, on effectu le calcul
            if(this.varTampon !== "." || this.varTampon !== "+" || this.varTampon !== "-" || this.varTampon !== "*" || this.varTampon !== "/") {
                let calcul = eval(this.expression);
                this.expression = calcul;
            }
        }
    }
})
const randy = require("randy");

exports.script = () => {
    let najlepsiaCena = Number.MAX_VALUE;
    let najlepsiDenZakupenia = 0;

    for (let denZakupenia = 0; denZakupenia < 7; denZakupenia++) {
        let pocetReplikacii = 1000;
        let cenaSpolu = 0;

        for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {

            let cena = 500;
            let naplnenost = 27;
            for (let indexDna = 0; indexDna < denZakupenia; indexDna++) {
                if (naplnenost < 75) {
                    naplnenost += randy.uniform(5, 14);
                    if (naplnenost >= 75) {
                        cena += cena * 0.3
                    } else {
                        cena -= cena * randy.triangular(0.01, 0.11, 0.04);
                    }
                }
            }
            cenaSpolu += cena;
        }

        let priemernaCena = cenaSpolu / pocetReplikacii;
        if (priemernaCena < najlepsiaCena) {
            najlepsiaCena = priemernaCena;
            najlepsiDenZakupenia = denZakupenia;
        }
    }

    console.log(`Najlepsi den pre zakupenie letenky je ${najlepsiDenZakupenia}. den s cenou ${najlepsiaCena.toFixed(2)}`);
};
const randy = require("randy");

exports.script = () => {
    let pocetReplikacii = 100000;
    let najlepsiPocetVkacin = 0;
    let najlepsiaStrata = Number.MAX_VALUE;

    for (let pocetVakcin = 1000; pocetVakcin <= 8500; pocetVakcin++) {
        let strataSpolu = 0;
        for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
            let dopyt = randy.triangular(1000, 8500, 4000);
            let strata;
            if (dopyt > pocetVakcin) {
                strata = (dopyt - pocetVakcin) * 150;
            } else {
                strata = (pocetVakcin - dopyt) * 50;
            }
            strataSpolu += strata;
        }
        let priemernaStrata = strataSpolu / pocetReplikacii;
        if (priemernaStrata < najlepsiaStrata) {
            najlepsiaStrata = priemernaStrata;
            najlepsiPocetVkacin = pocetVakcin;
        }
    }

    console.log(`Najlepsi pocet vakcin je ${najlepsiPocetVkacin} so stratou ${Math.round(najlepsiaStrata)}€`);
};
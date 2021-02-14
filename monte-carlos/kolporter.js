const randy = require("randy");

exports.script = () => {
    let pocetReplikacii = 1000000;
    let nakupnaCena = 15; // centy
    let najlepsiZisk = 0;
    let najlepsiPocetNovin = 0;

    for (let pocetNovin = 10; pocetNovin < 200; pocetNovin += 10) {
        let ziskSpolu = 0;
        for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
            let zisk = -(pocetNovin * nakupnaCena);
            let cas = 9 * 60;
            let predajnaCena = randy.triangular(25, 95, 60);
            let dlzkaDennejDoby = randy.uniform(250, 420);
            let pocetPredanychNovin = dlzkaDennejDoby / 2.7 + 1;
            if (pocetPredanychNovin > pocetNovin) {
                pocetPredanychNovin = pocetNovin;
            }
            zisk += pocetPredanychNovin * predajnaCena;
            zisk += (pocetNovin - pocetPredanychNovin) * (nakupnaCena * 0.65);
            ziskSpolu += zisk;
        }
        let priemernyZisk = ziskSpolu / pocetReplikacii;
        if (najlepsiZisk < priemernyZisk) {
            najlepsiZisk = priemernyZisk;
            najlepsiPocetNovin = pocetNovin;
        }
    }

    console.log(`Najlepsi pocet balikov je ${najlepsiPocetNovin / 10} so ziskom ${najlepsiZisk.toFixed(2)}€`);
};
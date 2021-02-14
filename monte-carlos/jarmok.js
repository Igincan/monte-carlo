const randy = require("randy");

exports.script = () => {

    let beh = (parametreTypu) => {
        let pocetReplikacii = 1000000;
        let ziskSpolu = 0;
        for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
            let zisk = 0;
            for (let indexVyrobku = 0; indexVyrobku < parametreTypu.pocetKusov; indexVyrobku++) {
                zisk -= parametreTypu.nakladyGen();
            }
            let dopyt = parametreTypu.dopytGen();
            let pocetPredanych = 0;
            if (dopyt > parametreTypu.pocetKusov) {
                pocetPredanych = parametreTypu.pocetKusov;
            } else {
                pocetPredanych = dopyt;
            }
            zisk += pocetPredanych * parametreTypu.cena;
            ziskSpolu += zisk;
        }
        let priemernyZisk = ziskSpolu / pocetReplikacii;
        return priemernyZisk;
    };
    let ziskA = beh({
        pocetKusov: 70,
        nakladyGen: () => randy.triangular(100, 250, 175),
        dopytGen: () => randy.randInt(40, 80),
        cena: 300
    });
    let ziskB = beh({
        pocetKusov: 90,
        nakladyGen: () => randy.triangular(70, 170, 120),
        dopytGen: () => randy.randInt(66, 155),
        cena: 200
    });
    console.log(`Zisk A: ${(ziskA / 100).toFixed(2)}`);
    console.log(`Zisk B: ${(ziskB / 100).toFixed(2)}`);
    console.log(`Typ ${ziskA > ziskB ? "A" : "B"} je lepsi.`);
};

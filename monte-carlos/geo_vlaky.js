const random = require("random");
const randy = require("randy");

exports.script = () => {
    let pocetVlakovGen = random.poisson(26);
    let replikacie = 1000;

    let uspesne = 0;
    for (let i = 0; i < replikacie; i++) {
        usetrenaPokuta = 0;
        for (let den = 1; den <= 10 * 365; den++) {
            let pocetVlakov = pocetVlakovGen();
            let pocetVagonov = 0;
            let pocetVyklopenychVagonov2 = 0;
            let pocetVyklopenychVagonov3 = 0;
            for (let vlak = 1; vlak <= pocetVlakov; vlak++) {
                pocetVagonov += randy.triangular(3, 12, 6);
            }
            for (let vyklapac = 0; vyklapac < 3; vyklapac++) {
                for (let smena = 1; smena <= 2; smena++) {
                    let vyklopene = randy.triangular(20, 35, 23);
                    if (vyklapac === 2) {
                        pocetVyklopenychVagonov3 += vyklopene;
                    } else {
                        pocetVyklopenychVagonov2 += vyklopene;
                        pocetVyklopenychVagonov3 += vyklopene;
                    }
                }
            }
            if (pocetVyklopenychVagonov2 < pocetVagonov) {
                if (pocetVyklopenychVagonov3 >= pocetVagonov) {
                    usetrenaPokuta += 2000;
                }
            }
        }
        if (usetrenaPokuta >= 1800000) {
            uspesne++;
        }
    }
    console.log("pravdepodobnost ze sa nam vrati investicia za 10 rokov je: " + uspesne / replikacie);
};

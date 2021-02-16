// skúška 16. 2. 2021

// správca má 2 výklopníky na vozne a rozmýšľa že investuje do tretieho ktorý stojí 1 800 000€.
// počet vlakov ktoré prídu za jeden deň je poisson(26) a počet vozňov v každom vlaku je TRIA(a,b,c).
// Za jednu smenu, ktorá trvá 8 hodín dokáže jeden výklopník vyklopiť TRIA(d,e,f). Správca sa zaviazal
// že vyklopí všetky vozne čo prídu v daný deň, za 16 hodín. Ak to nestihne tak za daný deň zarobí o 2000€ menej.
// Správca má so zákazníkom paušálnu zmluvu s fixným zárobkom. Pomocou metódy monte carlo zistite
// pravdepododobnosť že sa správcovi investícia vráti počas 10 rokov.

const random = require("random");
const randy = require("randy");

exports.script = () => {
    let pocetVlakovGen = random.poisson(26);

    let pocetReplikacii = 1000;
    let poceUspesnychReplikacii = 0;

    for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
        let zisk3Vyklopniky = -1800000;
        let zisk2Vyklopniky = 0;

        for (let indexDna = 0; indexDna < 365 * 10; indexDna++) {
            let pocetVlakov = pocetVlakovGen();
            let pocetVoznov = 0;
            for (let indexVlaku = 0; indexVlaku < pocetVlakov; indexVlaku++) {
                pocetVoznov += randy.triangular(3, 12, 6);
            }
            let pocetVoznov3Vyklopniky = pocetVoznov;
            let pocetVoznov2Vyklopniky = pocetVoznov;

            for (let indexVyklopnika = 0; indexVyklopnika < 3; indexVyklopnika++) {
                for (let indexSmeny = 0; indexSmeny < 2; indexSmeny++) {
                    pocetVoznov3Vyklopniky -= randy.triangular(20, 35, 23);
                }
            }
            for (let indexVyklopnika = 0; indexVyklopnika < 2; indexVyklopnika++) {
                for (let indexSmeny = 0; indexSmeny < 2; indexSmeny++) {
                    pocetVoznov2Vyklopniky -= randy.triangular(20, 35, 23);
                }
            }
            if (pocetVoznov3Vyklopniky > 0) {
                zisk3Vyklopniky -= 2000;
            }
            if (pocetVoznov2Vyklopniky > 0) {
                zisk2Vyklopniky -= 2000;
            }
        }
        if (zisk3Vyklopniky > zisk2Vyklopniky) {
            poceUspesnychReplikacii++;
        }
    }
    let podielUspesnychReplikacii = poceUspesnychReplikacii / pocetReplikacii;
    console.log(`Pravdepodobnost navratu investicie je ${(podielUspesnychReplikacii * 100).toFixed(2)}%.`);
};
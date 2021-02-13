const random = require("random");

exports.script = () => {
    let CPUGen = random.bernoulli(0.05);
    let RAMGen = random.bernoulli(0.01);
    let pocetReplikacii = 10000;
    let pocetPresiahnutychReplikacii = 0;

    for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
        let pokuta = 0;
        for (let indexPalety = 0; indexPalety < 10; indexPalety++) {
            let pocetChybnychSad = 0;
            for (let indexSady = 0; indexSady < 200; indexSady++) {
                let pocetChybnych = 0;
                pocetChybnych += CPUGen();
                pocetChybnych += RAMGen();
                pocetChybnych += RAMGen();
                if (pocetChybnych > 0) {
                    pocetChybnychSad++;
                }
            }
            // console.log(`Počet chybných sad na palete ${indexPalety} je ${pocetChybnychSad}.`);
            if (pocetChybnychSad > 15) {
                pokuta += 5000;
            }
        }
        // console.log(`Pokuta v replikácii ${indexReplikacie} je ${pokuta}.`);
        if (pokuta > 15000) {
            pocetPresiahnutychReplikacii++;
        }
    }

    console.log(`Pravdepodobnosť, že pokuta presiahne 15 000€ je ${pocetPresiahnutychReplikacii / pocetReplikacii * 100}%.`);
};
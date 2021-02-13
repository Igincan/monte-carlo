const random = require("random");

exports.script = () => {
    let pocetReplikacii = 10000;
            
    for (let pocetZamestnancov = 50; pocetZamestnancov < 100; pocetZamestnancov++) {
        let rand = random.poisson(pocetZamestnancov / 10);
        let pocetUspesnychReplikacii = 0;
        for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
            let pocetUspesnychDni = 0;
            for (indexDna = 0; indexDna < 365; indexDna++) {
                let pocetZdravychZamestnancov = pocetZamestnancov - rand();
                if (pocetZdravychZamestnancov >= 50) {
                    pocetUspesnychDni++;
                }
            }
            if (pocetUspesnychDni / 365 >= 0.9) {
                pocetUspesnychReplikacii++;
            }
        }
        if (pocetUspesnychReplikacii / pocetReplikacii >= 0.95) {
            console.log(`Celkovy pocet zamestnancov bude ${pocetZamestnancov}.`);
            break;
        }
    }
};

const randy = require("randy");

exports.script = () => {
    let pocetKombajnov = 0;
    while (true) {
        pocetKombajnov++
        let pocetReplikacii = 1000;
        let pocetUspesnychReplikacii = 0;
        for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
            let celkovaRozloha = 300;
            let zozataRozloha = 0;
            for (let indexKombajnu = 0; indexKombajnu < pocetKombajnov; indexKombajnu++) {
                for (let indexHodiny = 0; indexHodiny < 20; indexHodiny++) {
                    zozataRozloha += randy.triangular(1, 3.5, 3);
                }
            }
            if (zozataRozloha >= celkovaRozloha) {
                pocetUspesnychReplikacii++;
            }
        }
        let podielUspesnychReplikacii = pocetUspesnychReplikacii / pocetReplikacii;
        if (podielUspesnychReplikacii > 0.9) {
            break;
        }
    }
    console.log(`Pocet kombajnov potrebnych na zozatie je ${pocetKombajnov}`);
};
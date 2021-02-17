const randy = require("randy");

exports.script = () => {
    let pocetKosikov = 0;

    while (true) {
        pocetKosikov += 6;

        let pocetUspesnychReplikacii = 0;
        let pocetReplikacii = 1000;

        for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
            let kosikyVydrzia = 0; // pocet uderov
            let zapasySpolu = 0; // pocet uderov

            for (let indexKosiku = 0; indexKosiku < pocetKosikov; indexKosiku++) {
                kosikyVydrzia += randy.triangular(100, 200, 120);
            }

            for (let indexZapasu = 0; indexZapasu < 80; indexZapasu++) {
                zapasySpolu += randy.triangular(400, 1000, 500);
            }

            if (kosikyVydrzia >= zapasySpolu) {
                pocetUspesnychReplikacii++;
            }
        }

        let podielUspesnychReplikacii = pocetUspesnychReplikacii / pocetReplikacii;
        if (podielUspesnychReplikacii > 0.99) {
            break;
        }
    }

    console.log(`Ma kupit ${pocetKosikov / 6} kosikov.`);
};

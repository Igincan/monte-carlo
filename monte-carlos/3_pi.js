const randy = require("randy");

exports.script = () => {
    
    let pocetReplikacii = 50;
    let pocetBodovSpolu = 0;
    
    for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
        let pocetBodov = 0;
        let pocetTrafenychBodov = 0;
        let odhadPI = 0;
    
        let kruh = {
            stredX: 0.5,
            stredY: 0.5,
            r: 0.5
        };

        while (Math.abs(Math.PI - odhadPI) >= 10 ** -6) {
            pocetBodov++;
    
            let x = randy.uniform(0, 1);
            let y = randy.uniform(0, 1);
            if ((x - kruh.stredX) ** 2 + (y - kruh.stredY) ** 2 <= kruh.r ** 2) {
                pocetTrafenychBodov++;
            }
            let podielTrafenychBodov = pocetTrafenychBodov / pocetBodov;
            odhadPI = podielTrafenychBodov / kruh.r ** 2;
        }
        pocetBodovSpolu += pocetBodov;
    }

    let priemernyPocetBodov = pocetBodovSpolu / pocetReplikacii;

    console.log(`Bolo potrebne umiestnit ${priemernyPocetBodov.toFixed(0)} bodov pre presnost 10^(-6) zistenia PI.`);

};
const randy = require("randy");

exports.script = () => {
    let ulohy = {
        1: () => {
            let pocetReplikacii = 100000;
            let vzdialenostSpolu = 0;
        
            for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
                let poloha = 0;
                for (let indexKroku = 0; indexKroku < 1000; indexKroku++) {
                    if (randy.uniform(0, 1) < 0.5) {
                        poloha++;
                    } else {
                        poloha--;
                    }
                }
                let vzdialenost = Math.abs(poloha);
                vzdialenostSpolu += vzdialenost;
            }
        
            let priemernaVzdialenost = vzdialenostSpolu / pocetReplikacii;
        
            console.log(`Namornik je po 1000 krokoch priemerne vo vzdialenosti ${priemernaVzdialenost.toFixed(2)}.`);
        },
        2: () => {
            let pocetReplikacii = 100000;
            let vzdialenostSpolu = 0;
        
            for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
                let poloha = { x: 0, y: 0 };
                for (let indexKroku = 0; indexKroku < 1000; indexKroku++) {
                    switch (randy.randInt(0, 4)) {
                        case 0:
                            poloha.x++;
                            break;
                        case 1:
                            poloha.x--;
                            break;
                        case 2:
                            poloha.y++;
                            break;
                        case 3:
                            poloha.y--;
                            break;
                    }
                }
                let vzdialenost = Math.abs(poloha.x) + Math.abs(poloha.y);
                vzdialenostSpolu += vzdialenost;
            }
        
            let priemernaVzdialenost = vzdialenostSpolu / pocetReplikacii;
        
            console.log(`Namornik je po 1000 krokoch priemerne vo vzdialenosti ${priemernaVzdialenost.toFixed(2)}.`);
        },
        3: () => {
            let pocetReplikacii = 100000;
            let vzdialenostSpolu = 0;
        
            for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
                let poloha = { x: 0, y: 0, z: 0 };
                for (let indexKroku = 0; indexKroku < 1000; indexKroku++) {
                    switch (randy.randInt(0, 6)) {
                        case 0:
                            poloha.x++;
                            break;
                        case 1:
                            poloha.x--;
                            break;
                        case 2:
                            poloha.y++;
                            break;
                        case 3:
                            poloha.y--;
                            break;
                        case 4:
                            poloha.z++;
                            break;
                        case 5:
                            poloha.z--;
                            break;
                    }
                }
                let vzdialenost = Math.abs(poloha.x) + Math.abs(poloha.y) + Math.abs(poloha.z);
                vzdialenostSpolu += vzdialenost;
            }
        
            let priemernaVzdialenost = vzdialenostSpolu / pocetReplikacii;
        
            console.log(`Namornik je po 1000 krokoch priemerne vo vzdialenosti ${priemernaVzdialenost.toFixed(2)}.`);
        }
    };

    if (process.argv.length < 4) {
        console.log("Usage:");
        console.log("   node index.js opity-namornik [1-3]");
        process.exit(3);
    }

    if (ulohy[process.argv[3]]) {
        ulohy[process.argv[3]]();
    }
};
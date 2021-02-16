const randy = require("randy");

exports.script = () => {

    let beh = (odpovedalaSpravneGen, nazov) => {
        let pocetReplikacii = 10000000;
        let dveVestice = {
            pocetSplnajucichReplikacii: 0,
            pocetUspesnychReplikacii: 0,
            podielUspesnychReplikacii: 0
        };
        let triVestice = {
            pocetSplnajucichReplikacii: 0,
            pocetUspesnychReplikacii: 0,
            podielUspesnychReplikacii: 0
        };
    
        for (let indexReplikacie = 0; indexReplikacie < pocetReplikacii; indexReplikacie++) {
            let spravnaOdpoved = randy.uniform(0, 1) < 0.5 ? true : false;
            let vestice = [];
            for (let indexVestice = 0; indexVestice < 3; indexVestice++) {
                let odpovedalaSpravne = odpovedalaSpravneGen();
                vestice.push({
                    odpovedalaAno: odpovedalaSpravne ? spravnaOdpoved : !spravnaOdpoved,
                    odpovedalaSpravne: odpovedalaSpravne
                });
            }
            if ((vestice[0].odpovedalaAno && vestice[1].odpovedalaAno) ||
                (!vestice[0].odpovedalaAno && !vestice[1].odpovedalaAno)) {
                dveVestice.pocetSplnajucichReplikacii++;
                if (vestice[0].odpovedalaSpravne && vestice[1].odpovedalaSpravne) {
                    dveVestice.pocetUspesnychReplikacii++;
                }
            }
            if ((vestice[0].odpovedalaAno && vestice[1].odpovedalaAno && vestice[2].odpovedalaAno) ||
                (!vestice[0].odpovedalaAno && !vestice[1].odpovedalaAno && !vestice[2].odpovedalaAno)) {
                triVestice.pocetSplnajucichReplikacii++;
                if (vestice[0].odpovedalaSpravne && vestice[1].odpovedalaSpravne && vestice[2].odpovedalaSpravne) {
                    triVestice.pocetUspesnychReplikacii++;
                }
            }
        }
    
        dveVestice.podielUspesnychReplikacii = dveVestice.pocetUspesnychReplikacii / dveVestice.pocetSplnajucichReplikacii;
        triVestice.podielUspesnychReplikacii = triVestice.pocetUspesnychReplikacii / triVestice.pocetSplnajucichReplikacii;
    
        console.log(`
            ${nazov}

            Ak prva a druha vestica odpovedali rovnako, tak pravdepodobnost
            ze maju pravdu je ${(dveVestice.podielUspesnychReplikacii * 100).toFixed(2)}%.
    
            Ak vsetky tri vestice odpovedali rovnako, tak pravdepodobnost
            ze maju pravdu je ${(triVestice.podielUspesnychReplikacii * 100).toFixed(2)}%.
            
        `);
    };

    beh(() => randy.uniform(0, 1) < 0.8, "Rovnomerne rozdelenie");
    beh(() => randy.triangular(0.3, 0.8, 1) < 0.8, "Trojuholnikove rozdelenie");

};
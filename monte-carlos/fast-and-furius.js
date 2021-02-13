const randy = require("randy");

exports.script = () => {
    let pocetPretekov = 1000000;
    let pocetUspesnychPretekov = 0;

    for (let indexPreteku = 0; indexPreteku < pocetPretekov; indexPreteku++) {
        let pretekari = [];
        for (let indexPretekara = 0; indexPretekara < 5; indexPretekara++) {
            pretekari.push({
                typ: "Fast",
                cas: randy.triangular(40, 75, 50)
            });
        }
        for (let indexPretekara = 0; indexPretekara < 5; indexPretekara++) {
            pretekari.push({
                typ: "Furius",
                cas: randy.triangular(35, 80, 52)
            });
        }
        pretekari.sort((a, b) => a.cas - b.cas);
        if (pretekari[0].typ == "Fast" && pretekari[1].typ == "Fast") {
            pocetUspesnychPretekov++;
        }
    }

    console.log(`Pravdepodonosť, že sa na peteku umiestna na prvých dvoch miestach autá typu "Fast" je ${pocetUspesnychPretekov / pocetPretekov * 100}%.`);
};
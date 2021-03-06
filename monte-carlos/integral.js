exports.script = () => {
    
    let findMaximum = (integral) => {
        let max = 0;
        let step = (integral.b - integral.a) / 2048;
        for (let x = integral.a; x <= integral.b; x += step) {
            let y = integral.f(x);
            if (y > max) {
                max = y;
            }
        }
        return max;
    };

    let integral = {
        a: 0,
        b: Math.PI,
        f: (x) => Math.sin(x)
    };

    let height = findMaximum(integral) * (33 / 32); // bigger value for sure. if findMaximum didn't find real maximum
    
    let numberOfSamples = 10000000;
    let numberOfSuccessfulSamples = 0;

    for (let index = 0; index < numberOfSamples; index++) {
        let x = Math.random() * (integral.b - integral.a) + integral.a;
        let y = Math.random() * height;
        if (y <= integral.f(x)) {
            numberOfSuccessfulSamples++;
        }
    }

    let result = (numberOfSuccessfulSamples / numberOfSamples) * ((integral.b - integral.a) * height);

    console.log(`Integral estimate is ${result}`);

};

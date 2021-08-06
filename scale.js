const baseFreq = 26; // 26 / 40 / 30

const RatioArray = [
    1.0,
    1.0125,
    1.03125,
    1.05,
    1.06667,
    1.09091,
    1.1,
    1.11111,
    1.125,
    1.14286,
    1.16667,
    1.18519,
    1.2,
    1.22222,
    1.25,
    1.27273,
    1.28571,
    1.3125,
    1.33333,
    1.35,
    1.375,
    1.4,
    1.42857,
    1.45455,
    1.48148,
    1.5,
    1.52381,
    1.55556,
    1.57143,
    1.6,
    1.63636,
    1.66667,
    1.6875,
    1.71429,
    1.75,
    1.77778,
    1.8,
    1.81818,
    1.83333,
    1.875,
    1.90476,
    1.93939,
    1.9753,
];

const ScaleArray = [
    /////// octave 01 – 6
    RatioArray[0],
    RatioArray[3],
    RatioArray[8],
    RatioArray[11],
    RatioArray[15],
    RatioArray[38],

    /////// octave 02 – 6
    RatioArray[9],
    RatioArray[22],
    RatioArray[23],
    RatioArray[33],
    RatioArray[34],
    RatioArray[35],

    /////// octave 03 - 6
    RatioArray[26],
    RatioArray[28],
    RatioArray[29],
    RatioArray[36],
    RatioArray[37],
    RatioArray[40],

    /////// octave 04 – 6
    RatioArray[5],
    RatioArray[6],
    RatioArray[13],
    RatioArray[18],
    RatioArray[30],
    RatioArray[31],
];

const Octave = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8]; // Scale C

const ScaleArrayFinal = [];

for (let l = 0; l < 24; l++) {
    ScaleArrayFinal[l] = baseFreq * Octave[l] * ScaleArray[l];
}

export {ScaleArrayFinal}
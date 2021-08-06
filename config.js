import {ScaleArrayFinal} from './scale.js'

const geoLoops = {

    // ----------- SOUNDTREK Soundwalk -------------------------

    // 01
    Echoraum: {
        geo: [48.187010450, 16.329256747],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Wummer01.m4a",
                volumeBreakpoints: {
                    inner: 0.07,
                    outer: 0.11,
                    maxVolume: -1
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Brzl_Light_01.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Light_02.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Light_03.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Light_04.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Light_05.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Light_06.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Light_07.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Light_08.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Light_09.m4a", 1],
                ],
                pauses: [[2, 0.5], [3.1, 1], [6.2, 1], [9.4, 0.5]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.017,
                    outer: 0.02,
                    maxVolume: -6
                }
            },    
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Brzl_Dark_01.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_02.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_03.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_04.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_05.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_06.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_07.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_08.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_09.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_10.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_11.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_12.m4a", 1],
                ],
                pauses: [[3, 1], [4.2, 1], [2.1, 1], [7, 2], [11, 3]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.017,
                    outer: 0.02,
                    maxVolume: -6
                }
            },
        ]
    },

    // 2
    Grimm01: { 
        geo: [48.187107658, 16.327952505],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/BrzzlJ_06.m4a",
                volumeBreakpoints: {
                    inner: 0.07,
                    outer: 0.11,
                    maxVolume: -1
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Brzl_Light_01.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Light_02.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Light_03.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Light_04.m4a", 1],
                ],
                pauses: [[5, 1], [6.2, 1], [9.4, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.017,
                    outer: 0.02,
                    maxVolume: -4
                }
            },    
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Brzl_Dark_08.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_09.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_10.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_11.m4a", 1],
                    ["sounds/Beta_m4a/samples/Brzl_Dark_12.m4a", 1],
                ],
                pauses: [[7, 1], [11, 1], [13, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.017,
                    outer: 0.02,
                    maxVolume: -6
                }
            },  
        ]
    },

    // 3
    Grimm02: { 
        geo: [48.188244051, 16.327760967],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/BrzzlJ_01.m4a",
                volumeBreakpoints: {
                    inner: 0.07,
                    outer: 0.11,
                    maxVolume: -1
                }
            },
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Ischl_Wasser.m4a",
                volumeBreakpoints: {
                    inner: 0.035,
                    outer: 0.07,
                    maxVolume: -6
                }
            },
        ]
    },

    // 4
    Braunhirschenpark: { 
        // geo: [48.188595787, 16.325956794],
        geo: [48.188699414703365, 16.326575869602138],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Bench_B.m4a",
                volumeBreakpoints: {
                    inner: 0.05,
                    outer: 0.09,
                    maxVolume: -6
                }
            },
        ]
    },

    // 5
    Laube: { 
        geo: [48.188344547, 16.325108879],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Krabbel01.m4a",
                volumeBreakpoints: {
                    inner: 0.015,
                    outer: 0.025,
                    maxVolume: -6
                }
            },
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Krabbel02.m4a",
                volumeBreakpoints: {
                    inner: 0.015,
                    outer: 0.025,
                    maxVolume: -6
                }
            },
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Krabbel03.m4a",
                volumeBreakpoints: {
                    inner: 0.015,
                    outer: 0.025,
                    maxVolume: -6
                }
            },
        ]
    },

    // 6
    Reichsapfelgasse: { 
        // geo: [48.187939420, 16.324981183],
        geo: [48.187810526271065, 16.325006536225644],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/CreakSeq_01.m4a",
                volumeBreakpoints: {
                    inner: 0.035,
                    outer: 0.06,
                    maxVolume: -6
                }
            },
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/CreakSeq_02.m4a",
                volumeBreakpoints: {
                    inner: 0.035,
                    outer: 0.06,
                    maxVolume: -6
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Creak_A.m4a", 1],
                    ["sounds/Beta_m4a/samples/Creak_B.m4a", 1],
                    ["sounds/Beta_m4a/samples/Creak_C.m4a", 0.5],
                    ["sounds/Beta_m4a/samples/Creak_D.m4a", 0.3],
                ],
                pauses: [[7, 1], [11, 1], [13, 1], [19, 1]],
                offset: 10,
                volumeBreakpoints: {
                    inner: 0.035,
                    outer: 0.06,
                    maxVolume: -6
                }
            }           
    ]
    },

    // 7
    Durchgang: { 
        geo: [48.187318467, 16.324726007],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/BaWummer02.m4a",
                volumeBreakpoints: {
                    inner: 0.03,
                    outer: 0.15,
                    maxVolume: -1
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/CoilDim_01_A.m4a", 1],
                    ["sounds/Beta_m4a/samples/CoilDim_01_B.m4a", 1],
                    ["sounds/Beta_m4a/samples/CoilDim_01_C.m4a", 1],
                    ["sounds/Beta_m4a/samples/CoilDim_01_D.m4a", 1],
                    ["sounds/Beta_m4a/samples/CoilDim_01_E.m4a", 1],
                    ["sounds/Beta_m4a/samples/CoilDim_01_F.m4a", 1],
                ],
                pauses: [[2, 1], [1.5, 1], [4, 1]],
                offset: 2,
                volumeBreakpoints: {
                    inner: 0.025,
                    outer: 0.075,
                    maxVolume: -6
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Pad_C.m4a", 1],
                    ["sounds/Beta_m4a/samples/Pad_D.m4a", 1],
                ],
                pauses: [[11, 1], [13.2, 1], [17.3, 1]],
                offset: 2,
                volumeBreakpoints: {
                    inner: 0.020,
                    outer: 0.05,
                    maxVolume: -6
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/CoilDimB_01.m4a", 1],
                    ["sounds/Beta_m4a/samples/CoilDimB_02.m4a", 1],
                    ["sounds/Beta_m4a/samples/CoilDimB_03.m4a", 1],
                ],
                pauses: [[5, 1], [7, 1], [9, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.015,
                    outer: 0.045,
                    maxVolume: -9
                }
            },
        ]
    },

    // 8
    Dystopistan: { 
        // geo: [48.187964939, 16.322493216],
        geo: [48.18793811885562, 16.322493051006234],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Gulmarsdrone_A_xf-Norm_01.m4a",
                volumeBreakpoints: {
                    inner: 0.06,
                    outer: 0.19,
                    maxVolume: -12
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Gulmars-HiA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Gulmars-HiB.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Gulmars-HiC.m4a", 1],
                ],
                pauses: [[0, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.045,
                    outer: 0.13,
                    maxVolume: -18
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Gulmars-LowA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Gulmars-LowB.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Gulmars-LowC.m4a", 1],
                ],
                pauses: [[0, 1]],
                offset: 1,
                volumeBreakpoints: {
                    inner: 0.045,
                    outer: 0.13,
                    maxVolume: -18
                }
            },            
        ]
    },

    // 9
    Backstein: { 
        // geo: [48.189385462, 16.322406379],
        geo: [48.18924984616822, 16.32275214238429],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Hold_A_f.m4a", 1],
                    ["sounds/Beta_m4a/samples/Hold_C_f.m4a", 1],
                ],
                pauses: [[1, 1], [3, 1], [5, 1]],
                offset: 1,
                volumeBreakpoints: {
                    inner: 0.08,
                    outer: 0.12,
                    maxVolume: -6
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Hold_B_f.m4a", 1],
                    ["sounds/Beta_m4a/samples/Hold_D_f.m4a", 1],
                ],
                pauses: [[1, 1], [3, 1], [5, 1]],
                offset: 7,
                volumeBreakpoints: {
                    inner: 0.07,
                    outer: 0.12,
                    maxVolume: -6
                }
            }                            
        ]
    },

    // 10
    Schnitzlerhaus: { 
        geo: [48.189998126, 16.323445244],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Schnitzlerhaus-BassA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Schnitzlerhaus-BassB.m4a", 1],
                ],
                pauses: [[0.00, 1], [3.75, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.05,
                    outer: 0.12,
                    maxVolume: -20
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Schnitzlerhaus-BlingA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Schnitzlerhaus-BlingB.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Schnitzlerhaus-BlingC.m4a", 1],
                ],
                pauses: [[0.00, 1], [3.75, 1]],
                offset: 3.75,
                volumeBreakpoints: {
                    inner: 0.05,
                    outer: 0.12,
                    maxVolume: -32
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Schnitzlerhaus-BlingFillA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Schnitzlerhaus-BlingFillB.m4a", 1],
                ],
                pauses: [[0.00, 1], [3.75, 1]],
                offset: 7.5,
                volumeBreakpoints: {
                    inner: 0.08,
                    outer: 0.12,
                    maxVolume: -32
                }
            },

        ]
    },

    //11
    Marihilf1: { 
        geo: [48.190916754, 16.322373472],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/BassL_Noid_A.m4a",
                volumeBreakpoints: {
                    inner: 0.07,
                    outer: 0.1,
                    maxVolume: -12
                }
            },
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/IMFreez5_A.m4a",
                volumeBreakpoints: {
                    inner: 0.03,
                    outer: 0.20,
                    maxVolume: -20
                }
            },
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Gulmar_Q1_02.m4a",
                volumeBreakpoints: {
                    inner: 0.07,
                    outer: 0.17,
                    maxVolume: -22
                }
            },                                      
        ]
    },

    // 12
    Bahnstrasse1: { 
        // geo: [48.191683725, 16.322761450],
        geo: [48.19193157443808, 16.323450997624956],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/EizoHold09_A.m4a",
                volumeBreakpoints: {
                    inner: 0.12,
                    outer: 0.14,
                    maxVolume: -6
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Bahnstrasse1-LowA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Bahnstrasse1-LowB.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Bahnstrasse1-LowC.m4a", 1],
                ],
                pauses: [[0, 1], [7.5, 1], [15.0, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.06,
                    outer: 0.12,
                    maxVolume: -24
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Bahnstrasse1+2-HiA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Bahnstrasse1+2-HiB.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Bahnstrasse1+2-HiC.m4a", 1],
                ],
                pauses: [[0, 1], [11.25, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.08,
                    outer: 0.12,
                    maxVolume: -30
                }
            }, 
        ]
    },

    // 13
    Bahnstrasse2: { 
        geo: [48.192481660, 16.325454606],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/EizoHold09_B.m4a",
                volumeBreakpoints: {
                    inner: 0.1,
                    outer: 0.14,
                    maxVolume: -6
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Bahnstrasse2-LowA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Bahnstrasse2-LowB.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Bahnstrasse2-LowC.m4a", 1],
                ],
                pauses: [[0, 1], [7.5, 1], [15.0, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.4,
                    outer: 0.14,
                    maxVolume: -24
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Bahnstrasse1+2-HiA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Bahnstrasse1+2-HiB.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Bahnstrasse1+2-HiC.m4a", 1],
                ],
                pauses: [[0, 1], [11.25, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.10,
                    outer: 0.14,
                    maxVolume: -30
                }
            }    
        ]
    },

    // 14
    RustensteigAufgang: { 
        geo: [48.193146596, 16.326599696],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Boat05_xf-Norm.m4a",
                volumeBreakpoints: {
                    inner: 0.015,
                    outer: 0.035,
                    maxVolume: -6
                }
            },    
        ]
    },

    // 15
    RustensteigBruecke: { 
        // geo: [48.194041617, 16.326012745],
        geo: [48.19384623871864, 16.32613804608917],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Boat01_xf-Norm.m4a",
                volumeBreakpoints: {
                    inner: 0.07,
                    outer: 0.1,
                    maxVolume: -6
                }
            },            
        ]
    },

    // 16
    Fadesse: { 
        geo: [48.195847404, 16.324594073],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/BassWumm_A.m4a", 1],
                    ["sounds/Beta_m4a/samples/BassWumm_B.m4a", 1],
                    ["sounds/Beta_m4a/samples/BassWumm_C.m4a", 1],
                    ["sounds/Beta_m4a/samples/BassWumm_D.m4a", 1],
                    ["sounds/Beta_m4a/samples/BassWumm_E.m4a", 1],
                    ["sounds/Beta_m4a/samples/BassWumm_F.m4a", 1],
                ],
                pauses: [[3.1, 1], [4.3, 1], [4.8, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.13,
                    outer: 0.17,
                    maxVolume: -6
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Pad_A.m4a", 1],
                    ["sounds/Beta_m4a/samples/Pad_B.m4a", 1],
                ],
                pauses: [[7.1, 1], [8.6, 1], [11.3, 1]],
                offset: 2,
                volumeBreakpoints: {
                    inner: 0.09,
                    outer: 0.13,
                    maxVolume: -6
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Pad_C.m4a", 1],
                    ["sounds/Beta_m4a/samples/Pad_D.m4a", 1],
                ],
                pauses: [[7.1, 1], [8.6, 1], [11.3, 1]],
                // pauses: [[11, 1], [13.2, 1], [17.3, 1]],
                offset: 15,
                volumeBreakpoints: {
                    inner: 0.09,
                    outer: 0.13,
                    maxVolume: -6
                }
            },
        ]
    },

    // 17
    Kirchplatz: { 
        geo: [48.197159505, 16.323842309],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Freez-12_A.m4a",
                volumeBreakpoints: {
                    inner: 0.03,
                    outer: 0.12,
                    maxVolume: -15
                }
            },                   
        ]
    },

    // 18
    Meisselmarkt: { 
        // geo: [48.197553784, 16.321630264],
        geo: [48.19757301026609, 16.32134098406846],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/BCN_02.m4a",
                volumeBreakpoints: {
                    inner: 0.08,
                    outer: 0.22,
                    maxVolume: -12
                }
            },
        ]
    },

    // 19
    Parkwelt1: { 
        // geo: [48.196862418, 16.319609904],
        geo: [48.19656835586727, 16.319555704224747],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Bench_Ceq.m4a",
                volumeBreakpoints: {
                    inner: 0.09,
                    outer: 0.14,
                    maxVolume: -6
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Parkwelt1-LowA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Parkwelt1-LowB.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Parkwelt1-LowC.m4a", 1],
                ],
                pauses: [[0.00, 1], [3.75, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.09,
                    outer: 0.12,
                    maxVolume: -28
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Parkwelt1-HiA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Parkwelt1-HiB.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Parkwelt1-HiC.m4a", 1],
                ],
                pauses: [[0.00, 1], [3.75, 1], [7.5, 1]],
                offset: 3.75,
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.11,
                    maxVolume: -34
                }
            },
        ]
    },

    // 19-20
    ZwischenPark: { 
        geo: [48.19546736482175, 16.319352671751705],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/ZwischenPark_A_s.m4a",
                volumeBreakpoints: {
                    inner: 0.07,
                    outer: 0.08,
                    maxVolume: -12
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Parkwelt-FillA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Parkwelt-FillB.m4a", 1],
                ],
                pauses: [[0.00, 1], [3.75, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.06,
                    outer: 0.12,
                    maxVolume: -28
                }
            },
        ]
    },    

    // 20
    Parkwelt2: { 
        // geo: [48.194351263, 16.319203987],
        geo: [48.194016928463405, 16.31944958902668],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Bench_Deq.m4a",
                volumeBreakpoints: {
                    inner: 0.07,
                    outer: 0.18,
                    maxVolume: -6
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Parkwelt2-LowA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Parkwelt2-LowB.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Parkwelt2-LowC.m4a", 1],
                ],
                pauses: [[0.00, 1], [4.21875, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.12,
                    outer: 0.18,
                    maxVolume: -28
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Z-Parkwelt2-HiA.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Parkwelt2-HiB.m4a", 1],
                    ["sounds/Beta_m4a/samples/Z-Parkwelt2-HiC.m4a", 1],
                ],
                pauses: [[0.00, 1], [4.21875, 1]],
                offset: 4.21875,
                volumeBreakpoints: {
                    inner: 0.08,
                    outer: 0.16,
                    maxVolume: -28
                }
            },
        ]
    },

    // 20-21 
    ZwischenKnoten: { 
        geo: [48.19294590736031, 16.318869239925817],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Okinawa_A_s.m4a",
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.12,
                    maxVolume: -18
                }
            },
        ]
    },


    // 21
    Verkehrsknoten: { 
        geo: [48.192440057, 16.316386950],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/GulmarQ1_03eq.m4a",
                volumeBreakpoints: {
                    inner: 0.08,
                    outer: 0.32,
                    maxVolume: -6
                }
            },
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/DroneInMyRoom_A.m4a",
                volumeBreakpoints: {
                    inner: 0.08,
                    outer: 0.32,
                    maxVolume: -6
                }
            },              
        ]
    },

    // 22
    Technischesmuseum: { 
        geo: [48.191402109, 16.318285817],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/GlitchyMagnetism.m4a",
                volumeBreakpoints: {
                    inner: 0.06,
                    outer: 0.09,
                    maxVolume: -12
                }
            },
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/SchuhR_L.m4a",
                volumeBreakpoints: {
                    inner: 0.06,
                    outer: 0.12,
                    maxVolume: -12
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/N_Pizzi_01.m4a", 1],
                    ["sounds/Beta_m4a/samples/N_Pizzi_02.m4a", 1],
                    ["sounds/Beta_m4a/samples/N_Pizzi_03.m4a", 1],
                    ["sounds/Beta_m4a/samples/N_Pizzi_04.m4a", 1],
                    ["sounds/Beta_m4a/samples/N_Pizzi_05.m4a", 1],
                    ["sounds/Beta_m4a/samples/N_Pizzi_06.m4a", 1],
                    ["sounds/Beta_m4a/samples/N_Pizzi_07.m4a", 1],
                    ["sounds/Beta_m4a/samples/N_Pizzi_08.m4a", 1],
                    ["sounds/Beta_m4a/samples/N_Pizzi_09.m4a", 1],
                ],
                pauses: [[2.3, 1], [1.7, 1], [3.2, 1]],
                offset: 3,
                volumeBreakpoints: {
                    outer: 0.07,
                    outer: 0.07,
                    maxVolume: -6
                }
            }
        ]
    },

    // 23
    ParkJaeger: { 
        geo: [48.190591090, 16.319748125],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/WindCic_A.m4a",
                volumeBreakpoints: {
                    inner: 0.015,
                    outer: 0.17,
                    maxVolume: -12
                }
            },              
        ]
    },

    // 24
    Mariahilf2: { 
        geo: [48.190165611, 16.320622150],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/Freez-540_A.m4a",
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.1,
                    maxVolume: -6
                }
            },
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/GrainyL_A.m4a",
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.1,
                    maxVolume: -12
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/GranPad_A.m4a", 1],
                    ["sounds/Beta_m4a/samples/GranPad_B.m4a", 1],
                    ["sounds/Beta_m4a/samples/GranPad_C.m4a", 1],
                ],
                pauses: [[5.3, 1], [7.1, 1], [11, 1]],
                offset: 3,
                volumeBreakpoints: {
                    outer: 0.04,
                    outer: 0.1,
                    maxVolume: -6
                }
            },                      
        ]
    },

    // 25
    ParkWelsbach: { 
        // geo: [48.188591830, 16.317684068], 
        geo: [48.189197406498565, 16.318514216695913], 
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/AnimalsOfNight_03_A.m4a",
                volumeBreakpoints: {
                    inner: 0.13,
                    outer: 0.25,
                    maxVolume: -6
                }
            },            
        ]
    },



    //***** EXTRA */

    // 25A
    Siebeneichen: { 
        geo: [48.18867466190223, 16.32146731378976],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/CreakSeq_01_B.m4a",
                volumeBreakpoints: {
                    inner: 0.035,
                    outer: 0.1,
                    maxVolume: -6
                }
            },
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/CreakSeq_02_B.m4a",
                volumeBreakpoints: {
                    inner: 0.035,
                    outer: 0.1,
                    maxVolume: -6
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/Beta_m4a/samples/Creak_A.m4a", 1],
                    ["sounds/Beta_m4a/samples/Creak_B.m4a", 1],
                    ["sounds/Beta_m4a/samples/Creak_C.m4a", 0.5],
                    ["sounds/Beta_m4a/samples/Creak_D.m4a", 0.3],
                ],
                pauses: [[7, 1], [11, 1], [13, 1], [19, 1]],
                offset: 10,
                volumeBreakpoints: {
                    inner: 0.035,
                    outer: 0.1,
                    maxVolume: -6
                }
            }     
        ]
    },

    //***** PUNKTE */
    
    // 1
    Rustenstegdurchgang: { 
        geo: [48.192898985, 16.326779666],
        loops: [
        ]
    },

    // 2
    Monolith: { 
        geo: [48.197257626, 16.324030425],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/PurrL.m4a",
                volumeBreakpoints: {
                    inner: 0.009,
                    outer: 0.015,
                    maxVolume: -24
                }
            },
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/PurrR.m4a",
                volumeBreakpoints: {
                    inner: 0.009,
                    outer: 0.015,
                    maxVolume: -24
                }
            },
        ]
    },

    // 3
    UbahnJohnstrasse: { 
        geo: [48.197540832, 16.321658144],
        loops: [
        ]
    },

    // 4
    WasserhausSchmelz: { 
        geo: [48.197811246, 16.319785187],
        loops: [
            {
                type: "seamless",
                file: "sounds/Beta_m4a/seamless/WaterWavy01.m4a",
                volumeBreakpoints: {
                    inner: 0.03,
                    outer: 0.035,
                    maxVolume: -6
                }
            },
        ]
    }    

    


    
}

export {geoLoops}
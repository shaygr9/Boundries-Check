stimuli_A = [

    {
        category_idx: 0,
        category_name: "bowling",
        color: "#ffffff",
    },
    {
        category_idx: 1,
        category_name: "balloon",
        color: "#ffffff",
    },
    {
        category_idx: 2,
        category_name: "surfing",
        color: "#ffffff"
    },
    {
        category_idx: 3,
        category_name: "drum",
        color: "#ffffff"
    },
    {
        category_idx: 4,
        category_name: "kayak",
        color: "#ffffff"
    },
    {
        category_idx: 5,
        category_name: "eating",
        color: "#ffffff"
    },
    {
        category_idx: 6,
        category_name: "violin",
        color: "#ffffff"
    },
    {
        category_idx: 7,
        category_name: "apple",
        color: "#ffffff"
    }
    ,
    {
        category_idx: 8,
        category_name: "scientist",
        color: "#ffffff"
    }
    ,
    {
        category_idx: 9,
        category_name: "birthday",
        color: "#ffffff"
    },
    {
        category_idx: 10,
        category_name: "barman",
        color: "#ffffff"
    },
    {
        category_idx: 11,
        category_name: "sleep",
        color: "#ffffff"
    },
    {
        category_idx: 12,
        category_name: "computer",
        color: "#ffffff"
    },
    {
        category_idx: 13,
        category_name: "football",
        color: "#ffffff"
    },
    {
        category_idx: 14,
        category_name: "snorkel",
        color: "#ffffff"
    },
    {
        category_idx: 15,
        category_name: "cooking",
        color: "#ffffff"
    },
    {
        category_idx: 16,
        category_name: "baby",
        color: "#ffffff"
    },
    {
        category_idx: 17,
        category_name: "driving",
        color: "#ffffff"
    }
];

stimuli_B = [
    {
        category_idx: 0,
        category_name: "hammer",
        color: "#ffffff"
    },
    {
        category_idx: 1,
        category_name: "basketball",
        color: "#ffffff",
    },
    {
        category_idx: 2,
        category_name: "camera",
        color: "#ffffff",
    },
    {
        category_idx: 3,
        category_name: "reading",
        color: "#ffffff",
    },
    {
        category_idx: 4,
        category_name: "board",
        color: "#ffffff",
    },
    {
        category_idx: 5,
        category_name: "horse",
        color: "#ffffff",
    },
    {
        category_idx: 6,
        category_name: "skateboard",
        color: "#ffffff",
    },
    {
        category_idx: 7,
        category_name: "painter",
        color: "#ffffff",
    }
    ,
    {
        category_idx: 8,
        category_name: "gardener",
        color: "#ffffff",
    }
    ,
    {
        category_idx: 9,
        category_name: "ballet",
        color: "#ffffff",
    },
    {
        category_idx: 10,
        category_name: "kite",
        color: "#ffffff",
    },
    {
        category_idx: 11,
        category_name: "beekeeper",
        color: "#ffffff",
    },
    {
        category_idx: 12,
        category_name: "hiking",
        color: "#ffffff",
    },
    {
        category_idx: 13,
        category_name: "golf",
        color: "#ffffff",
    },
    {
        category_idx: 14,
        category_name: "shopping",
        color: "#ffffff",
    },
    {
        category_idx: 15,
        category_name: "sew",
        color: "#ffffff",
    },
    {
        category_idx: 16,
        category_name: "soldier",
        color: "#ffffff",
    },
    {
        category_idx: 17,
        category_name: "bride",
        color: "#ffffff",
    }
];

qs_pairs = [ // acoording to the series array, starting with 0 to 15 (instead of 1 t0 16)
    [[1, 5], [5, 1]],
    [[6, 10], [10, 6]],
    [[11, 15], [15, 11]]
];


var S = 'S';
var W = 'W';
var B = 'B';

let SWB = [S, W, B]
let SBW = [S, B, W]
let WSB = [W, S, B]
let WBS = [W, B, S]
let BSW = [B, S, W]
let BWS = [B, W, S]


combination_versions = [
    [ //1
        SWB, SBW, WSB, WBS, BSW, BWS,
        SWB, SBW, WSB, WBS, BSW, BWS,
        SWB, SBW, WSB, WBS, BSW, BWS
    ],
    [ //2
        SBW, WSB, WBS, BSW, BWS, SWB,
        SBW, WSB, WBS, BSW, BWS, SWB,
        SBW, WSB, WBS, BSW, BWS, SWB
    ],
    [ //3
        WSB, WBS, BSW, BWS, SWB, SBW,
        WSB, WBS, BSW, BWS, SWB, SBW,
        WSB, WBS, BSW, BWS, SWB, SBW
    ],
    [ //4
        WBS, BSW, BWS, SWB, SBW, WSB,
        WBS, BSW, BWS, SWB, SBW, WSB,
        WBS, BSW, BWS, SWB, SBW, WSB
    ],
    [ //5
        BSW, BWS, SWB, SBW, WSB, WBS,
        BSW, BWS, SWB, SBW, WSB, WBS,
        BSW, BWS, SWB, SBW, WSB, WBS
    ],
    [ //6
        BWS, SWB, SBW, WSB, WBS, BSW,
        BWS, SWB, SBW, WSB, WBS, BSW,
        BWS, SWB, SBW, WSB, WBS, BSW

    ]
];


// var combinations = [ //todo: change this to jatos.studySessionData.subj_combinations - and that it to change it with the counter balance
//     [S, W, B], [W, S, B],
//     [S, B, W], [B, S, W],
//     [W, S, B], [B, W, S],
//     [W, B, S], [S, B, W],
//     [B, S, W], [W, S, B],
//     [B, W, S], [S, B, W]
// ];
// var combinations = [
//     [[surprise, within, between],[within, surprise, between]],
//     [[surprise, between, within],[between, surprise, within]],
//     [[within, surprise, between],[between, within, surprise]],
//     [[within, between, surprise],[surprise, between, within]],
//     [[between, surprise, within],[within, surprise, between]],
//     [[between, within, surprise],[surprise, between, within]]
// ];


var total_imgs = 16;
var change_idx_set = new Set([2, 7, 12]);

/* get stimulus in dictionary format, with necessary fields for view_stimuli */
function get_stimulus(category_type, category_idx, img_idx, surprise, stimulus_idx) {
    var stimulus = {"category_type": category_type, "stimulus_idx": stimulus_idx};
    if (category_type === "A") {
        if (surprise === 1) {
            stimulus.src = "Stimuli/" + stimuli_A[category_idx].category_name + "/sq_" + stimuli_A[category_idx].category_name + "_ST.jpg";
        } else if (surprise === 2) {
            stimulus.src = "Stimuli/" + stimuli_A[category_idx].category_name + "/sq_" + stimuli_A[category_idx].category_name + "_postST.jpg";

        } else {
            stimulus.src = "Stimuli/" + stimuli_A[category_idx].category_name + "/sq_" + stimuli_A[category_idx].category_name + "_" + (img_idx + 1) + ".jpg";
        }
        stimulus.color = stimuli_A[category_idx].color
        stimulus.category_name = stimuli_A[category_idx].category_name

    } else { // category_type == "B"
        stimulus.src = "Stimuli/" + stimuli_B[category_idx].category_name + "/sq_" + stimuli_B[category_idx].category_name + "_" + (img_idx + 1) + ".jpg";
        stimulus.color = stimuli_B[category_idx].color
        stimulus.category_name = stimuli_A[category_idx].category_name
    }
    return stimulus;

}

/* build series of stimuli with 2 categories  */
function build_series(order, A_idx, B_idx, ctr_B) { // ctr_B is 0 or 2: for cases of create the second half of series.
    var series = [];
    var ctr_A = 0; // always start with 0.
    // var ctr_B = 0
    var order_idx = 0;
    for (var i = 0; i < total_imgs; i++) {
        if (change_idx_set.has(i)) {
            if (order[order_idx] === S) {
                series.push(get_stimulus("A", A_idx, ctr_A, 1, i));//add surprise img
                series.push(get_stimulus("A", A_idx, ctr_A, 2, i + 1));//add surprise img
                i += 2;
            } else if (order[order_idx] === W) {
                series.push(get_stimulus("A", A_idx, ctr_A++, 0, i));//add regular img
                i++;
            } else if (order[order_idx] === B) {
                series.push(get_stimulus("B", B_idx, ctr_B++, 0, i));//add B block img * 2
                series.push(get_stimulus("B", B_idx, ctr_B++, 0, i + 1));
                i += 2;
            }
            order_idx++;
        }
        series.push(get_stimulus("A", A_idx, ctr_A++, false, i));

    }
    console.log(series)
    // alert()
    return series;
}

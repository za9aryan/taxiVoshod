const rx = "7.66094"
const ry = "7.66446"

export const rightDamage = {
    "fender_front": {
        cx: "550.056",
        cy: "99.6382",
        rx, ry
    },
    "fender_rear": {
        cx: "145.558",
        cy: "88.9079",
        rx, ry
    },
    "door_front": {
        cx: "398.369",
        cy: "136.428",
        rx, ry
    },
    "door_rear": {
        cx: "265.069",
        cy: "128.763",
        rx, ry
    },
    "glass_front": {
        cx: "390.708",
        cy: "44.4539",
        rx, ry
    },
    "glass_rear": {
        cx: "265.069",
        cy: "42.9211",
        rx, ry
    },
    "wheel_front": {
        cx: "568.442",
        cy: "179.349",
        rx, ry
    },
    "wheel_rear": {
        cx: "153.219",
        cy: "180.882",
        rx, ry
    }
}

export const leftDamage = {
    "fender_front": {
        rx, ry,
        transform: "matrix(-1 0 0 1 163.944 99.2106)"
    },
    "fender_rear": {
        rx, ry,
        transform: "matrix(-1 0 0 1 568.442 88.5264)"
    },
    "door_front": {
        rx, ry,
        transform: "matrix(-1 0 0 1 315.631 135.842)"
    },
    "door_rear": {
        rx, ry,
        transform: "matrix(-1 0 0 1 448.931 128.211)"
    },
    "glass_front": {
        rx, ry,
        transform: "matrix(-1 0 0 1 323.292 44.2633)"
    },
    "glass_rear": {
        rx, ry,
        transform: "matrix(-1 0 0 1 448.931 42.737)"
    },
    "wheel_front": {
        rx, ry,
        transform: "matrix(-1 0 0 1 145.558 178.579)"
    },
    "wheel_rear": {
        rx, ry,
        transform: "matrix(-1 0 0 1 560.781 180.105)"
    },
}

export const frontDamage = {
    "glass": {
        cx: "163.765",
        cy: "35.0974",
        rx, ry
    },
    "bumper": {
        cx: "162.235",
        cy: "196.851",
        rx, ry
    },
    "headlight_left": {
        cx: "62.7512",
        cy: "123.604",
        rx, ry
    },
    "headlight_right": {
        cx: "257.127",
        cy: "123.604",
        rx, ry
    },
    "bonnet": {
        cx: "162.235",
        cy: "96.1365",
        rx, ry
    }
}

export const rearDamage = {
    "glass": {
        cx: "163.765",
        cy: "35.0898",
        rx, ry
    },
    "bumper": {
        cx: "163.765",
        cy: "180.026",
        rx, ry
    },
    "headlight_left": {
        cx: "82.6479",
        cy: "100.692",
        rx, ry
    },
    "headlight_right": {
        cx: "246.413",
        cy: "100.692",
        rx, ry
    }
}
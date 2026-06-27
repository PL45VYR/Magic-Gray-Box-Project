ServerEvents.recipes(event => {
    // Blazing Crystal Recipe
    event.custom({
        "type": "powah:energizing",
        "energy": 120000,
        "ingredients": [
            {
                "item": "malum:blazing_quartz"
            }
        ],
        "result": {
            "count": 1,
            "id": "powah:crystal_blazing"
        }
    })

    // Niotic Crystal Recipe
    event.custom({
        "type": "powah:energizing",
        "energy": 300000,
        "ingredients": [
            {
                "item": "actuallyadditions:diamatine_crystal"
            }
        ],
        "result": {
            "count": 1,
            "id": "powah:crystal_niotic"
        }
    })

    // Spirited Crystal Recipe
    event.custom({
        "type": "powah:energizing",
        "energy": 1000000,
        "ingredients": [
            {
                "item": "actuallyadditions:emeradic_crystal"
            }
        ],
        "result": {
            "count": 1,
            "id": "powah:crystal_spirited"
        }
    })

    // Nitro Crystal Recipe
    event.custom({
        "type": "powah:energizing",
        "energy": 20000000,
        "ingredients": [
            {
                "item": "extendedcrafting:flux_star"
            },
            {
                "item": "actuallyadditions:restonia_crystal_block"
            },
            {
                "item": "actuallyadditions:restonia_crystal_block"
            },
            {
                "item": "powah:blazing_crystal_block"
            }
        ],
        "result": {
            "count": 4,
            "id": "powah:crystal_nitro"
        }
    })
})
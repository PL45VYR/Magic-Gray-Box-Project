ServerEvents.recipes(event => {

    // Energized Steel Recipe
    event.custom({
        "type": "powah:energizing",
        "energy": 10000,
        "ingredients": [
            {
                "tag": "c:ingots/steel"
            },
            {
                "tag": "c:ingots/bronze"
            }
        ],
        "result": {
            "count": 2,
            "id": "powah:steel_energized"
        }
    })

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
                "item": "oritech:uranium_gem"
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
                "item": "oritech:overcharged_crystal"
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

    // Dielectric Rod Recipes
    event.custom({
        "type": "railcraft:rolling",
        "key": {
            "i": {
                "item": "powah:dielectric_paste"
            }
        },
        "pattern": ["i", "i"],
        "result": {
            "count": 2,
            "id": "powah:dielectric_rod"
        }
    })

    event.custom({
        "type": "railcraft:rolling",
        "key": {
            "i": {
                "item": "powah:dielectric_paste"
            }
        },
        "pattern": ["ii"],
        "result": {
            "count": 2,
            "id": "powah:dielectric_rod_horizontal"
        }
    })

    // Photoelectric Pane Recipe
    event.shaped('2x powah:photoelectric_pane', [
        'PP',
        'PP'
    ], {
        P: 'enderio:photovoltaic_plate'
    })

    // Energizing Orb Recipe
    event.recipes.extendedcrafting.shaped_table('powah:energizing_orb',
        [
            " AAAAA ",
            " AAAAA ",
            " AAAAA ",
            " AAAAA ",
            " BBCBB ",
            "BBDEDBB",
            "BBBBBBB"
        ],
        {
            "A": {
                "item": "xycraft_world:glass_viewer_dire"
            },
            "B": {
                "item": "actuallyadditions:black_quartz_block"
            },
            "C": {
                "item": "extendedcrafting:nether_star_block"
            },
            "D": {
                "item": "actuallyadditions:quintuple_battery"
            },
            "E": {
                "item": "powah:dielectric_casing"
            }
        })

    // Flux Star
    event.custom({
        "type": "powah:energizing",
        "energy": 500000,
        "ingredients": [
            {
                "item": "minecraft:nether_star"
            },
            {
                "tag": "c:ingots/electrum"
            },
            {
                "tag": "c:ingots/electrum"
            },
            {
                "tag": "c:ingots/electrum"
            },
            {
                "tag": "c:ingots/electrum"
            }
        ],
        "result": {
            "count": 1,
            "id": "extendedcrafting:flux_star"
        }
    })
})
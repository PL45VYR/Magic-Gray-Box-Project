ServerEvents.recipes(event => {
    // Nether Star Fragment Recipe
    event.recipes.oritech.grinder(
        '4x hazennstuff:nether_star_fragment',
        'minecraft:nether_star'
    ).time(200)

    // Pulverizer Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA",
            "ABA",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "minecraft:iron_ingot"
            },
            "B": {
                "item": "oritech:nickel_ingot"
            },
            "C": {
                "item": "oritech:motor"
            },
            "D": {
                "item": "oritech:machine_core_1"
            }
        },
        "result": {
            "id": "oritech:pulverizer_block"
        }
    })

    // Powered Furnace Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA",
            "BCB",
            "DED"
        ],
        "key": {
            "A": {
                "item": "create:copper_sheet"
            },
            "B": {
                "item": "oritech:platinum_ingot"
            },
            "C": {
                "item": "oritech:nickel_ingot"
            },
            "D": {
                "item": "oritech:magnetic_coil"
            },
            "E": {
                "item": "oritech:machine_core_1"
            }
        },
        "result": {
            "id": "oritech:powered_furnace_block"
        }
    })

    // Basic Generator Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA",
            "ABA",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "oritech:nickel_ingot"
            },
            "B": {
                "item": "railcraft:charge_coil"
            },
            "C": {
                "item": "oritech:magnetic_coil"
            },
            "D": {
                "item": "oritech:machine_core_1"
            }
        },
        "result": {
            "id": "oritech:basic_generator_block"
        }
    })

    // Pump Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA",
            "ABA",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "minecraft:copper_ingot"
            },
            "B": {
                "item": "oritech:motor"
            },
            "C": {
                "item": "enderio:conduit_binder"
            },
            "D": {
                "item": "oritech:machine_core_1"
            }
        },
        "result": {
            "id": "oritech:pump_block"
        }
    })

    // Pipe Booster Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA",
            "BCB",
            "AAA"
        ],
        "key": {
            "A": {
                "item": "oritech:item_pipe"
            },
            "B": {
                "item": "oritech:fluid_pipe"
            },
            "C": {
                "item": "oritech:machine_core_1"
            }
        },
        "result": {
            "id": "oritech:pipe_booster_block",
            "count": 4
        }
    })

    // Tree Cutter Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " A ",
            "BCB",
            "BDB"
        ],
        "key": {
            "A": {
                "item": "immersiveengineering:sawblade"
            },
            "B": {
                "item": "oritech:nickel_ingot"
            },
            "C": {
                "item": "oritech:motor"
            },
            "D": {
                "item": "oritech:machine_core_1"
            }
        },
        "result": {
            "id": "oritech:treefeller_block"
        }
    })
})
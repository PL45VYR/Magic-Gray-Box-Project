ServerEvents.recipes(event => {
    // Simulation Chamber Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABBBA",
            "BCCCB",
            "BDEDB",
            "BFGFB",
            "ABBBA"
        ],
        "key": {
            "A": {
                "item": "oritech:flux_gate"
            },
            "B": {
                "item": "minecraft:obsidian"
            },
            "C": {
                "item": "minecraft:glass_pane"
            },
            "D": {
                "item": "oritech:enderic_compound"
            },
            "E": {
                "item": "oritech:machine_core_4"
            },
            "F": {
                "item": "actuallyadditions:empowered_palis_crystal"
            },
            "G": {
                "item": "oritech:super_ai_chip"
            }
        },
        "result": {
            "id": "hostilenetworks:sim_chamber"
        }
    })

    // Loot Fabricator Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABBBA",
            "BCCCB",
            "BDEDB",
            "BFGFB",
            "ABBBA"
        ],
        "key": {
            "A": {
                "item": "oritech:flux_gate"
            },
            "B": {
                "item": "minecraft:obsidian"
            },
            "C": {
                "item": "oritech:duratium_ingot"
            },
            "D": {
                "item": "actuallyadditions:empowered_diamatine_crystal"
            },
            "E": {
                "item": "oritech:machine_core_4"
            },
            "F": {
                "item": "forbidden_arcanus:deorum_ingot"
            },
            "G": {
                "item": "oritech:super_ai_chip"
            }
        },
        "result": {
            "id": "hostilenetworks:loot_fabricator"
        }
    })

    // Data Center Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAAAA",
            "ABCCCBA",
            "ACDEDCA",
            "ACFGFCA",
            "ACHFICA",
            "ABCCCBA",
            "AAAAAAA"
        ],
        "key": {
            "A": {
                "item": "minecraft:obsidian"
            },
            "B": {
                "item": "oritech:super_ai_chip"
            },
            "C": {
                "item": "oritech:superconductor"
            },
            "D": {
                "item": "enderio:sentient_ender"
            },
            "E": {
                "item": "actuallyadditions:ender_star"
            },
            "F": {
                "item": "oritech:reinforced_carbon_sheet"
            },
            "G": {
                "item": "oritech:machine_core_6"
            },
            "H": {
                "item": "hostilenetworks:sim_chamber"
            },
            "I": {
                "item": "hostilenetworks:loot_fabricator"
            }
        },
        "result": {
            "id": "hostilenetworks:data_center"
        }
    })

    // Data Center IO Port Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "ACCCA",
            "DCECD",
            "ACCCA",
            "AABAA"
        ],
        "key": {
            "A": {
                "item": "enderio:dark_steel_ingot"
            },
            "B": {
                "item": "xycraft_machines:port_item"
            },
            "C": {
                "item": "minecraft:black_stained_glass"
            },
            "D": {
                "item": "xycraft_machines:port_energy"
            },
            "E": {
                "item": "actuallyadditions:restonia_crystal_block"
            }
        },
        "result": {
            "id": "hostilenetworks:data_center_io_port"
        }
    })

    // Deep Learner Recipe
    event.replaceInput({ output: 'hostilenetworks:deep_learner' }, 'minecraft:obsidian', '#c:ingots/duratium')
    event.replaceInput({ output: 'hostilenetworks:deep_learner' }, 'minecraft:repeater', 'oritech:processing_unit')
    event.replaceInput({ output: 'hostilenetworks:deep_learner' }, 'minecraft:redstone', 'oritech:super_ai_chip')

    // Model Framework Recipe
    event.replaceInput({ output: 'hostilenetworks:blank_data_model' }, 'minecraft:clay_ball', '#c:ingots/platinum')
    event.replaceInput({ output: 'hostilenetworks:blank_data_model' }, 'minecraft:repeater', 'oritech:processing_unit')

    // Prediction Matrix Recipe
    event.recipes.oritech.assembler('8x hostilenetworks:prediction_matrix',
        [
            '#c:glass_panes',
            '#c:ingots/ferricore',
            '#c:ingots/nickel',
            'oritech:silicon_wafer'
        ]
    ).time(96)
})
ServerEvents.recipes(event => {
    // Nether Star Fragment Recipe
    event.recipes.oritech.grinder(
        '4x hazennstuff:nether_star_fragment',
        'minecraft:nether_star'
    ).time(200)

    // Ender Ingot Recipe
    event.recipes.oritech.atomic_forge(
        'extendedcrafting:ender_ingot',
        ['enderio:pulsating_alloy_ingot', 'oritech:duratium_ingot']
    ).time(80)

    // Silicon Tweak
    event.recipes.oritech.centrifuge_fluid(
        [],
        [FluidOutput.of('oritech:still_silicon_wash', 1000)],
        Ingredient.of('#ae2:all_quartz_dust'),
        FluidInput.of('oritech:still_naphtha', 1000)
    ).time(100)

    event.replaceOutput({ type: 'enderio:sagmilling' }, 'oritech:silicon', 'oritech:quartz_dust')

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

    // Assembler Recipe
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
                "item": "minecraft:crafter"
            },
            "C": {
                "item": "oritech:adamant_ingot"
            },
            "D": {
                "item": "oritech:motor"
            },
            "E": {
                "item": "oritech:machine_core_2"
            }
        },
        "result": {
            "id": "oritech:assembler_block"
        }
    })

    // Equipment Charger Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABA",
            "CDC",
            "EEE"
        ],
        "key": {
            "A": {
                "item": "oritech:steel_ingot"
            },
            "B": {
                "item": "oritech:machine_core_2"
            },
            "C": {
                "item": "oritech:energy_pipe"
            },
            "D": {
                "item": "immersiveengineering:component_electronic_adv"
            },
            "E": {
                "item": "enderio:pulsating_alloy_block"
            }
        },
        "result": {
            "id": "oritech:charger_block"
        }
    })

    // Industrial Chiller Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA",
            "BCB",
            "DED"
        ],
        "key": {
            "A": {
                "item": "create:iron_sheet"
            },
            "B": {
                "item": "enderio:fused_quartz"
            },
            "C": {
                "item": "oritech:motor"
            },
            "D": {
                "item": "minecraft:packed_ice"
            },
            "E": {
                "item": "oritech:machine_core_2"
            }
        },
        "result": {
            "id": "oritech:cooler_block"
        }
    })

    // Lava Generator Recipe
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
                "item": "oritech:machine_core_2"
            },
            "C": {
                "item": "minecraft:copper_block"
            },
            "D": {
                "item": "oritech:basic_generator_block"
            }
        },
        "result": {
            "id": "oritech:lava_generator_block"
        }
    })

    // Steam Engine Recipe
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
                "item": "oritech:machine_core_2"
            },
            "C": {
                "item": "minecraft:copper_ingot"
            },
            "D": {
                "item": "oritech:basic_generator_block"
            }
        },
        "result": {
            "id": "oritech:steam_engine_block"
        }
    })

    // Refinery Chamber Module Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA",
            "ABA",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "enderio:fused_quartz"
            },
            "B": {
                "item": "oritech:metal_beam_block"
            },
            "C": {
                "item": "create:fluid_tank"
            },
            "D": {
                "item": "oritech:machine_core_2"
            }
        },
        "result": {
            "id": "oritech:refinery_module_block"
        }
    })

    // Centrifuge Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA",
            "BCB",
            "DED"
        ],
        "key": {
            "A": {
                "item": "minecraft:glass_bottle"
            },
            "B": {
                "item": "oritech:motor"
            },
            "C": {
                "item": "oritech:steel_ingot"
            },
            "D": {
                "item": "oritech:processing_unit"
            },
            "E": {
                "item": "oritech:machine_core_3"
            }
        },
        "result": {
            "id": "oritech:centrifuge_block"
        }
    })

    // Foundry Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA",
            "ABA",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "create:copper_sheet"
            },
            "B": {
                "item": "oritech:motor"
            },
            "C": {
                "item": "oritech:electrum_ingot"
            },
            "D": {
                "item": "oritech:machine_core_3"
            }
        },
        "result": {
            "id": "oritech:foundry_block"
        }
    })

    // Bio Generator Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA",
            "ABA",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "oritech:steel_ingot"
            },
            "B": {
                "item": "oritech:machine_core_3"
            },
            "C": {
                "item": "oritech:magnetic_coil"
            },
            "D": {
                "item": "oritech:basic_generator_block"
            }
        },
        "result": {
            "id": "oritech:bio_generator_block"
        }
    })

    // Placer Block Recipe
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
                "item": "immersiveengineering:component_electronic_adv"
            },
            "C": {
                "item": "oritech:machine_frame_block"
            },
            "D": {
                "item": "oritech:motor"
            },
            "E": {
                "item": "oritech:machine_core_3"
            }
        },
        "result": {
            "id": "oritech:placer_block"
        }
    })

    // Fertilizer Block Recipe
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
                "item": "enderio:dark_steel_ingot"
            },
            "C": {
                "item": "immersiveengineering:component_electronic_adv"
            },
            "D": {
                "item": "oritech:motor"
            },
            "E": {
                "item": "oritech:machine_core_3"
            }
        },
        "result": {
            "id": "oritech:fertilizer_block"
        }
    })

    // Refinery Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " A ",
            "BBB",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "oritech:motor"
            },
            "B": {
                "item": "oritech:refinery_module_block"
            },
            "C": {
                "item": "oritech:steel_ingot"
            },
            "D": {
                "item": "oritech:machine_core_3"
            }
        },
        "result": {
            "id": "oritech:refinery_block"
        }
    })
})
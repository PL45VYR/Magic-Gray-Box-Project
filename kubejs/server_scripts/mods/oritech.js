ServerEvents.recipes(event => {
    // Nether Star Fragment Recipe
    event.recipes.oritech.grinder(
        '4x hazennstuff:nether_star_fragment',
        'minecraft:nether_star'
    ).time(200)

    // Ender Ingot Recipe
    event.recipes.oritech.atomic_forge(
        '2x extendedcrafting:ender_ingot',
        ['oritech:duratium_ingot', 'enderio:pulsating_alloy_ingot', 'enderio:pulsating_alloy_ingot']
    ).time(80)

    // Fluid Pipe Recipe
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 400,
        "pattern": [
            "AAA",
            "BBB",
            "AAA"
        ],
        "key": {
            "A": {
                "item": "minecraft:copper_ingot"
            },
            "B": {
                "item": "enderio:conduit_binder"
            }
        },
        "result": {
            "id": "oritech:fluid_pipe",
            "count": 6
        }
    })

    // Fluid Addon Recipe
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 400,
        "pattern": [
            "AAA",
            "ABA",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "oritech:carbon_fibre_strands"
            },
            "B": {
                "item": "oritech:fluid_pipe"
            },
            "C": {
                "item": "oritech:electrum_ingot"
            },
            "D": {
                "item": "enderio:conduit_binder"
            }
        },
        "result": {
            "id": "oritech:machine_fluid_addon"
        }
    })

    // Silicon Tweak
    event.recipes.oritech.centrifuge_fluid(
        [],
        [FluidOutput.of('oritech:still_silicon_wash', 1000)],
        Ingredient.of('#ae2:all_quartz_dust'),
        FluidInput.of('oritech:still_naphtha', 1000)
    ).time(100)

    // DCP Solar Sail Recipe
    event.recipes.oritech.assembler(
        'dysoncubeproject:solar_sail',
        [
            'powah:photoelectric_pane',
            'powah:photoelectric_pane',
            'immersiveengineering:sheetmetal_aluminum',
            'immersiveengineering:sheetmetal_aluminum'
        ]
    ).time(120)

    // DCP Beam Recipe
    event.recipes.oritech.assembler(
        '2x dysoncubeproject:beam',
        [
            '#c:storage_blocks/aluminum',
            '#c:storage_blocks/aluminum',
            'immersiveengineering:sheetmetal_aluminum',
            'immersiveengineering:sheetmetal_aluminum'
        ]
    ).time(120)

    // Reactor Wall Tweak
    event.replaceInput({ output: "oritech:reactor_wall" }, "#oritech:plating", "oritech:carbon_plating_block")

    // Plastic Tweak
    event.replaceInput({ output: /oritech.*/ }, '#c:plates/plastic', '#c:plastics')

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

    // Particle Accelerator Guide Ring Recipe
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 400000,
        "power_rate": 100,
        "pattern": [
            " A ",
            "ABA",
            "CDD"
        ],
        "key": {
            "A": {
                "item": "oritech:steel_ingot"
            },
            "B": {
                "item": "oritech:machine_core_3"
            },
            "C": {
                "item": "oritech:superconductor"
            },
            "D": {
                "item": "oritech:industrial_glass_block"
            }
        },
        "result": {
            "id": "oritech:accelerator_ring",
            "count": 4
        }
    })

    // Enderic Laser Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "     ",
            " ABA ",
            " CDC ",
            " EFE ",
            " GGG "
        ],
        "key": {
            "A": {
                "item": "oritech:carbon_fibre_strands"
            },
            "B": {
                "item": "oritech:enderic_lens"
            },
            "C": {
                "item": "oritech:steel_ingot"
            },
            "D": {
                "item": "immersiveengineering:component_electronic_adv"
            },
            "E": {
                "item": "oritech:motor"
            },
            "F": {
                "item": "oritech:machine_core_4"
            },
            "G": {
                "item": "oritech:machine_plating_block"
            }
        },
        "result": {
            "id": "oritech:laser_arm_block"
        }
    })

    // Fuel Generator Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "     ",
            " AAA ",
            "ABCBA",
            "DEEED",
            "     "
        ],
        "key": {
            "A": {
                "item": "oritech:steel_ingot"
            },
            "B": {
                "item": "oritech:enderic_lens"
            },
            "C": {
                "item": "oritech:machine_core_4"
            },
            "D": {
                "item": "oritech:machine_plating_block"
            },
            "E": {
                "item": "oritech:basic_generator_block"
            }
        },
        "result": {
            "id": "oritech:fuel_generator_block"
        }
    })

    // Destroyer Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "     ",
            " ABA ",
            "ACDCA",
            "EEFEE",
            "     "
        ],
        "key": {
            "A": {
                "item": "oritech:motor"
            },
            "B": {
                "item": "oritech:laser_arm_block"
            },
            "C": {
                "item": "immersiveengineering:component_electronic_adv"
            },
            "D": {
                "item": "oritech:pulverizer_block"
            },
            "E": {
                "item": "oritech:machine_plating_block"
            },
            "F": {
                "item": "oritech:machine_core_4"
            }
        },
        "result": {
            "id": "oritech:destroyer_block"
        }
    })

    // Cybernetic Augmentation Center Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "     ",
            "ABBBA",
            "CDEFC",
            "CDGHC",
            "IIIII"
        ],
        "key": {
            "A": {
                "item": "oritech:dubios_container"
            },
            "B": {
                "item": "oritech:carbon_fibre_strands"
            },
            "C": {
                "item": "oritech:motor"
            },
            "D": {
                "item": "oritech:metal_beam_block"
            },
            "E": {
                "item": "minecraft:chest"
            },
            "F": {
                "item": "oritech:processing_unit"
            },
            "G": {
                "item": "oritech:machine_core_4"
            },
            "H": {
                "item": "enderio:player_token"
            },
            "I": {
                "item": "oritech:machine_plating_block"
            }
        },
        "result": {
            "id": "oritech:augment_application_block"
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
                "item": "oritech:machine_core_4"
            }
        },
        "result": {
            "id": "oritech:refinery_block"
        }
    })

    // Cybernetic Research Recipe
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 400,
        "pattern": [
            "AAA",
            "ABA",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "enderio:energetic_alloy_ingot"
            },
            "B": {
                "item": "oritech:machine_core_4"
            },
            "C": {
                "item": "oritech:machine_plating_block"
            },
            "D": {
                "item": "minecraft:brewing_stand"
            }
        },
        "result": {
            "id": "oritech:simple_augment_station"
        }
    })

    // Atomic Forge Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " ABA ",
            "ACDCA",
            "BDEDB",
            "ACDCA",
            " ABA "
        ],
        "key": {
            "A": {
                "item": "oritech:machine_plating_block"
            },
            "B": {
                "item": "oritech:plastic_sheet"
            },
            "C": {
                "item": "oritech:flux_gate"
            },
            "D": {
                "item": "oritech:enderic_compound"
            },
            "E": {
                "item": "oritech:machine_core_5"
            }
        },
        "result": {
            "id": "oritech:atomic_forge_block"
        }
    })

    // Bedrock Extractor Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAA ",
            "BCDCB",
            "BCECB",
            "BFCFB",
            "  F  "
        ],
        "key": {
            "A": {
                "item": "oritech:duratium_ingot"
            },
            "B": {
                "item": "oritech:machine_plating_block"
            },
            "C": {
                "item": "oritech:motor"
            },
            "D": {
                "item": "oritech:heisenberg_compensator"
            },
            "E": {
                "item": "oritech:machine_core_5"
            },
            "F": {
                "item": "oritech:adamant_block"
            }
        },
        "result": {
            "id": "oritech:deep_drill_block"
        }
    })

    // Big Solar Panel Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "     ",
            "AAAAA",
            " BCB ",
            " CDC ",
            "EEFEE"
        ],
        "key": {
            "A": {
                "item": "powah:solar_panel_blazing"
            },
            "B": {
                "item": "oritech:flux_gate"
            },
            "C": {
                "item": "oritech:advanced_battery"
            },
            "D": {
                "item": "oritech:machine_core_5"
            },
            "E": {
                "item": "oritech:machine_plating_block"
            },
            "F": {
                "item": "oritech:basic_generator_block"
            }
        },
        "result": {
            "id": "oritech:big_solar_panel_block"
        }
    })

    // Quantum Research Station Recipe
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 400000,
        "power_rate": 100,
        "pattern": [
            "AAA",
            "BCB",
            "DED"
        ],
        "key": {
            "A": {
                "item": "oritech:duratium_ingot"
            },
            "B": {
                "item": "oritech:flux_gate"
            },
            "C": {
                "item": "oritech:machine_core_5"
            },
            "D": {
                "item": "oritech:machine_plating_block"
            },
            "E": {
                "item": "oritech:centrifuge_block"
            }
        },
        "result": {
            "id": "oritech:advanced_augment_station"
        }
    })

    // Nuclear Reactor Controller Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABBBA",
            "ACDCA",
            "ACCCA",
            "AAAAA"
        ],
        "key": {
            "A": {
                "item": "oritech:reactor_wall"
            },
            "B": {
                "item": "create_connected:control_chip"
            },
            "C": {
                "item": "oritech:processing_unit"
            },
            "D": {
                "item": "oritech:machine_core_5"
            }
        },
        "result": {
            "id": "oritech:reactor_controller"
        }
    })

    // Reactor Fuel Port Recipe
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 400,
        "pattern": [
            " A ",
            "BBB",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "oritech:machine_core_5"
            },
            "B": {
                "item": "oritech:item_pipe"
            },
            "C": {
                "item": "minecraft:chest"
            },
            "D": {
                "item": "oritech:reactor_wall"
            }
        },
        "result": {
            "id": "oritech:reactor_fuel_port"
        }
    })

    // Reactor Coolant Absorber Port Recipe
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 400,
        "pattern": [
            " A ",
            "BBB",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "oritech:machine_core_5"
            },
            "B": {
                "item": "oritech:item_pipe"
            },
            "C": {
                "item": "minecraft:packed_ice"
            },
            "D": {
                "item": "oritech:reactor_wall"
            }
        },
        "result": {
            "id": "oritech:reactor_absorber_port"
        }
    })

    // Reactor Energy Port Recipe
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 400,
        "pattern": [
            " A ",
            "BBB",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "oritech:machine_core_5"
            },
            "B": {
                "item": "enderio:energetic_alloy_ingot"
            },
            "C": {
                "item": "justdirethings:ferricore_ingot"
            },
            "D": {
                "item": "oritech:reactor_wall"
            }
        },
        "result": {
            "id": "oritech:reactor_energy_port"
        }
    })

    // Reactor Redstone Recipe
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 400,
        "pattern": [
            " A ",
            "BBB",
            "CDC"
        ],
        "key": {
            "A": {
                "item": "oritech:machine_core_5"
            },
            "B": {
                "item": "oritech:processing_unit"
            },
            "C": {
                "item": "create:transmitter"
            },
            "D": {
                "item": "oritech:reactor_wall"
            }
        },
        "result": {
            "id": "oritech:reactor_redstone_port"
        }
    })

    // Tachyon Absorber Recipe
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "ACDCA",
            "CDEDC",
            "ACDCA",
            "AACAA"
        ],
        "key": {
            "A": {
                "item": "oritech:machine_plating_block"
            },
            "B": {
                "item": "powah:solar_panel_spirited"
            },
            "C": {
                "item": "oritech:superconductor"
            },
            "D": {
                "item": "oritech:heisenberg_compensator"
            },
            "E": {
                "item": "oritech:machine_core_5"
            }
        },
        "result": {
            "id": "oritech:particle_collector_block",
            "count": 2
        }
    })
})
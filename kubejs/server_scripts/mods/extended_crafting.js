ServerEvents.recipes(event => {
    // Extended Crafting Shaped Table Conversions
    let excrafting_table = [
        "immersiveengineering:crafting/cokebrick",
        "railcraft:powered_rolling_machine",
        "immersiveengineering:crafting/fluid_pump",
        "immersiveengineering:crafting/blastfurnace_preheater",
        "immersiveengineering:crafting/furnace_heater",
        "immersiveengineering:crafting/dynamo",
        "immersiveengineering:crafting/thermoelectric_generator",
        "immersiveengineering:crafting/sample_drill",
        "immersivepetroleum:auto_lubricator",
        "immersivepetroleum:projector",
        "sophisticatedstorage:controller",
        "sophisticatedstorage:storage_io",
        "sophisticatedstorage:storage_input",
        "sophisticatedstorage:storage_output",
        "apothic_enchanting:seashelf",
        "apothic_enchanting:hellshelf",
        "apothic_enchanting:geode_shelf",
        "apothic_enchanting:beeshelf",
        "apothic_enchanting:melonshelf",
        "apothic_enchanting:stoneshelf"
    ]

    excrafting_table.forEach(recipe_id => {
        event.forEachRecipe({ type: "minecraft:crafting_shaped", id: recipe_id }, new_recipe => {
            let old_recipe = JSON.parse(new_recipe.json.toString())
            event.custom({
                "type": "extendedcrafting:shaped_table",
                "pattern": old_recipe.pattern,
                "key": old_recipe.key,
                "result": old_recipe.result
            })
        })
        event.remove({ id: recipe_id })
    })

    // EnderIO Flux Crafter Conversions
    let enderio_flux = [
        "enderio:basic_capacitor",
        "enderio:double_layer_capacitor",
        "enderio:octadic_capacitor"
    ]

    enderio_flux.forEach(recipe_id => {
        event.forEachRecipe({ type: "minecraft:crafting_shaped", id: recipe_id }, new_recipe => {
            let old_recipe = JSON.parse(new_recipe.json.toString())
            event.custom({
                "type": "extendedcrafting:shaped_flux_crafter",
                "power_required": 100000,
                "power_rate": 400,
                "pattern": old_recipe.pattern,
                "key": old_recipe.key,
                "result": old_recipe.result
            })
        })
        event.remove({ id: recipe_id })
    })

    // Oritech Flux Crafter Conversions
    let oritech_flux = [
        "energy",
        "item",
        "transparentitem",
        "addon/speed",
        "addon/eff",
        "addon/ultimate",
        "addon/quarry",
        "addon/processing",
        "addon/processingalt",
        "addon/yield",
        "addon/cropfilter",
        "_hunter",
        "addon/capacitor",
        "addon/acceptor",
        "addon/invproxy",
        "addon/steamboiler",
        "addon/steamboileralt",
        "addon/redstone",
        "addon/silktouch",
        "addon/burst",
    ]

    oritech_flux.forEach(recipe_id => {
        event.forEachRecipe({ type: "minecraft:crafting_shaped", id: `oritech:crafting/${recipe_id}` }, new_recipe => {
            let old_recipe = JSON.parse(new_recipe.json.toString())
            event.custom({
                "type": "extendedcrafting:shaped_flux_crafter",
                "power_required": 100000,
                "power_rate": 400,
                "pattern": old_recipe.pattern,
                "key": old_recipe.key,
                "result": old_recipe.result
            })
        })
        event.remove({ id: `oritech:crafting/${recipe_id}` })
    })

    // LaserIO and Modular Router Shaped to Flux Conversion
    event.forEachRecipe([
        { type: "minecraft:crafting_shaped", mod: "modularrouters" },
        { type: "minecraft:crafting_shaped", mod: "laserio", not: { output: "laserio:logic_chip_raw" } }
    ], new_recipe => {
        let old_recipe = JSON.parse(new_recipe.json.toString())
        event.custom({
            "type": "extendedcrafting:shaped_flux_crafter",
            "power_required": 100000,
            "power_rate": 400,
            "pattern": old_recipe.pattern,
            "key": old_recipe.key,
            "result": old_recipe.result
        })
    })

    // LaserIO and Modular Router Shapeless to Flux Conversion
    event.forEachRecipe([
        { type: "minecraft:crafting_shapeless", mod: "modularrouters" },
        { type: "minecraft:crafting_shapeless", mod: "laserio", not: { id: /.*nbtclear/ }, not: { output: /.*book.*/ } }
    ], new_recipe => {
        let old_recipe = JSON.parse(new_recipe.json.toString())
        event.custom({
            "type": "extendedcrafting:shapeless_flux_crafter",
            "power_required": 100000,
            "power_rate": 400,
            "ingredients": old_recipe.ingredients,
            "result": old_recipe.result
        })
    })

    let excrafting_ender = []

    excrafting_ender.forEach(recipe_id => {
        event.forEachRecipe({ type: "minecraft:crafting_shaped", id: recipe_id }, new_recipe => {
            let old_recipe = JSON.parse(new_recipe.json.toString())
            event.custom({
                "type": "extendedcrafting:shaped_ender_crafter",
                "pattern": old_recipe.pattern,
                "key": old_recipe.key,
                "result": old_recipe.result
            })
        })
        event.remove({ id: recipe_id })
    })

    // Luminessence Recipe
    event.recipes.createMixing(
        '2x extendedcrafting:luminessence',
        [
            'minecraft:redstone',
            'minecraft:gunpowder',
            Fluid.of('supplementaries:lumisene', 1000)
        ]
    )

    // Black Iron Ingot Recipe
    event.recipes.createFilling(
        'extendedcrafting:black_iron_ingot',
        [
            Fluid.of('irons_spellbooks:common_ink', 500),
            'minecraft:iron_ingot'
        ]
    )

    // Black Iron Slate Recipe
    event.recipes.createPressing(
        'extendedcrafting:black_iron_slate',
        [
            'extendedcrafting:black_iron_block'
        ]
    )

    // Basic Component Recipe
    event.shaped('extendedcrafting:basic_component',
        [
            'IS',
            'LI'
        ],
        {
            'I': 'minecraft:iron_ingot',
            'S': 'extendedcrafting:black_iron_slate',
            'L': 'extendedcrafting:luminessence'
        }
    )

    // Basic Catalyst Recipe
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "C": {
                "item": "extendedcrafting:basic_component"
            },
            "I": {
                "item": "extendedcrafting:black_iron_ingot"
            }
        },
        "pattern": [
            " C ",
            "CIC",
            " C "
        ],
        "result": {
            "count": 1,
            "id": "extendedcrafting:basic_catalyst"
        },
        "show_notification": false
    })

    // Basic Crafting Table Recipe
    event.replaceInput({ id: "extendedcrafting:basic_table" }, 'minecraft:iron_block', 'occultism:storage_controller_base')

    // Advanced Component
    event.shaped('extendedcrafting:advanced_component',
        [
            'IS',
            'AI'
        ],
        {
            'I': 'forbidden_arcanus:deorum_ingot',
            'S': 'extendedcrafting:basic_component',
            'A': 'immersiveengineering:component_electronic_adv'
        }
    )

    // Advanced Catalyst
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "C": {
                "item": "extendedcrafting:advanced_component"
            },
            "I": {
                "item": "oritech:steel_ingot"
            }
        },
        "pattern": [
            " C ",
            "CIC",
            " C "
        ],
        "result": {
            "count": 1,
            "id": "extendedcrafting:advanced_catalyst"
        },
        "show_notification": false
    })

    // Advanced Crafting Table
    event.replaceInput({ id: "extendedcrafting:advanced_table" }, 'minecraft:gold_block', 'forbidden_arcanus:deorum_block')

    // Elite Component
    event.shaped('extendedcrafting:elite_component',
        [
            'IS',
            'AI'
        ],
        {
            'I': 'occultism:iesnium_ingot',
            'S': 'extendedcrafting:advanced_component',
            'A': 'enderio:dark_steel_ingot'
        }
    )

    // Elite Catalyst
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "C": {
                "item": "extendedcrafting:elite_component"
            },
            "I": {
                "item": "enderio:dark_steel_ingot"
            }
        },
        "pattern": [
            " C ",
            "CIC",
            " C "
        ],
        "result": {
            "count": 1,
            "id": "extendedcrafting:elite_catalyst"
        },
        "show_notification": false
    })

    // Elite Crafting Table
    event.replaceInput({ id: "extendedcrafting:elite_table" }, 'minecraft:diamond_block', 'occultism:iesnium_block')

    // Crystaltine Ingot
    event.recipes.extendedcrafting.shaped_table('4x extendedcrafting:crystaltine_ingot',
        [
            "       ",
            "ABBBBBA",
            "ACCDCCA",
            "ACCDCCA",
            "ABBBBBA",
            "       ",
            "       "
        ], {
        "A": {
            "item": "occultism:iesnium_ingot"
        },
        "B": {
            "tag": "c:ingots/platinum"
        },
        "C": {
            "item": "forbidden_arcanus:arcane_crystal"
        },
        "D": {
            "item": "apotheosis:rare_material"
        }
    })

    // Flux Crafter
    event.recipes.extendedcrafting.shaped_table('extendedcrafting:flux_crafter',
        [
            "AAAAAAA",
            "ABBBBBA",
            "ABCDCBA",
            "EFGHGFE",
            "EFGIGFE",
            "EFFFFFE",
            "EEEEEEE"
        ],
        {
            "A": {
                "tag": "c:ingots/electrum"
            },
            "B": {
                "tag": "c:plates/electrum"
            },
            "C": {
                "item": "immersiveengineering:component_electronic_adv"
            },
            "D": {
                "item": "create_connected:control_chip"
            },
            "E": {
                "item": "extendedcrafting:redstone_ingot"
            },
            "F": {
                "item": "actuallyadditions:restonia_crystal"
            },
            "G": {
                "item": "actuallyadditions:quadruple_battery"
            },
            "H": {
                "item": "minecraft:crafting_table"
            },
            "I": {
                "item": "actuallyadditions:empowered_restonia_crystal_block"
            }
        })

    // Flux Alternator
    event.recipes.extendedcrafting.shaped_table('4x extendedcrafting:flux_alternator',
        [
            " AAAAA ",
            "  ABA  ",
            "  ABA  ",
            "  ABA  ",
            "CCCDCCC",
            "CCEEECC",
            "CCCCCCC"
        ],
        {
            "A": {
                "item": "oritech:electrum_ingot"
            },
            "B": {
                "item": "actuallyadditions:advanced_coil"
            },
            "C": {
                "item": "extendedcrafting:redstone_ingot"
            },
            "D": {
                "item": "actuallyadditions:quintuple_battery"
            },
            "E": {
                "item": "actuallyadditions:empowered_restonia_crystal"
            }
        }
    )

    // Enhanced Redstone
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 125000,
        "power_rate": 400,
        "pattern": [
            " A ",
            "ABA",
            " A "
        ],
        "key": {
            "A": {
                "item": "enderio:redstone_alloy_ingot"
            },
            "B": {
                "item": "extendedcrafting:flux_star"
            }
        },
        "result": {
            "id": "extendedcrafting:enhanced_redstone_ingot",
            "count": 4
        }
    })

    // Crystaltine Component
    event.shaped('extendedcrafting:crystaltine_component',
        [
            'IS',
            'CI'
        ],
        {
            'I': 'extendedcrafting:crystaltine_ingot',
            'S': 'extendedcrafting:elite_component',
            'C': 'powah:crystal_niotic'
        }
    )

    // Crystaltine Catalyst
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "C": {
                "item": "extendedcrafting:crystaltine_component"
            },
            "I": {
                "item": "enderio:dark_steel_ingot"
            }
        },
        "pattern": [
            " C ",
            "CIC",
            " C "
        ],
        "result": {
            "count": 1,
            "id": "extendedcrafting:crystaltine_catalyst"
        },
        "show_notification": false
    })

    // Redstone Component
    event.shaped('extendedcrafting:redstone_component',
        [
            'IS',
            'CI'
        ],
        {
            'I': 'extendedcrafting:redstone_ingot',
            'S': 'extendedcrafting:elite_component',
            'C': 'enderio:basic_capacitor'
        }
    )

    // Redstone Catalyst
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "C": {
                "item": "extendedcrafting:redstone_component"
            },
            "I": {
                "item": "enderio:dark_steel_ingot"
            }
        },
        "pattern": [
            " C ",
            "CIC",
            " C "
        ],
        "result": {
            "count": 1,
            "id": "extendedcrafting:redstone_catalyst"
        },
        "show_notification": false
    })

    // Enhanced Redstone Component
    event.shaped('extendedcrafting:enhanced_redstone_component',
        [
            'IS',
            'CI'
        ],
        {
            'I': 'extendedcrafting:enhanced_redstone_ingot',
            'S': 'extendedcrafting:redstone_component',
            'C': 'actuallyadditions:empowered_restonia_crystal'
        }
    )

    // Enhanced Redstone Catalyst
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "C": {
                "item": "extendedcrafting:enhanced_redstone_component"
            },
            "I": {
                "item": "enderio:dark_steel_ingot"
            }
        },
        "pattern": [
            " C ",
            "CIC",
            " C "
        ],
        "result": {
            "count": 1,
            "id": "extendedcrafting:enhanced_redstone_catalyst"
        },
        "show_notification": false
    })

    // Ender Component
    event.shaped('extendedcrafting:ender_component',
        [
            'IS',
            'CI'
        ],
        {
            'I': 'extendedcrafting:ender_ingot',
            'S': 'extendedcrafting:crystaltine_component',
            'C': 'oritech:super_ai_chip'
        }
    )

    // Ender Catalyst
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "C": {
                "item": "extendedcrafting:ender_component"
            },
            "I": {
                "item": "oritech:duratium_ingot"
            }
        },
        "pattern": [
            " C ",
            "CIC",
            " C "
        ],
        "result": {
            "count": 1,
            "id": "extendedcrafting:ender_catalyst"
        },
        "show_notification": false
    })

    // Ender Crafter
    event.recipes.extendedcrafting.shaped_table('extendedcrafting:ender_crafter',
        [
            "AAAAAAA",
            "ABBBBBA",
            "ABCDCBA",
            "EFGHGFE",
            "EFGIGFE",
            "EFFFFFE",
            "EEEEEEE"
        ],
        {
            "A": {
                "item": "enderio:pulsating_alloy_ingot"
            },
            "B": {
                "item": "minecraft:ender_eye"
            },
            "C": {
                "item": "extendedcrafting:ender_component"
            },
            "D": {
                "item": "extendedcrafting:ender_catalyst"
            },
            "E": {
                "item": "extendedcrafting:ender_ingot"
            },
            "F": {
                "item": "oritech:enderic_compound"
            },
            "G": {
                "item": "oritech:heisenberg_compensator"
            },
            "H": {
                "item": "minecraft:crafting_table"
            },
            "I": {
                "item": "forbidden_arcanus:eternal_stella"
            }
        }
    )

    // Ender Alternator
    event.recipes.extendedcrafting.shaped_table('4x extendedcrafting:ender_alternator',
        [
            " AAAAA ",
            "  ABA  ",
            "  ABA  ",
            "  ABA  ",
            "CCCDCCC",
            "CCEEECC",
            "CCCCCCC"
        ],
        {
            "A": {
                "item": "enderio:pulsating_alloy_ingot"
            },
            "B": {
                "item": "minecraft:ender_eye"
            },
            "C": {
                "item": "extendedcrafting:ender_ingot"
            },
            "D": {
                "item": "oritech:enderic_lens"
            },
            "E": {
                "item": "oritech:enderic_compound"
            }
        }
    )

    // Basic Auto Crafter
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 125000,
        "power_rate": 400,
        "pattern": [
            "ABA",
            "CDC",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "extendedcrafting:black_iron_ingot"
            },
            "B": {
                "item": "extendedcrafting:crystaltine_catalyst"
            },
            "C": {
                "item": "extendedcrafting:enhanced_redstone_catalyst"
            },
            "D": {
                "item": "extendedcrafting:basic_table"
            }
        },
        "result": {
            "id": "extendedcrafting:basic_auto_table"
        }
    })

    // Advanced Auto Crafter
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 250000,
        "power_rate": 400,
        "pattern": [
            "ABA",
            "CDC",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "extendedcrafting:black_iron_ingot"
            },
            "B": {
                "item": "extendedcrafting:crystaltine_catalyst"
            },
            "C": {
                "item": "extendedcrafting:enhanced_redstone_catalyst"
            },
            "D": {
                "item": "extendedcrafting:advanced_table"
            }
        },
        "result": {
            "id": "extendedcrafting:advanced_auto_table"
        }
    })

    // Elite Auto Crafter
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 375000,
        "power_rate": 400,
        "pattern": [
            "ABA",
            "CDC",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "extendedcrafting:black_iron_ingot"
            },
            "B": {
                "item": "extendedcrafting:crystaltine_catalyst"
            },
            "C": {
                "item": "extendedcrafting:enhanced_redstone_catalyst"
            },
            "D": {
                "item": "extendedcrafting:elite_table"
            }
        },
        "result": {
            "id": "extendedcrafting:elite_auto_table"
        }
    })

    // Ultimate Auto Crafter
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 500000,
        "power_rate": 400,
        "pattern": [
            "ABA",
            "CDC",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "extendedcrafting:black_iron_ingot"
            },
            "B": {
                "item": "extendedcrafting:crystaltine_catalyst"
            },
            "C": {
                "item": "extendedcrafting:enhanced_redstone_catalyst"
            },
            "D": {
                "item": "extendedcrafting:ultimate_table"
            }
        },
        "result": {
            "id": "extendedcrafting:ultimate_auto_table"
        }
    })

    // Flux Auto Crafter
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 500000,
        "power_rate": 400,
        "pattern": [
            "ABA",
            "CDC",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "extendedcrafting:black_iron_ingot"
            },
            "B": {
                "item": "extendedcrafting:crystaltine_catalyst"
            },
            "C": {
                "item": "extendedcrafting:enhanced_redstone_catalyst"
            },
            "D": {
                "item": "extendedcrafting:flux_crafter"
            }
        },
        "result": {
            "id": "extendedcrafting:auto_flux_crafter"
        }
    })

    // Ender Auto Crafter
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 400,
        "pattern": [
            "ABA",
            "CDC",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "extendedcrafting:black_iron_ingot"
            },
            "B": {
                "item": "extendedcrafting:crystaltine_catalyst"
            },
            "C": {
                "item": "extendedcrafting:enhanced_redstone_catalyst"
            },
            "D": {
                "item": "extendedcrafting:ender_crafter"
            }
        },
        "result": {
            "id": "extendedcrafting:auto_ender_crafter"
        }
    })

    // EM Rail Ejector Controller
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAAAAB",
            " ACD   ",
            " AAAAAB",
            "   A   ",
            "  AAA  ",
            "  AEA  ",
            "AAAAAAA"
        ],
        "key": {
            "A": {
                "item": "justdirethings:ferricore_block"
            },
            "B": {
                "item": "oritech:enderic_lens"
            },
            "C": {
                "item": "oritech:super_ai_chip"
            },
            "D": {
                "item": "oritech:ion_thruster"
            },
            "E": {
                "item": "oritech:machine_core_5"
            }
        },
        "result": {
            "id": "dysoncubeproject:em_railejector_controller"
        }
    })

    // Ray Receiver Controller
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "   A   ",
            "  BCB  ",
            "   A   ",
            "ADAAADA",
            "AAAEAAA",
            "  AFA  ",
            " AAAAA "
        ],
        "key": {
            "A": {
                "item": "justdirethings:ferricore_block"
            },
            "B": {
                "item": "justdirethings:ferricore_ingot"
            },
            "C": {
                "item": "oritech:enderic_lens"
            },
            "D": {
                "item": "oritech:big_solar_panel_block"
            },
            "E": {
                "item": "oritech:super_ai_chip"
            },
            "F": {
                "item": "oritech:large_storage_block"
            }
        },
        "result": {
            "id": "dysoncubeproject:ray_receiver_controller"
        }
    })
})
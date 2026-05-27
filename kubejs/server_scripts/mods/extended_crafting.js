ServerEvents.recipes(event => {
    // Extended Crafting Shaped Table Conversions
    let excrafting_only = [
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

    excrafting_only.forEach(recipe_id => {
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

    // Crystaltine Ingot Recipe
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

    // Flux Crafter Recipe
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

    // Flux Alternator Recipe
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
})
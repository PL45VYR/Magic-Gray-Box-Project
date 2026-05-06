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
        "immersivepetroleum:seismic_survey_tool",
        "immersivepetroleum:auto_lubricator",
        "immersivepetroleum:projector"
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
            'LI'
        ],
        {
            'I': 'forbidden_arcanus:deorum_ingot',
            'S': 'extendedcrafting:black_iron_slate',
            'L': 'extendedcrafting:luminessence'
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
            "id": "extendedcrafting:advanced_catalyst"
        },
        "show_notification": false
    })

    // Advanced Crafting Table
    event.replaceInput({ id: "extendedcrafting:advanced_table" }, 'minecraft:gold_block', 'forbidden_arcanus:deorum_block')

})
ServerEvents.recipes(event => {
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
})
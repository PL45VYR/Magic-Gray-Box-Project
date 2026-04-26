ServerEvents.recipes(event => {
    // Andesite Alloy Recipe
    event.recipes.createMixing(
        'create:andesite_alloy',
        [
            'minecraft:andesite',
            'eidolon_repraised:pewter_nugget'
        ]
    )

    // Kiln Brick Recipe
    event.recipes.createMixing(
        'immersiveengineering:alloybrick',
        [
            '2x clayworks:terracotta_bricks',
            '2x create:small_dripstone_bricks'
        ]
    ).heated()

    // Blaze Burner Magic Workbench Recipe
    event.custom({
        "type": "eidolon_repraised:worktable",
        "pattern": [
            "rir",
            "ini",
            "rir"
        ],
        "reagents": [
            "rrrr"
        ],
        "key": {
            "r": {
                "tag": "c:rods/iron"
            },
            "i": {
                "item": "eidolon_repraised:pewter_inlay"
            },
            "n": {
                "item": "minecraft:netherrack"
            }
        },
        "result": {
            "id": "create:empty_blaze_burner",
        }
    })

    // Blaze Burner Mechanical Crafting Recipe
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "R": {
                "tag": "c:rods/iron"
            },
            "I": {
                "item": "eidolon_repraised:pewter_inlay"
            },
            "N": {
                "item": "minecraft:netherrack"
            }
        },
        "pattern": [
            "  R  ",
            " RIR ",
            "RINIR",
            " RIR ",
            "  R  "
        ],
        "result": {
            "count": 1,
            "id": "create:empty_blaze_burner"
        },
        "show_notification": false
    })

    // Blaze Burner Recipe
    event.recipes.create.deploying(
        'create:blaze_burner',
        [
            'create:empty_blaze_burner',
            'forbidden_arcanus:spawner_scrap'
        ]
    )

    // Manual Blaze Burner Recipe
    event.recipes.create.item_application(
        'create:blaze_burner',
        [
            'create:empty_blaze_burner',
            'forbidden_arcanus:spawner_scrap'
        ]
    )

    // Molten Redstone Recipe
    event.recipes.createMixing(
        Fluid.of('evolvedmekanism:molten_redstone', 90),
        [
            'minecraft:redstone',
        ]
    ).heated()

    // Rose Quartz Overhaul
    event.replaceOutput({ output: 'create:rose_quartz' }, 'create:rose_quartz', 'hazennstuff:rose_quartz')
    event.replaceInput({ input: 'create:rose_quartz' }, 'create:rose_quartz', 'hazennstuff:rose_quartz')

    event.recipes.createFilling(
        'hazennstuff:rose_quartz',
        [
            Fluid.of('evolvedmekanism:molten_redstone', 360),
            'minecraft:quartz'
        ]
    )

    // Improved Pewter Recipe
    event.recipes.createMixing(
        '2x eidolon_repraised:pewter_ingot',
        [
            Ingredient.of('#c:ingots/lead'),
            Ingredient.of('#c:ingots/tin')
        ]
    ).heated()

    // Arcane Essence Recipe
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "occultism:amethyst_dust"
            },
            {
                "type": "neoforge:components",
                "amount": 500,
                "components": {
                    "create:potion_fluid_bottle_type": "regular",
                    "minecraft:potion_contents": {
                        "potion": "irons_spellbooks:instant_mana_one"
                    }
                },
                "fluids": "create:potion"
            }
        ],
        "results": [
            {
                "id": "irons_spellbooks:arcane_essence",
                "count": 1
            }
        ]
    })

    // Common Ink Recipe
    event.recipes.createMixing(
        Fluid.of('irons_spellbooks:common_ink', 250),
        [
            Fluid.of('minecraft:water', 500),
            '2x irons_spellbooks:arcane_essence',
            '2x apotheosis:common_material'
        ]
    ).heated()

})
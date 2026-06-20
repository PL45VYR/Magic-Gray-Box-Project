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
            "bib",
            "ini",
            "bib"
        ],
        "reagents": [
            "bbbb"
        ],
        "key": {
            "b": {
                "item": "minecraft:iron_bars"
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
            "B": {
                "item": "minecraft:iron_bars"
            },
            "I": {
                "item": "eidolon_repraised:pewter_inlay"
            },
            "N": {
                "item": "minecraft:netherrack"
            }
        },
        "pattern": [
            "  B  ",
            " BIB ",
            "BINIB",
            " BIB ",
            "  B  "
        ],
        "result": {
            "count": 1,
            "id": "create:empty_blaze_burner"
        },
        "show_notification": false
    })

    // Blaze Burner Recipe
    event.recipes.malum.spirit_infusion(
        "create:empty_blaze_burner", //Input
        "create:blaze_burner", //Result
        [
            "8x infernal",
            "8x wicked",
            "2x eldritch"
        ], //Spirits
        [
            "6x malum:blazing_quartz",
            "forbidden_arcanus:spawner_scrap"
        ] //Additional Inputs, Defaults to []
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
            Ingredient.of('#c:gems/quartz')
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

    // Amalgametal Recipe
    event.recipes.createCompacting(
        'kubejs:amalgametal',
        [
            'apotheosis:common_material',
            Ingredient.of('#c:dusts/iron')
        ]
    ).heated()

    // Scrap from Amalgametal Recipe
    event.recipes.create.crushing(['apotheosis:common_material', CreateItem.of('apotheosis:common_material', 0.35)], 'kubejs:amalgametal')

    // Common Ink Recipe
    event.recipes.createMixing(
        Fluid.of('irons_spellbooks:common_ink', 250),
        [
            Fluid.of('minecraft:water', 500),
            '2x irons_spellbooks:arcane_essence',
            '2x apotheosis:common_material'
        ]
    ).heated()

    // Train Track Recipe
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('create:track')
        ],
        'railcraft:stone_tie',
        [
            event.recipes.create.deploying('create:incomplete_track', ['create:incomplete_track', 'railcraft:stone_tie']),
            event.recipes.create.filling('create:incomplete_track', ['create:incomplete_track', Fluid.of('immersiveengineering:creosote', 100)]),
            event.recipes.create.deploying('create:incomplete_track', ['create:incomplete_track', 'railcraft:advanced_rail']),
            event.recipes.create.pressing('create:incomplete_track', 'create:incomplete_track')
        ]
    )
        .transitionalItem('create:incomplete_track')
        .loops(2)

    // Gem Cutter Recipe
    event.recipes.extendedcrafting.shaped_table('create_enchantment_industry:gem_cutter',
        [
            " ABA ",
            "AC CA",
            "B   B",
            "AC CA",
            " ABA "
        ],
        {
            "A": {
                "item": "minecraft:amethyst_shard"
            },
            "B": {
                "item": "create:brass_ingot"
            },
            "C": {
                "item": "apotheosis:gem_dust"
            }
        }
    )

    // Affix Augmentor Recipe
    event.recipes.extendedcrafting.shaped_table('create_enchantment_industry:affix_augmentor',
        [
            "AAAAAAA",
            "ABBCBBA",
            "AACDCAA",
            "A EFE A",
            "A EEE A",
            "A     A",
            "A     A"
        ],
        {
            "A": {
                "item": "create:brass_sheet"
            },
            "B": {
                "item": "minecraft:amethyst_shard"
            },
            "C": {
                "item": "create:brass_casing"
            },
            "D": {
                "item": "minecraft:nether_star"
            },
            "E": {
                "item": "apotheosis:mythic_material"
            },
            "F": {
                "item": "create:nixie_tube"
            }
        }
    )

    // Brass Bookshelf Recipe
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('create_enchantment_industry:brass_bookshelf')
        ],
        'apothic_enchanting:pearl_endshelf',
        [
            event.recipes.create.deploying('create_enchantment_industry:incomplete_brass_bookshelf', ['create_enchantment_industry:incomplete_brass_bookshelf', 'create:brass_ingot']),
            event.recipes.create.filling('create_enchantment_industry:incomplete_brass_bookshelf', ['create_enchantment_industry:incomplete_brass_bookshelf', Fluid.of('create_enchantment_industry:infused_dragon_breath', 1000)]),
            event.recipes.create.deploying('create_enchantment_industry:incomplete_brass_bookshelf', ['create_enchantment_industry:incomplete_brass_bookshelf', 'create:precision_mechanism']),
            event.recipes.create.filling('create_enchantment_industry:incomplete_brass_bookshelf', ['create_enchantment_industry:incomplete_brass_bookshelf', Fluid.of('create_enchantment_industry:experience', 1000)]),
            event.recipes.create.deploying('create_enchantment_industry:incomplete_brass_bookshelf', ['create_enchantment_industry:incomplete_brass_bookshelf', 'create_connected:control_chip'])
        ]
    )
        .transitionalItem('create_enchantment_industry:incomplete_brass_bookshelf')
        .loops(5)

    // Ender Woven Bag Recipe
    event.recipes.extendedcrafting.shaped_table('create_enchantment_industry:ender_woven_bag',
        [
            "AAAAA",
            "ABCBA",
            "ABDBA",
            "ABEBA",
            "AAAAA"
        ],
        {
            "A": {
                "item": "create:brass_sheet"
            },
            "B": {
                "item": "apothic_enchanting:ender_lead"
            },
            "C": {
                "item": "create:rose_quartz_lamp"
            },
            "D": {
                "item": "create:precision_mechanism"
            },
            "E": {
                "item": "create:brass_casing"
            }
        }
    )
})
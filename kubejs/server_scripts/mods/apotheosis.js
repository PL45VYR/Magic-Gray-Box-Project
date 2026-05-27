ServerEvents.recipes(event => {
    event.custom({
        "type": "apothic_enchanting:infusion",
        "input": {
            "item": "malum:fused_consciousness"
        },
        "requirements": {
            "eterna": 50,
            "quanta": 1,
            "arcana": 58.58
        },
        "max_requirements": {
            "eterna": 50,
            "quanta": 1,
            "arcana": 58.58
        },
        "result": {
            "id": "endrem:cryptic_eye",
            "count": 1
        }
    })

    // Rarity Material Recipes
    event.recipes.create.crushing(['2x apotheosis:mythic_material', CreateItem.of('apotheosis:mythic_material', 0.25)], 'ancientreforging:ancient_material')
    event.recipes.create.crushing(['2x apotheosis:epic_material', CreateItem.of('apotheosis:epic_material', 0.25)], 'apotheosis:mythic_material')
    event.recipes.create.crushing(['2x apotheosis:rare_material', CreateItem.of('apotheosis:rare_material', 0.25)], 'apotheosis:epic_material')
    event.recipes.create.crushing(['2x apotheosis:uncommon_material', CreateItem.of('apotheosis:uncommon_material', 0.25)], 'apotheosis:rare_material')
    event.recipes.create.crushing(['2x apotheosis:common_material', CreateItem.of('apotheosis:common_material', 0.25)], 'apotheosis:uncommon_material')

    // Shelf Recipes

    // Blazing Hellshelf
    event.recipes.extendedcrafting.shaped_table('apothic_enchanting:blazing_hellshelf',
        [
            " AAA ",
            "AABAA",
            "ABCBA",
            "AABAA",
            " AAA "
        ],
        {
            "A": {
                "item": "malum:auric_embers"
            },
            "B": {
                "item": "hazennstuff:solar_core"
            },
            "C": {
                "item": "apothic_enchanting:infused_hellshelf"
            }
        }
    )

    // Glowing Hellshelf
    event.recipes.extendedcrafting.shaped_table('apothic_enchanting:glowing_hellshelf',
        [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "extendedcrafting:luminessence"
            },
            "B": {
                "item": "minecraft:nether_bricks"
            },
            "C": {
                "item": "minecraft:glowstone"
            },
            "D": {
                "item": "apothic_enchanting:infused_hellshelf"
            }
        }
    )

    // Crystalline Seashelf
    event.recipes.extendedcrafting.shaped_table('apothic_enchanting:crystal_seashelf',
        [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "minecraft:prismarine_crystals"
            },
            "B": {
                "item": "minecraft:prismarine_bricks"
            },
            "C": {
                "item": "minecraft:sea_lantern"
            },
            "D": {
                "item": "apothic_enchanting:infused_seashelf"
            }
        }
    )

    // Heart-Forged Seashelf
    event.recipes.extendedcrafting.shaped_table('apothic_enchanting:heart_seashelf',
        [
            " AAA ",
            "ABCBA",
            "ADEDA",
            "ABDBA",
            " AAA "
        ],
        {
            "A": {
                "item": "minecraft:prismarine_shard"
            },
            "B": {
                "item": "minecraft:prismarine_bricks"
            },
            "C": {
                "item": "minecraft:heart_of_the_sea"
            },
            "D": {
                "item": "hazennstuff:arcane_sea_shell"
            },
            "E": {
                "item": "apothic_enchanting:infused_seashelf"
            }
        }
    )

    // Dormant Deepshelf
    event.recipes.extendedcrafting.shaped_table('apothic_enchanting:dormant_deepshelf',
        [
            "AAAAA",
            "ABBBA",
            "AAAAA",
            "ABBBA",
            "AAAAA"
        ],
        {
            "A": {
                "item": "minecraft:cracked_deepslate_tiles"
            },
            "B": {
                "item": "minecraft:book"
            }
        }
    )

    // Echoing Deepshelf
    event.recipes.malum.spirit_infusion(
        "apothic_enchanting:deepshelf",
        "apothic_enchanting:echoing_deepshelf",
        [
            "1x umbral",
            "64x arcane",
            "48x eldritch"
        ],
        [
            "12x minecraft:cracked_deepslate_tiles",
            "1x hazennstuff:eldritch_upgrade_orb"
        ]
    )

    // Soul-Touched Deepshelf
    event.recipes.malum.spirit_infusion(
        "apothic_enchanting:deepshelf",
        "apothic_enchanting:soul_touched_deepshelf",
        [
            "1x umbral",
            "64x wicked",
            "48x eldritch"
        ],
        [
            "12x minecraft:cracked_deepslate_tiles",
            "1x hazennstuff:eldritch_upgrade_orb"
        ]
    )


    // Echoing Sculkshelf
    event.recipes.malum.spirit_infusion(
        "apothic_enchanting:echoing_deepshelf",
        "apothic_enchanting:echoing_sculkshelf",
        [
            "1x umbral",
            "64x arcane",
            "64x eldritch"
        ],
        [
            "24x minecraft:sculk",
            "2x apothic_enchanting:warden_tendril",
            "1x hazennstuff:eldritch_upgrade_orb"
        ]
    )

    // Soul-Touched Sculkshelf
    event.recipes.malum.spirit_infusion(
        "apothic_enchanting:soul_touched_deepshelf",
        "apothic_enchanting:soul_touched_sculkshelf",
        [
            "1x umbral",
            "64x wicked",
            "64x eldritch"
        ],
        [
            "24x minecraft:sculk",
            "2x apothic_enchanting:warden_tendril",
            "1x hazennstuff:eldritch_upgrade_orb"
        ]
    )

    // Hellshelf of Sight
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABBBA",
            "BCDEB",
            "BDFDB",
            "BCDCB",
            "ABBBA"
        ],
        "key": {
            "A": {
                "item": "forbidden_arcanus:deorum_block"
            },
            "B": {
                "item": "minecraft:nether_bricks"
            },
            "C": {
                "items": "minecraft:potion",
                "components": {
                    "minecraft:potion_contents": {
                        "potion": "minecraft:long_night_vision"
                    }
                },
                "type": "neoforge:components"
            },
            "D": {
                "item": "apothic_enchanting:infused_hellshelf"
            },
            "E": {
                "item": "minecraft:spyglass"
            },
            "F": {
                "item": "minecraft:ender_eye"
            }
        },
        "result": {
            "id": "apothic_enchanting:sightshelf",
            "count": 1
        }
    })

    // Hellshelf of Masterful Sight
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABBBA",
            "BCDCB",
            "BDEDB",
            "BCDCB",
            "ABBBA"
        ],
        "key": {
            "A": {
                "item": "actuallyadditions:emeradic_crystal_block"
            },
            "B": {
                "item": "minecraft:nether_bricks"
            },
            "C": {
                "items": "minecraft:potion",
                "components": {
                    "minecraft:potion_contents": {
                        "potion": "minecraft:long_night_vision"
                    }
                },
                "type": "neoforge:components"
            },
            "D": {
                "item": "hazennstuff:zenalite_ingot"
            },
            "E": {
                "item": "apothic_enchanting:sightshelf"
            }
        },
        "result": {
            "id": "apothic_enchanting:sightshelf_t2",
            "count": 1
        }
    })

    // Seashelf of Aquatic Filtration
    event.recipes.extendedcrafting.shaped_table('apothic_enchanting:filtering_shelf',
        [
            "AAAAA",
            "ABCBA",
            "ADDDA",
            "ABCBA",
            "AAAAA"
        ],
        {
            "A": {
                "item": "minecraft:prismarine_bricks"
            },
            "B": {
                "item": "apothic_enchanting:infused_seashelf"
            },
            "C": {
                "item": "forbidden_arcanus:sea_prism"
            },
            "D": {
                "item": "minecraft:prismarine_brick_slab"
            }
        }
    )

    // Deepshelf of Arcane Treasures
    event.recipes.extendedcrafting.shaped_table('apothic_enchanting:treasure_shelf',
        [
            "ABBBA",
            "BCDCB",
            "BEFEB",
            "BCDCB",
            "ABBBA"
        ],
        {
            "A": {
                "item": "forbidden_arcanus:deorum_block"
            },
            "B": {
                "item": "minecraft:cracked_deepslate_tiles"
            },
            "C": {
                "item": "apothic_enchanting:deepshelf"
            },
            "D": {
                "item": "forbidden_arcanus:stellarite_block"
            },
            "E": {
                "item": "actuallyadditions:diamatine_crystal_block"
            },
            "F": {
                "item": "actuallyadditions:empowered_emeradic_crystal_block"
            }
        }
    )

    // Enchantment Library
    event.recipes.extendedcrafting.shaped_table('apothic_enchanting:library',
        [
            "AAAAA",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            "AAAAA"
        ],
        {
            "A": {
                "item": "minecraft:nether_bricks"
            },
            "B": {
                "item": "minecraft:ender_chest"
            },
            "C": {
                "tag": "apothic_enchanting:infused_shelves"
            },
            "D": {
                "item": "gaze:enchantment_workbench"
            }
        }
    )
})
ServerEvents.recipes(event => {

    // Arcane Core Recipe Change
    event.replaceInput({ id: 'ars_nouveau:arcane_core' }, 'minecraft:gold_ingot', 'forbidden_arcanus:deorum_ingot')

    // Gold Replacement for Hallowed Gold
    event.replaceInput({ id: /ars.*/ }, 'minecraft:gold_ingot', 'malum:hallowed_gold_ingot')
    event.replaceInput({ id: /ars.*/ }, 'minecraft:gold_nugget', 'malum:hallowed_gold_nugget')
    event.replaceInput({ id: /ars.*/ }, 'minecraft:gold_block', 'malum:block_of_hallowed_gold')
    event.replaceInput({ id: /starbunclemania.*/ }, 'minecraft:gold_ingot', 'malum:hallowed_gold_ingot')
    event.replaceInput({ id: /starbunclemania.*/ }, 'minecraft:gold_nugget', 'malum:hallowed_gold_nugget')
    event.replaceInput({ id: /starbunclemania.*/ }, 'minecraft:gold_block', 'malum:block_of_hallowed_gold')

    // Air Essence Simplification
    event.replaceInput({ output: 'ars_nouveau:air_essence' }, 'ars_nouveau:wilden_wing', 'forbidden_arcanus:bat_wing')

    // Early Occultism Chalk

    // White Chalk
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
            {
                "item": "occultism:otherworld_ashes"
            },
            {
                "item": "occultism:otherworld_ashes"
            },
            {
                "item": "occultism:otherworld_ashes"
            },
            {
                "item": "occultism:burnt_otherstone"
            },
            {
                "item": "occultism:burnt_otherstone"
            },
            {
                "item": "occultism:burnt_otherstone"
            }
        ],
        "reagent": {
            "item": "ars_nouveau:runic_chalk"
        },
        "result": {
            "count": 1,
            "id": "occultism:chalk_white_impure"
        },
        "sourceCost": 0
    })

    // Yellow Chalk
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
            {
                "item": "malum:ether"
            },
            {
                "tag": "c:dusts/gold"
            },
            {
                "item": "malum:ether"
            },
            {
                "tag": "c:dusts/gold"
            },
            {
                "item": "malum:ether"
            },
            {
                "tag": "c:dusts/gold"
            },
            {
                "item": "malum:ether"
            },
            {
                "tag": "c:dusts/gold"
            }
        ],
        "reagent": {
            "item": "occultism:chalk_white_impure"
        },
        "result": {
            "count": 1,
            "id": "occultism:chalk_yellow_impure"
        },
        "sourceCost": 1000
    })

    // Purple Chalk
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
            {
                "item": "hazennstuff:shadow_scale"
            },
            {
                "tag": "c:dusts/obsidian"
            },
            {
                "item": "hazennstuff:shadow_scale"
            },
            {
                "tag": "c:dusts/obsidian"
            },
            {
                "item": "hazennstuff:shadow_scale"
            },
            {
                "tag": "c:dusts/obsidian"
            },
            {
                "item": "hazennstuff:shadow_scale"
            },
            {
                "tag": "c:dusts/obsidian"
            },
        ],
        "reagent": {
            "item": "occultism:chalk_white_impure"
        },
        "result": {
            "count": 1,
            "id": "occultism:chalk_purple_impure"
        },
        "sourceCost": 1000
    })

    // Tablet Recipe Tweaks

    // Cloudshaping
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_cloudshaping',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:blue_archwood_log"
            },
            "B": {
                "item": "quark:bottled_cloud"
            }
        }
    )

    // Moonfall
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_moonfall',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:blue_archwood_log"
            },
            "B": {
                "item": "hexerei:moon_dust"
            }
        }
    )

    // Arcane Permanence
    event.recipes.extendedcrafting.shaped_table('ars_additions:ritual_chunk_loading',
        [
            " AAA ",
            "ABCBA",
            "ACCCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "ars_nouveau:blue_archwood_log"
            },
            "B": {
                "item": "ars_nouveau:conjuration_essence"
            },
            "C": {
                "item": "endermanoverhaul:bubble_pearl"
            }
        }
    )

    // Sanctuary
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_sanctuary',
        [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "ars_nouveau:blue_archwood_log"
            },
            "B": {
                "item": "cursedearth:blessed_flower"
            },
            "C": {
                "item": "ars_nouveau:water_essence"
            },
            "D": {
                "item": "minecraft:sea_lantern"
            }
        }
    )

    // Disintegration
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_disintegration',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:red_archwood_log"
            },
            "B": {
                "item": "malum:auric_embers"
            }
        }
    )

    // Sunrise
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_sunrise',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:red_archwood_log"
            },
            "B": {
                "item": "minecraft:sunflower"
            }
        }
    )

    // Conjure Desert Island
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_conjure_island_desert',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:red_archwood_log"
            },
            "B": {
                "item": "ars_nouveau:conjuration_essence"
            }
        }
    )

    // Burrowing
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_burrowing',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:green_archwood_log"
            },
            "B": {
                "item": "minecraft:iron_pickaxe"
            }
        }
    )

    // Awakening
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_awakening',
        [
            "ABC",
            "BDB",
            "EBF"
        ],
        {
            "A": {
                "item": "ars_nouveau:red_archwood_sapling"
            },
            "B": {
                "item": "ars_nouveau:green_archwood_log"
            },
            "C": {
                "item": "ars_nouveau:green_archwood_sapling"
            },
            "D": {
                "item": "ars_nouveau:source_gem_block"
            },
            "E": {
                "item": "ars_nouveau:blue_archwood_sapling"
            },
            "F": {
                "item": "ars_nouveau:purple_archwood_sapling"
            }
        }
    )

    // Attraction
    event.recipes.extendedcrafting.shaped_table('ars_elemental:ritual_attraction',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:green_archwood_log"
            },
            "B": {
                "item": "immersiveengineering:coil_lv"
            }
        }
    )

    // Conjure Plains Island
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_conjure_island_plains',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:green_archwood_log"
            },
            "B": {
                "item": "ars_nouveau:conjuration_essence"
            }
        }
    )

    // Forestation
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_forestation',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:green_archwood_log"
            },
            "B": {
                "item": "ars_nouveau:mendosteen_pod"
            }
        }
    )

    // Flowering
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_flowering',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:green_archwood_log"
            },
            "B": {
                "item": "forbidden_arcanus:yellow_orchid"
            }
        }
    )

    // Fertility
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_fertility',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:green_archwood_log"
            },
            "B": {
                "item": "reliquary:fertile_essence"
            }
        }
    )

    // Harvest
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_harvest',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:green_archwood_log"
            },
            "B": {
                "item": "minecraft:iron_hoe"
            }
        }
    )

    // Restoration
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_restoration',
        [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "ars_nouveau:green_archwood_log"
            },
            "B": {
                "item": "ars_nouveau:abjuration_essence"
            },
            "C": {
                "item": "ars_nouveau:earth_essence"
            },
            "D": {
                "item": "minecraft:golden_apple"
            }
        }
    )

    // Overgrowth
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_overgrowth',
        [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "ars_nouveau:green_archwood_log"
            },
            "B": {
                "item": "ars_nouveau:earth_essence"
            },
            "C": {
                "item": "reliquary:fertile_essence"
            },
            "D": {
                "item": "minecraft:bone_block"
            }
        }
    )

    // Pollination
    event.recipes.extendedcrafting.shaped_table('ars_elemental:ritual_pollination',
        [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "ars_nouveau:green_archwood_log"
            },
            "B": {
                "item": "minecraft:honey_bottle"
            },
            "C": {
                "item": "minecraft:honeycomb"
            },
            "D": {
                "item": "cursedearth:blessed_flower"
            }
        }
    )

    // Challenge
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_challenge',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:purple_archwood_log"
            },
            "B": {
                "tag": "c:drinks/ominous"
            }
        }
    )

    // Binding
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_binding',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:purple_archwood_log"
            },
            "B": {
                "item": "ars_nouveau:blank_parchment"
            }
        }
    )

    // Summon Animals
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_animal_summon',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:purple_archwood_log"
            },
            "B": {
                "tag": "ars_nouveau:magic_shards"
            }
        }
    )

    // Warping
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_warping',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:purple_archwood_log"
            },
            "B": {
                "item": "ars_nouveau:warp_scroll"
            }
        }
    )

    // Amnesia
    event.recipes.extendedcrafting.shaped_table('ars_affinity:ritual_amnesia',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:purple_archwood_log"
            },
            "B": {
                "item": "irons_spellbooks:shriving_stone"
            }
        }
    )

    // Gravity
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_gravity',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_nouveau:purple_archwood_log"
            },
            "B": {
                "item": "minecraft:anvil"
            }
        }
    )

    // Flight
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_flight',
        [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "ars_nouveau:purple_archwood_log"
            },
            "B": {
                "item": "endermanoverhaul:bubble_pearl"
            },
            "C": {
                "item": "minecraft:chorus_fruit"
            },
            "D": {
                "item": "minecraft:diamond"
            }
        }
    )

    // Scrying
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_scrying',
        [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "ars_nouveau:purple_archwood_log"
            },
            "B": {
                "item": "occultism:spirit_attuned_crystal"
            },
            "C": {
                "item": "minecraft:echo_shard"
            },
            "D": {
                "item": "occultism:divination_rod"
            }
        }
    )

    // Summon Wilden
    event.recipes.extendedcrafting.shaped_table('ars_nouveau:ritual_wilden_summon',
        [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "ars_nouveau:purple_archwood_log"
            },
            "B": {
                "item": "malum:imitation_flesh"
            },
            "C": {
                "item": "malum:imitation_heart"
            },
            "D": {
                "item": "endermanoverhaul:summoner_pearl"
            }
        }
    )

    // Locate Structure
    event.recipes.extendedcrafting.shaped_table('ars_additions:ritual_locate_structure',
        [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "ars_nouveau:purple_archwood_log"
            },
            "B": {
                "item": "endermanoverhaul:soul_pearl"
            },
            "C": {
                "item": "minecraft:echo_shard"
            },
            "D": {
                "item": "ars_additions:wayfinder"
            }
        }
    )

    // Fast Squirrels
    event.recipes.extendedcrafting.shaped_table('ars_elemental:ritual_squirrels',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_elemental:yellow_archwood_log"
            },
            "B": {
                "item": "minecraft:rabbit_foot"
            }
        }
    )

    // Repulsion
    event.recipes.extendedcrafting.shaped_table('ars_elemental:ritual_repulsion',
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            "A": {
                "item": "ars_elemental:yellow_archwood_log"
            },
            "B": {
                "item": "ars_nouveau:air_essence"
            }
        }
    )

    // Zapping
    event.recipes.extendedcrafting.shaped_table('ars_elemental:ritual_tesla_coil',
        [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "ars_elemental:yellow_archwood_log"
            },
            "B": {
                "item": "minecraft:lightning_rod"
            },
            "C": {
                "item": "irons_spellbooks:lightning_bottle"
            },
            "D": {
                "item": "reliquary:eye_of_the_storm"
            }
        }
    )

    // Detection
    event.recipes.extendedcrafting.shaped_table('ars_elemental:ritual_detection',
        [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        {
            "A": {
                "item": "ars_elemental:yellow_archwood_log"
            },
            "B": {
                "item": "minecraft:glowstone_dust"
            },
            "C": {
                "item": "minecraft:spider_eye"
            },
            "D": {
                "item": "minecraft:ender_eye"
            }
        }
    )

    // Forestation Archwood
    event.recipes.extendedcrafting.shaped_table('ars_elemental:ritual_archwood_forestation',
        [
            "ABA",
            "CDE",
            "AFA"
        ],
        {
            "A": {
                "item": "ars_nouveau:purple_archwood_log"
            },
            "B": {
                "item": "ars_nouveau:fire_essence"
            },
            "C": {
                "item": "ars_nouveau:air_essence"
            },
            "D": {
                "item": "ars_nouveau:ritual_forestation"
            },
            "E": {
                "item": "ars_nouveau:water_essence"
            },
            "F": {
                "item": "ars_nouveau:earth_essence"
            }
        }
    )

    // Conjure Archwood Forest
    event.recipes.extendedcrafting.shaped_table('ars_elemental:ritual_archwood_forest',
        [
            "ABC",
            "DEF",
            "CGA"
        ],
        {
            "A": {
                "item": "ars_nouveau:abjuration_essence"
            },
            "B": {
                "item": "ars_nouveau:red_archwood_log"
            },
            "C": {
                "item": "ars_nouveau:conjuration_essence"
            },
            "D": {
                "item": "ars_elemental:yellow_archwood_log"
            },
            "E": {
                "item": "ars_nouveau:purple_archwood_log"
            },
            "F": {
                "item": "ars_nouveau:blue_archwood_log"
            },
            "G": {
                "item": "ars_nouveau:green_archwood_log"
            }
        }
    )
})
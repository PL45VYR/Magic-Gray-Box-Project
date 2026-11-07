ServerEvents.recipes(event => {
    // Mundabitur Recipe Change
    event.recipes.extendedcrafting.shapeless_table('2x forbidden_arcanus:mundabitur_dust',
        [
            'forbidden_arcanus:arcane_crystal_dust',
            'minecraft:redstone',
            'malum:blazing_quartz',
            'malum:grim_talc',
            'minecraft:phantom_membrane',
            'malum:hex_ash'
        ]
    )

    // Mundabitur Recipe (Later Buff)
    event.custom({
        "type": "eidolon_repraised:crucible",
        "steps": [
            {
                "items": [
                    { "item": "forbidden_arcanus:arcane_crystal_dust" },
                    { "item": "eidolon_repraised:crimson_essence" }
                ],
                "stirs": 1
            },
            {
                "items": [
                    { "item": "minecraft:bone_meal" }
                ],
                "stirs": 2
            },
            {
                "items": [
                    { "item": "malum:auric_embers" }
                ]
            }
        ],
        "result": {
            "id": "forbidden_arcanus:mundabitur_dust",
            "count": 4
        }
    })

    // Clibano Forge Recipe
    event.recipes.extendedcrafting.shaped_table({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABBBA",
            "ABDBA",
            "ABBBA",
            "AAAAA"
        ],
        "key": {
            "A": {
                "item": "forbidden_arcanus:polished_darkstone"
            },
            "B": {
                "item": "malum:auric_embers"
            },
            "C": {
                "item": "minecraft:blast_furnace"
            }
        },
        "result": {
            "id": "forbidden_arcanus:clibano_core"
        }
    })

    // Deorum Recipe (Later Buff)
    event.custom({
        "type": "forbidden_arcanus:clibano_combustion",
        "category": "misc",
        "cooking_time": 100,
        "enhancer": "forbidden_arcanus:artisan_relic",
        "experience": 1.0,
        "fire_type": "soul_fire",
        "ingredients": {
            "first": {
                "item": "eidolon_repraised:arcane_gold_ingot"
            },
            "second": {
                "item": "forbidden_arcanus:mundabitur_dust"
            }
        },
        "residue": {
            "type": "forbidden_arcanus:gold",
            "chance": 0.4
        },
        "result": {
            "count": 1,
            "id": "forbidden_arcanus:deorum_ingot"
        }
    })

    // Iesnium Clibano Recipe
    event.custom({
        "type": "forbidden_arcanus:clibano_combustion",
        "category": "misc",
        "cooking_time": 100,
        "experience": 1.0,
        "fire_type": "enchanted_fire",
        "ingredients": {
            "tag": "c:dusts/iesnium"
        },
        "residue": {
            "type": "forbidden_arcanus:diamond",
            "chance": 0.25
        },
        "result": {
            "count": 1,
            "id": "occultism:iesnium_ingot"
        }
    })

    // Redstone Ingot Recipe
    event.custom({
        "type": "forbidden_arcanus:clibano_combustion",
        "category": "misc",
        "cooking_time": 100,
        "enhancer": "forbidden_arcanus:artisan_relic",
        "experience": 0.4,
        "fire_type": "fire",
        "ingredients": {
            "first": {
                "item": "minecraft:iron_ingot"
            },
            "second": {
                "item": "actuallyadditions:restonia_crystal"
            }
        },
        "residue": {
            "type": "forbidden_arcanus:iron",
            "chance": 0.1
        },
        "result": {
            "count": 1,
            "id": "extendedcrafting:redstone_ingot"
        }
    })

    // Zenalite Ingot Recipe
    event.custom({
        "type": "forbidden_arcanus:clibano_combustion",
        "category": "misc",
        "cooking_time": 400,
        "enhancer": "forbidden_arcanus:artisan_relic",
        "experience": 2.5,
        "fire_type": "enchanted_fire",
        "ingredients": {
            "first": {
                "item": "hazennstuff:raw_zenalite"
            },
            "second": {
                "item": "hazennstuff:nether_star_fragment"
            }
        },
        "residue": {
            "type": "forbidden_arcanus:rune",
            "chance": 0.5
        },
        "result": {
            "count": 1,
            "id": "hazennstuff:zenalite_ingot"
        }
    })

    // Crimson Stone Recipe
    event.recipes.malum.spirit_infusion(
        "4x eidolon_repraised:crimson_gem",
        "forbidden_arcanus:crimson_stone",
        [
            "64x sacred",
            "64x arcane",
            "64x eldritch"
        ],
        [
            "forbidden_arcanus:enchanted_soul"
        ]
    )
})

LootJS.lootTables(event => {
    event.getLootTable("cataclysm:entities/maledictus").firstPool().addEntry("forbidden_arcanus:maledictus_pact")
})
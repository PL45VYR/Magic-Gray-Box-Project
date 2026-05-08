ServerEvents.recipes(event => {

    // Novice Spell Book Recipe
    event.recipes.malum.spirit_infusion(
        "occultism:taboo_book", //Input
        "ars_nouveau:novice_spell_book", //Result
        [
            "32x arcane",
            "16x sacred"
        ], //Spirits
        [
            "8x ars_nouveau:air_essence",
            "8x ars_nouveau:earth_essence",
            "8x ars_nouveau:fire_essence",
            "8x ars_nouveau:water_essence"
        ] //Additional Inputs, Defaults to []
    )

    // Deorum Recipe
    event.recipes.malum.spirit_infusion(
        "malum:hallowed_gold_ingot",
        "forbidden_arcanus:deorum_ingot",
        [
            "2x arcane",
            "1x wicked",
            "1x infernal"
        ],
        [
            "2x forbidden_arcanus:mundabitur_dust",
            "2x forbidden_arcanus:arcane_crystal_dust"
        ]
    )

    // Clibano Core Recipe
    event.recipes.malum.spirit_infusion(
        "blast_furnace",
        "forbidden_arcanus:clibano_core",
        [
            "16x infernal",
            "8x wicked",
            "8x arcane"
        ],
        [
            "16x forbidden_arcanus:darkstone",
            "8x malum:auric_embers"
        ]
    )

    // Runewood Totem Recipe Change
    event.replaceInput({ output: "malum:runewood_totem_base" }, "malum:hex_ash", "forbidden_arcanus:mundabitur_dust")

    // Obsidian Transmutation
    event.custom({
        "type": "malum:unchained_transmutation",
            "group": "nether",
                "input": {
            "item": "minecraft:obsidian"
        },
        "result": {
            "count": 1,
                "id": "minecraft:crying_obsidian"
        }
    })
    event.custom({
        "type": "malum:unchained_transmutation",
            "group": "nether",
                "input": {
            "item": "minecraft:crying_obsidian"
        },
        "result": {
            "count": 1,
                "id": "railcraft:crushed_obsidian"
        }
    })
    event.custom({
        "type": "malum:unchained_transmutation",
            "group": "nether",
                "input": {
            "item": "railcraft:crushed_obsidian"
        },
        "result": {
            "count": 1,
                "id": "forbidden_arcanus:darkstone"
        }
    })
    event.custom({
        "type": "malum:unchained_transmutation",
            "group": "nether",
                "input": {
            "item": "forbidden_arcanus:darkstone"
        },
        "result": {
            "count": 1,
                "id": "malum:blighted_earth"
        }
    })
})

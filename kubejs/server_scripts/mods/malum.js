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

    // Corrupti Dust Recipe
    event.recipes.malum.spirit_infusion(
        "forbidden_arcanus:arcane_crystal_dust",
        "forbidden_arcanus:corrupti_dust",
        [
            "1x umbral"
        ],
        [
            "8x forbidden_arcanus:obsidiansteel_ingot",
            "8x blaze_powder",
            "8x nether_wart"
        ]
    )

    // Lime Chalk Recipe
    event.recipes.malum.spirit_infusion(
        "occultism:chalk_white_impure",
        "occultism:chalk_lime_impure",
        [
            "48x earthen",
            "36x arcane",
            "24x eldritch"
        ],
        [
            "12x eidolon_repraised:avennian_sprig",
            "8x occultism:research_fragment_dust",
            "2x malum:fused_consciousness"
        ]
    )

    // Light Gray Chalk Recipe
    event.recipes.malum.spirit_infusion(
        "occultism:chalk_white_impure",
        "occultism:chalk_light_gray_impure",
        [
            "36x wicked",
            "20x arcane",
            "8x eldritch"
        ],
        [
            "20x occultism:silver_dust",
            "12x occultism:crushed_calcite",
            "4x eidolon_repraised:wraith_heart"
        ]
    )

    // Green Chalk Recipe
    event.recipes.malum.spirit_infusion(
        "occultism:chalk_white_impure",
        "occultism:chalk_green_impure",
        [
            "64x earthen",
            "64x sacred",
            "48x eldritch"
        ],
        [
            "64x oritech:biomass",
            "40x malum:rotting_essence",
            "occultism:nature_paste"
        ]
    )

    // Light Blue Chalk Recipe
    event.recipes.malum.spirit_infusion(
        "occultism:chalk_white_impure",
        "occultism:chalk_light_blue_impure",
        [
            "64x aerial",
            "64x aqueous",
            "48x eldritch"
        ],
        [
            "64x occultism:crushed_packed_ice",
            "48x occultism:crushed_blue_ice",
            "8x irons_spellbooks:permafrost_shard"
        ]
    )

    // Pink Chalk Recipe
    event.recipes.malum.spirit_infusion(
        "occultism:chalk_white_impure",
        "occultism:chalk_pink_impure",
        [
            "64x arcane",
            "64x sacred",
            "48x eldritch"
        ],
        [
            "64x malum:mnemonic_fragment",
            "54x eidolon_repraised:oanna_bloom",
            "40x occultism:demonic_meat"
        ]
    )
})

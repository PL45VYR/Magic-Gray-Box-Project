ServerEvents.recipes(event => {
    // Improved Pewter Blend Recipe
    event.custom({
        "type": "eidolon_repraised:crucible",
        "steps": [
            {
                "items": [
                    { "tag": "c:dusts/lead" },
                    { "tag": "c:dusts/tin" }
                ]
            }
        ],
        "result": {
            "id": "eidolon_repraised:pewter_blend",
            "count": 2
        }
    })

    // Runewood Recipe
    event.custom({
        "type": "eidolon_repraised:crucible",
        "steps": [
            {
                "items": [
                    { "item": "eidolon_repraised:lesser_soul_gem" }
                ]
            },
            {
                "items": [
                    { "item": "eidolon_repraised:merammer_resin" },
                    { "item": "eidolon_repraised:merammer_resin" }
                ],
                "stirs": 2
            },
            {
                "items": [
                    { "item": "eidolon_repraised:illwood_sapling" }
                ]
            }
        ],
        "result": {
            "id": "malum:runewood_sapling",
            "count": 1
        }
    })

    // Spirit Altar Recipe
    event.custom({
        "type": "eidolon_repraised:worktable",
        "pattern": [
            "rsr",
            "sls",
            "rsr"
        ],
        "reagents": [
            "gggg"
        ],
        "key": {
            "r": {
                "item": "malum:runewood_planks"
            },
            "s": {
                "item": "malum:refined_soulstone"
            },
            "l": {
                "item": "malum:runewood_log"
            },
            "g": {
                "item": "minecraft:gold_ingot"
            }
        },
        "result": {
            "id": "malum:spirit_altar"
        }
    })

    // Imbuement Chamber Recipe
    event.custom({
        "type": "eidolon_repraised:worktable",
        "pattern": [
            "hah",
            "a a",
            "hah"
        ],
        "reagents": [
            "hhhh"
        ],
        "key": {
            "h": {
                "item": "malum:hallowed_gold_ingot"
            },
            "a": {
                "item": "ars_nouveau:archwood_planks"
            }
        },
        "result": {
            "id": "ars_nouveau:imbuement_chamber"
        }
    })

    // Scribe's Table Recipe
    event.custom({
        "type": "eidolon_repraised:worktable",
        "pattern": [
            "sss",
            "h h",
            "l l"
        ],
        "reagents": [
            "gi f"
        ],
        "key": {
            "s": {
                "item": "ars_nouveau:archwood_slab"
            },
            "h": {
                "item": "malum:hallowed_gold_ingot"
            },
            "l": {
                "tag": "c:logs/archwood"
            },
            "g": {
                "item": "ars_nouveau:source_gem"
            },
            "i": {
                "item": "eidolon_repraised:magic_ink"
            },
            "f": {
                "item": "minecraft:feather"
            }
        },
        "result": {
            "id": "ars_nouveau:scribes_table"
        }
    })
})
ServerEvents.recipes(event => {
    // Primogel Recipe
    event.recipes.extendedcrafting.shaped_table('justdirethings:gooblock_tier1',
        [
            'CSACASC',
            'SASASAS',
            'ASCHCSA',
            'CAHLHAC',
            'ASCHCSA',
            'SASASAS',
            'CSACASC'
        ],
        {
            'C': {
                "item": 'minecraft:clay'
            },
            'S': {
                "item": 'minecraft:sugar'
            },
            'A': {
                "item": 'eidolon_repraised:enchanted_ash'
            },
            'H': {
                "item": 'reliquary:zombie_heart'
            },
            'L': {
                "item": 'malum:malignant_lead'
            }
        }
    )

    // Ferricore Recipe Tweak
    event.custom({
        "type": "justdirethings:goospread",
        "craftingDuration": 2400,
        "id": "justdirethings:ferricore_ore-goospread",
        "input": {
            "Name": "minecraft:raw_iron_block"
        },
        "output": {
            "Name": "justdirethings:raw_ferricore_ore",
            "Properties": {
                "facing": "north"
            }
        },
        "tierRequirement": 1
    })

    // Blazegold Recipe Tweak
    event.custom({
        "type": "justdirethings:goospread",
        "craftingDuration": 2400,
        "id": "justdirethings:blazegold_ore-goospread",
        "input": {
            "Name": "minecraft:raw_gold_block"
        },
        "output": {
            "Name": "justdirethings:raw_blazegold_ore",
            "Properties": {
                "facing": "north"
            }
        },
        "tierRequirement": 2
    })

    // Celestigem Recipe Tweak
    event.custom({
        "type": "justdirethings:goospread_tag",
        "craftingDuration": 4800,
        "id": "justdirethings:celestigem_ore-goospread",
        "input": {
            "tag": "c:storage_blocks/diamatine_crystal"
        },
        "output": {
            "Name": "justdirethings:raw_celestigem_ore",
            "Properties": {
                "facing": "north"
            }
        },
        "tierRequirement": 3
    })
})
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
})
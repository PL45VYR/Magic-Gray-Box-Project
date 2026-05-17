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
            "type": "forbidden_arcanus:rune",
            "chance": 0.1
        },
        "result": {
            "count": 1,
            "id": "extendedcrafting:redstone_ingot"
        }
    })
})
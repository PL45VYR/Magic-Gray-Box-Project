ServerEvents.recipes(event => {
    // Mundabitur Recipe Change
    event.recipes.extendedcrafting.shapeless_table('forbidden_arcanus:mundabitur_dust',
        [
            'forbidden_arcanus:arcane_crystal_dust',
            'minecraft:redstone',
            'minecraft:blaze_powder',
            'malum:grim_talc',
            'minecraft:phantom_membrane',
            'malum:hex_ash'
        ]
    )
})
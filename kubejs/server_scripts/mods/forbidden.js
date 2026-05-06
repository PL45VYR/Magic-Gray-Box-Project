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
})
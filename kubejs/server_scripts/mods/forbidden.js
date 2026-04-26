ServerEvents.recipes(event => {
    // Mundabitur Recipe Change
    event.shapeless(
        Item.of('forbidden_arcanus:mundabitur_dust', 1),
        [
            'forbidden_arcanus:arcane_crystal_dust',
            'minecraft:redstone',
            'minecraft:blaze_powder',
            'malum:grim_talc',
            'minecraft:phantom_membrane',
            'minecraft:gunpowder'
        ]
    )
})
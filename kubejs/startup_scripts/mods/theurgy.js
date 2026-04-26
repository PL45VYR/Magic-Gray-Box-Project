// Theurgy Startup
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('item', (event) => {
    event.create('alchemical_sulfur_andesite_alloy', 'theurgy:alchemical_sulfur')
        .sourceItem('create:andesite_alloy')
        .sourceName("Andesite Alloy")
        .derivativeTier("rare")
        .sulfurType("other_minerals")

    event.create('alchemical_sulfur_pewter', 'theurgy:alchemical_sulfur')
        .sourceItem('eidolon_repraised:pewter_ingot')
        .sourceName("Pewter")
        .derivativeTier("common")
        .sulfurType("metals")

    event.create('alchemical_sulfur_arcane_crystal', 'theurgy:alchemical_sulfur')
        .sourceItem('forbidden_arcanus:arcane_crystal')
        .sourceName("Arcane Crystal")
        .derivativeTier("common")
        .sulfurType("gems")

    event.create('alchemical_sulfur_blazing_quartz', 'theurgy:alchemical_sulfur')
        .sourceItem('malum:blazing_quartz')
        .sourceName("Blazing Quartz")
        .derivativeTier("common")
        .sulfurType("gems")
})
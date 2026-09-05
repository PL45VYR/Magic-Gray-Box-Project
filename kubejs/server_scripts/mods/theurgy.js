ServerEvents.recipes(event => {

    // Calcination Recipes

    // Liquefaction Recipes
    event.recipes.theurgy.liquefaction(
        'kubejs:alchemical_sulfur_pewter',
        'eidolon_repraised:pewter_blend',
        '10x theurgy:sal_ammoniac',
        100
    )

    event.recipes.theurgy.liquefaction(
        'kubejs:alchemical_sulfur_pewter',
        'eidolon_repraised:pewter_ingot',
        '10x theurgy:sal_ammoniac',
        100
    )

    event.recipes.theurgy.liquefaction(
        'kubejs:alchemical_sulfur_arcane_crystal',
        'forbidden_arcanus:arcane_crystal',
        '10x theurgy:sal_ammoniac',
        100
    )

    event.recipes.theurgy.liquefaction(
        '4x kubejs:alchemical_sulfur_arcane_crystal',
        '#forbidden_arcanus:arcane_crystal_ores',
        '10x theurgy:sal_ammoniac',
        100
    )

    // Distillation Recipes

    // Incubation Recipes
    event.recipes.theurgy.incubation(
        'eidolon_repraised:pewter_ingot',   // Output Item
        'theurgy:mercury_shard',            // Mercury Slot
        'theurgy:alchemical_salt_mineral',  // Salt Slot
        'kubejs:alchemical_sulfur_pewter',  // Sulfur Slot
        100
    )

    event.recipes.theurgy.incubation(
        'create:andesite_alloy',
        'theurgy:mercury_shard',
        'theurgy:alchemical_salt_mineral',
        'kubejs:alchemical_sulfur_andesite_alloy',
        100
    )

    event.recipes.theurgy.incubation(
        'forbidden_arcanus:arcane_crystal',
        'theurgy:mercury_shard',
        'theurgy:alchemical_salt_mineral',
        'kubejs:alchemical_sulfur_arcane_crystal',
        100
    )

    // Accumulation Recipes

    // Reformation Recipes
    event.recipes.theurgy.reformation(
        "kubejs:alchemical_sulfur_andesite_alloy",
        [
            "kubejs:alchemical_sulfur_pewter",
            "kubejs:alchemical_sulfur_pewter"
        ],
        "theurgy:alchemical_sulfur_andesite",
        20,
        100
    )

    // Fermentation Recipes

    // Digestion Recipes

    // Mercury Catalyst Ingredient Replacement
    event.replaceInput({ output: "theurgy:mercury_catalyst" }, 'minecraft:iron_ingot', 'eidolon_repraised:pewter_ingot')
    event.replaceInput({ output: "theurgy:reformation_source_pedestal" }, 'minecraft:iron_ingot', 'eidolon_repraised:pewter_ingot')
})
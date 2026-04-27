ServerEvents.recipes(event => {

    // Calcination Recipes

    // Liquefaction Recipes
    event.recipes.theurgy.liquefaction(
        'kubejs:alchemical_sulfur_pewter',  // Output Item
        'eidolon_repraised:pewter_blend',   // Input Item
        '10x theurgy:sal_ammoniac',           // Input Fluid
        100                                   // Processing Time
    )

    event.recipes.theurgy.liquefaction(
        'kubejs:alchemical_sulfur_pewter',  // Output Item
        'eidolon_repraised:pewter_ingot',   // Input Item
        '10x theurgy:sal_ammoniac',           // Input Fluid
        100                                   // Processing Time
    )

    // Distillation Recipes

    // Incubation Recipes
    event.recipes.theurgy.incubation(
        'eidolon_repraised:pewter_ingot',   // Output Item
        'theurgy:mercury_shard',            // Mercury Slot
        'theurgy:alchemical_salt_mineral',  // Salt Slot
        'kubejs:alchemical_sulfur_pewter',  // Sulfur Slot
        100                                   // Processing Time
    )

    event.recipes.theurgy.incubation(
        'create:andesite_alloy',
        'theurgy:mercury_shard',
        'theurgy:alchemical_salt_mineral',
        'kubejs:alchemical_sulfur_andesite_alloy',
        100
    )

    // Accumulation Recipes

    // Reformation Recipes
    event.recipes.theurgy.reformation(
        "kubejs:alchemical_sulfur_andesite_alloy",  // Output Item
        [
            "kubejs:alchemical_sulfur_pewter",      // Input Items
            "kubejs:alchemical_sulfur_pewter"
        ],
        "theurgy:alchemical_sulfur_andesite",       // Target Item
        20,                                           // Mercury Cost
        100                                           // Processing Time
    )

    // Fermentation Recipes

    // Digestion Recipes

    // Mercury Catalyst Ingredient Replacement
    event.replaceInput({ output: "theurgy:mercury_catalyst" }, 'minecraft:iron_ingot', 'eidolon_repraised:pewter_ingot')
})
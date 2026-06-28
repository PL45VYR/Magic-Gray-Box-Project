ServerEvents.recipes(event => {

    // Spirit Fire Recipes
    event.recipes.occultism.spirit_fire('minecraft:blackstone', 'forbidden_arcanus:darkstone')
    event.recipes.occultism.spirit_fire('malum:azure_runewood_sapling', 'malum:runewood_sapling')

    // Otherrock and Otherstone Recipe Tweaks
    event.replaceInput({id: 'occultism:spirit_fire/otherrock'}, 'minecraft:diorite', 'malum:tainted_rock')
    event.replaceInput({id: 'occultism:spirit_fire/otherstone'}, 'minecraft:andesite', 'malum:twisted_rock')

    // Research Fragment Recipe Tweaks
    event.replaceInput({output: 'occultism:research_fragment_dust'}, 'minecraft:experience_bottle', 'forbidden_arcanus:xpetrified_orb')

    // First Frontier Recipe
    event.recipes.occultism.ritual(
        Item.of('gateways:gate_pearl[gateways:gateway="apotheosis:tiered/frontier"]'),
        [
            "reliquary:chelicerae",
            "reliquary:chelicerae",
            "occultism:iesnium_ingot",
            "reliquary:rib_bone",
            "reliquary:rib_bone",
            "reliquary:zombie_heart",
            "reliquary:zombie_heart",
            "reliquary:zombie_heart"
        ],
        'endermanoverhaul:summoner_pearl',
        'occultism:craft_djinni'
    ).dummy('kubejs:dummy_craft_frontier')
    .entityToSacrifice(EntityToSacrifice.of('friendsandfoes:glare', 'Glare'))
})
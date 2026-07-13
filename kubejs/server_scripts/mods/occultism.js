ServerEvents.recipes(event => {

    // Spirit Fire Recipes
    event.recipes.occultism.spirit_fire('minecraft:blackstone', 'forbidden_arcanus:darkstone')
    event.recipes.occultism.spirit_fire('malum:azure_runewood_sapling', 'malum:runewood_sapling')

    // Otherrock and Otherstone Recipe Tweaks
    event.replaceInput({ id: 'occultism:spirit_fire/otherrock' }, 'minecraft:diorite', 'malum:tainted_rock')
    event.replaceInput({ id: 'occultism:spirit_fire/otherstone' }, 'minecraft:andesite', 'malum:twisted_rock')

    // Research Fragment Recipe Tweaks
    event.replaceInput({ output: 'occultism:research_fragment_dust' }, 'minecraft:experience_bottle', 'forbidden_arcanus:xpetrified_orb')

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

    // Gray Paste Recipe Tweak
    event.replaceInput({ output: 'occultism:gray_paste' }, 'minecraft:phantom_membrane', 'actuallyadditions:empowered_enori_crystal')

    // Blazebloom Goo Recipe
    event.recipes.occultism.ritual(
        Item.of('justdirethings:gooblock_tier2'),
        [
            "justdirethings:gooblock_tier1",
            "reliquary:molten_core",
            "malum:blazing_quartz",
            "minecraft:nether_wart",
            "reliquary:molten_core",
            "reliquary:molten_core",
            "malum:blazing_quartz",
            "minecraft:nether_wart",
        ],
        'occultism:book_of_binding_bound_afrit',
        'occultism:craft_afrit'
    ).dummy('kubejs:dummy_craft_blazebloom_goo')

    // Void Shimmer Goo Recipe
    event.recipes.occultism.ritual(
        Item.of('justdirethings:gooblock_tier3'),
        [
            "oritech:enderic_compound",
            "oritech:enderic_compound",
            "oritech:enderic_compound",
            "oritech:enderic_compound",
            "enderio:ender_crystal_powder",
            "enderio:ender_crystal_powder",
            "reliquary:nebulous_heart",
            "reliquary:nebulous_heart",
        ],
        'justdirethings:gooblock_tier2',
        'occultism:contact_wild_spirit'
    ).dummy('kubejs:dummy_misc_voidshimmer_goo')
    .entityToSacrifice(EntityToSacrifice.of("minecraft:cows", "Cows"))
})
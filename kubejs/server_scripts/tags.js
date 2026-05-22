ServerEvents.tags('item', event => {
    // Tag Tweaks
    // Modified tags go here

    event.add("actuallyadditions:tiny_coals", /malum:.*coal_fragment/)

    // Theurgy Sulfur Tweaks

    event.add("theurgy:alchemical_sulfurs", 'kubejs:alchemical_sulfur_pewter')
    event.add("theurgy:alchemical_sulfurs/common", 'kubejs:alchemical_sulfur_pewter')
    event.add("theurgy:alchemical_sulfurs/metals", 'kubejs:alchemical_sulfur_pewter')
    event.add("theurgy:alchemical_sulfurs/metals/common", 'kubejs:alchemical_sulfur_pewter')

    event.add("theurgy:alchemical_sulfurs", 'kubejs:alchemical_sulfur_andesite_alloy')
    event.add("theurgy:alchemical_sulfurs/rare", 'kubejs:alchemical_sulfur_andesite_alloy')
    event.add("theurgy:alchemical_sulfurs/metals", 'kubejs:alchemical_sulfur_andesite_alloy')
    event.add("theurgy:alchemical_sulfurs/metals/rare", 'kubejs:alchemical_sulfur_andesite_alloy')

    // Malum Soul Shattering Tweaks
    
    let weapons = event.get('lodestone:enchantable/weapon').getObjectIds()
    let weapon_whitelist = Ingredient.of(/hazennstuff.*/)
    weapons.forEach(weapon => {
        if (weapon_whitelist.test(weapon)) {
            event.add('malum:soul_shatter_capable_weapon', weapon)
        }
    })

    // EMI Collapsible Tags

    event.add('kubejs:seed_pouch', "quark:seed_pouch")
    event.add('kubejs:fluid_tank', "mekanism:creative_fluid_tank")
    event.add('kubejs:chemical_tank', "mekanism:creative_chemical_tank")
    event.add('kubejs:potion_charm', 'apotheosis:potion_charm')
    event.add('kubejs:potion_bucket', 'immersiveengineering:potion_bucket')
    event.add('kubejs:broken_spawner', 'enderio:broken_spawner')
    event.add('kubejs:soul_vial', 'enderio:soul_vial')
    event.add('kubejs:charm_fragment', 'reliquary:mob_charm_fragment')
    event.add('kubejs:mob_charm', 'reliquary:mob_charm')
    event.add('kubejs:affix_gem', 'apotheosis:gem')
    event.add('kubejs:foil', 'xycraft_machines:foil')
})
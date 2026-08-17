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
    event.add('c:tools/scythe', /eidolon_repraised:.*scythe/)
    event.add('malum:scythe', /eidolon_repraised:.*scythe/)

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

    // Ars Nouveau Rituals

    let ritual_blacklist = [
        "ars_nouveau:ritual_flight",
        "ars_nouveau:ritual_containment",
        "ars_nouveau:ritual_restoration",
        "ars_nouveau:ritual_scrying",
        "ars_nouveau:ritual_sanctuary",
        "ars_nouveau:ritual_overgrowth",
        "ars_nouveau:ritual_wilden_summon",
        "ars_elemental:ritual_tesla_coil",
        "ars_elemental:ritual_detection",
        "ars_elemental:ritual_pollination",
        "ars_additions:ritual_locate_structure",
        "ars_affinity:ritual_amnesia"
    ]
    ritual_blacklist.forEach(ritual => {
        event.add('ars_nouveau:ritual_trade_blacklist', ritual)
    })

    // Custom Tag: Scrap Dusts
    let scrap_dusts = ['aluminum', 'iron', 'lead', 'silver', 'tin']
    scrap_dusts.forEach(dust => {
        event.add('c:scrap_dusts', `#c:dusts/${dust}`)
    })

    // Custom Tag: Small Dusts
    let small_dusts = ['nickel', 'platinum', 'iron', 'copper', 'gold', 'uranium']
    small_dusts.forEach(small_dust => {
        event.add('c:small_dusts', `oritech:small_${small_dust}_dust`)
        event.add(`c:small_dusts/${small_dust}`, `oritech:small_${small_dust}_dust`)
    })

    // Custom Tag: Small Clumps
    let small_clumps = ['nickel', 'platinum', 'iron', 'copper', 'gold']
    small_clumps.forEach(small_clump => {
        event.add('c:small_clumps', `oritech:small_${small_clump}_clump`)
        event.add(`c:small_clumps/${small_clump}`, `oritech:small_${small_clump}_clump`)
    })

    // Custom Tag: Metal Gems
    let metal_gems = ['nickel', 'platinum', 'iron', 'copper', 'gold', 'uranium']
    metal_gems.forEach(metal_gem => {
        event.add('c:metal_gems', `oritech:${metal_gem}_gem`)
        event.add(`c:metal_gems/${metal_gem}`, `oritech:${metal_gem}_gem`)
    })
})
ServerEvents.recipes(event => {
    // Major Mod Removal (for mod content that has not been implemented yet)

    // Industrial Foregoing
    event.remove({ output: /industrialforegoing:machine_frame.*/ })

    // Mekanism
    event.remove({ input: "mekanism:ingot_osmium", not: { output: "ae2:blank_pattern" } })
    event.remove({ input: /mekanism:alloy.*/ })
    event.remove({ input: "mekanism:steel_casing" })
    event.remove({ output: /mekanism:fluid.*/ })
    event.remove({ input: /mekanism:pellet.*/ })
    event.remove({ input: /evolvedmekanism.*/ })

    // Oritech
    /*event.remove({ output: "oritech:fragment_forge_block" })
    event.remove({ output: "oritech:drone_port_block" })
    event.remove({ output: "oritech:shrinker_block" })
    event.remove({ output: "oritech:arcane_augment_station" })
    event.remove({ output: "oritech:accelerator_motor" })
    event.remove({ output: "oritech:unstable_container" })
    event.remove({ output: "oritech:accelerator_controller" })
    event.remove({ output: "oritech:enchanter_block" })
    event.remove({ output: "oritechthings:particle_accelerator_speed_sensor" })
    event.remove({ output: "oritech:enchantment_catalyst_block" })
    event.remove({ output: "oritech:spawner_controller_block" })
    event.remove({ output: "oritechthings:accelerator_magnetic_field" })*/

    // AE2
    //event.remove({ mod: "ae2" })
    //event.remove({ mod: "ae2things" })
    //event.remove({ mod: "ae2_mega_things" })
    //event.remove({ mod: "megacells" })
    //event.remove({ mod: "aeinfinitybooster" })
    event.remove({ mod: "extendedae" })
    event.remove({ mod: "advanced_ae" })
    //event.remove({ mod: "appflux" })
    event.remove({ mod: "appmek" })
    //event.remove({ mod: "rep_ae2_bridge" })
    //event.remove({ output: "ae2:spatial_pylon" })
    //event.remove({ output: "ae2:spatial_io_port" })
    //event.remove({ output: "ae2:quantum_ring" })

    // Just Dire Things
    // event.remove({ mod: "justdirethings" })
    // event.remove({ output: "justdirethings:gooblock_tier2" })
    //event.remove({ output: "justdirethings:gooblock_tier3" })
    //event.remove({ output: "justdirethings:gooblock_tier4" })

    // Explorer Compass
    event.remove({ output: "explorerscompass:explorerscompass" })

    // Ender Storage
    event.remove({ mod: "enderstorage" })

    // Entangled
    event.remove({ mod: "entangled" })

    // Extended Crafting
    //event.remove({ mod: "extendedcrafting", output: /.*component.*/ })
    //event.remove({ mod: "extendedcrafting", output: /.*catalyst.*/ })
    //event.remove({ mod: "extendedcrafting", output: /.*enhanced_ender.*/ })
    event.remove({ mod: "extendedcrafting", output: /.*ultimate.*/ })
    //event.remove({ output: "extendedcrafting:compressor" })

    // Replication
    //event.remove({ mod: "replication" })

    // Stargate Journey
    //event.remove({ mod: "sgjourney", not: { output: "sgjourney:fire_pit" } })

    // Flux Networks
    event.remove({ mod: "fluxnetworks" })

    // Ars Nouveau
    //event.remove({ id: /.*book_upgrade/ })

})
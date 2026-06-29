ServerEvents.recipes(event => {
    // Major Mod Removal (for mod content that has not been implemented yet)

    // Industrial Foregoing
    event.remove({ output: /industrialforegoing:machine_frame.*/ })

    // Mekanism
    event.remove({ input: "mekanism:ingot_osmium" })
    event.remove({ input: /mekanism:alloy.*/ })
    event.remove({ input: "mekanism:steel_casing" })
    event.remove({ output: /mekanism:fluid.*/ })
    event.remove({ input: /mekanism:pellet.*/ })
    event.remove({ input: /evolvedmekanism.*/ })

    // Oritech
    event.remove({ id: /oritech:crafting\/.*/ })
    event.remove({ id: /oritech:motor\/.*/ })

    // AE2
    event.remove({ mod: "ae2" })
    event.remove({ mod: "ae2things" })
    event.remove({ mod: "ae2_mega_things" })
    event.remove({ mod: "megacells" })
    event.remove({ mod: "aeinfinitybooster" })
    event.remove({ mod: "extendedae" })
    event.remove({ mod: "advanced_ae" })
    event.remove({ mod: "appflux" })
    event.remove({ mod: "appmek" })
    event.remove({ mod: "rep_ae2_bridge" })

    // Just Dire Things
    // event.remove({ mod: "justdirethings" })
    // event.remove({ output: "justdirethings:gooblock_tier2" })
    event.remove({ output: "justdirethings:gooblock_tier3" })
    event.remove({ output: "justdirethings:gooblock_tier4" })

    // Explorer Compass
    event.remove({ output: "explorerscompass:explorerscompass" })

    // Ender IO
    /*event.remove({
        mod: "enderio", not: [
            { output: 'enderio:dark_steel_block' },
            { output: 'enderio:dark_steel_nugget' }
        ]
    })*/

    // Ender Storage
    event.remove({ mod: "enderstorage" })

    // Entangled
    event.remove({ mod: "entangled" })

    // Extended Crafting
    //event.remove({ mod: "extendedcrafting", output: /.*auto.*/ })
    //event.remove({ mod: "extendedcrafting", output: /.*component.*/ })
    //event.remove({ mod: "extendedcrafting", output: /.*catalyst.*/ })
    //event.remove({ mod: "extendedcrafting", output: /.*ender.*/ })
    event.remove({ mod: "extendedcrafting", output: /.*ultimate.*/ })
    event.remove({ output: "extendedcrafting:compressor" })

    // Replication
    event.remove({ mod: "replication" })

    // Stargate Journey
    event.remove({ mod: "sgjourney", not: { output: "sgjourney:fire_pit" } })

    // Dyson Cube Project
    event.remove({ mod: "dysoncubeproject" })

    // Powah
    //event.remove({ mod: "powah" })

    // Flux Networks
    event.remove({ mod: "fluxnetworks" })

    // Hostile Neural Networks
    event.remove({ mod: "hostilenetworks" })

    // Ars Nouveau
    event.remove({ id: /.*book_upgrade/ })

})
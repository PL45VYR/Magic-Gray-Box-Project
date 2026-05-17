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
    // event.remove({ output: /oritech.*/ })

    // AE2
    event.remove({ mod: /.*ae.*/ })
    event.remove({ mod: /.*app.*/ })

    // Just Dire Things
    // event.remove({ mod: "justdirethings" })
    event.remove({ output: "justdirethings:gooblock_tier2" })
    event.remove({ output: "justdirethings:gooblock_tier3" })
    event.remove({ output: "justdirethings:gooblock_tier4" })

    // Ender IO
    event.remove({ mod: "enderio" })

    // Actually Additions
    // event.remove({ mod: "actuallyadditions" })

    // Modular Routers
    event.remove({ mod: "modularrouters" })

    // Replication
    event.remove({ mod: "replication" })

    // Stargate Journey
    event.remove({ mod: "sgjourney", not: { output: "sgjourney:fire_pit" } })

    // Dyson Cube Project
    event.remove({ mod: "dysoncubeproject" })

    // XyCraft
    // event.remove({ mod: /xycraft.*/ })

    // Powah
    event.remove({ mod: "powah" })

    // Flux Networks
    event.remove({ mod: "fluxnetworks" })

    // Hostile Neural Networks
    event.remove({ mod: "hostilenetworks" })

    // Laser IO
    event.remove({ mod: "laserio" })

})
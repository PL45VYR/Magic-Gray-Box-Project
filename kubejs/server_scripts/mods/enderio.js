ServerEvents.recipes(event => {
    // Dark Steel Replacements
    event.replaceInput({ mod: "hazennstuff" }, '#c:ingots/steel', 'enderio:dark_steel_ingot')
    event.replaceInput({ type: "oritech:assembler" }, '#c:ingots/steel', 'enderio:dark_steel_ingot')
    event.replaceInput({ id: /oritech:crafting.*/ }, '#c:ingots/steel', 'enderio:dark_steel_ingot')
    event.replaceInput({ id: /oritech:motor.*/ }, '#c:ingots/steel', 'enderio:dark_steel_ingot')

    // Alloy Recipe Builder
    const alloying = (output, input, alloy_power) => {
        event.recipes.enderio.alloy_smelting(Item.of(output, 2), input, alloy_power)
        event.recipes.oritech.foundry(Item.of(output, 2), input)
    }
    const imbalanced_alloying = (output, input, alloy_power) => {
        event.recipes.enderio.alloy_smelting(output, input, alloy_power)
        event.recipes.oritech.foundry(output, input)
    }

    // Conductive Alloy
    alloying('enderio:conductive_alloy_ingot', ['#c:ingots/copper', '#c:ingots/silver'], 3200)
    // Energetic Alloy
    alloying('enderio:energetic_alloy_ingot', ['#c:ingots/blazegold', '#c:ingots/conductive_alloy'], 4800)
    // Vibrant Alloy
    imbalanced_alloying('enderio:vibrant_alloy_ingot', ['#c:ingots/energetic_alloy', 'create:experience_block'], 5600)
    // Redstone Alloy
    alloying('enderio:redstone_alloy_ingot', ['#c:ingots/energetic_alloy', '#c:ingots/redstone_ingot'], 4800)
    // Pulsating Alloy
    imbalanced_alloying('enderio:pulsating_alloy_ingot', ['powah:steel_energized', '#c:dusts/ender_pearl'], 4800)
    // Soularium
    imbalanced_alloying('enderio:soularium_ingot', ['powah:steel_energized', 'minecraft:soul_sand'], 5600)
    // End Steel
    imbalanced_alloying('enderio:end_steel_ingot', ['powah:steel_energized', 'minecraft:end_stone'], 6400)

    // Pulsating Crystal Recipe Tweak
    event.replaceInput({ output: "enderio:pulsating_crystal" }, 'minecraft:diamond', 'actuallyadditions:diamatine_crystal')

    // Vibrating Crystal Recipe Tweak
    event.replaceInput({ output: "enderio:vibrant_crystal" }, 'minecraft:emerald', 'actuallyadditions:emeradic_crystal')
})
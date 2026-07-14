ServerEvents.recipes(event => {
    // Iron to Steel Replacement
    event.replaceInput({ mod: 'ae2', type: 'minecraft:crafting_shaped', not: { output: /.*storage_cell.*/, output: /.*card.*/ } }, '#c:ingots/iron', '#c:ingots/steel')
    event.replaceInput({ mod: 'extendedae', type: 'minecraft:crafting_shaped', not: { output: /.*storage_cell.*/, output: /.*card.*/ } }, '#c:ingots/iron', '#c:ingots/steel')

    // Glass to Strengthened Glass Replacement
    event.replaceInput({ mod: 'ae2' }, '#c:glass_blocks/cheap', '#railcraft:strengthened_glass')
    event.replaceInput({ mod: 'extendedae' }, '#c:glass_blocks/cheap', '#railcraft:strengthened_glass')

    // Copper to Energetic Alloy Replacement
    event.replaceInput({ mod: 'ae2', not: { output: /.*cell.*/ } }, '#c:ingots/copper', '#c:ingots/energetic_alloy')
    event.replaceInput({ mod: 'extendedae', not: { output: /.*cell.*/ } }, '#c:ingots/copper', '#c:ingots/energetic_alloy')
    event.replaceInput({ mod: 'appflux', not: { output: /.*cell.*/ } }, '#c:ingots/copper', '#c:ingots/energetic_alloy')

    // Fluix Recipe Tweak
    event.replaceInput({ output: 'ae2:fluix_crystal' }, '#c:gems/quartz', '#c:gems/fluxite')

    // Inscriber Recipe Tweak
    event.replaceInput({ output: 'ae2:inscriber' }, '#c:ingots/energetic_alloy', 'oritech:machine_core_5')
    event.replaceInput({ output: 'ae2:inscriber' }, 'minecraft:piston', 'oritech:motor')

    // Blank Pattern Recipe Tweak
    event.replaceInput({ output: 'ae2:blank_pattern'}, '#c:ingots/steel', '#c:ingots/osmium')

    // Pattern Encoder Recipe Tweak
    event.replaceInput({output: 'ae2:pattern_encoding_terminal'}, 'ae2:engineering_processor', 'extendedcrafting:enhanced_ender_catalyst')

    // Crafting Unit Recipe Tweak
    event.replaceInput({ output: 'ae2:crafting_unit'}, '#c:ingots/steel', '#c:ingots/eclipsealloy')
    
    // Table to Catalyst Recipe Tweak
    event.replaceInput({ output: 'ae2:pattern_provider'}, 'minecraft:crafting_table', 'extendedcrafting:enhanced_ender_catalyst')
    event.replaceInput({ output: 'ae2:crafting_card'}, 'minecraft:crafting_table', 'extendedcrafting:enhanced_ender_catalyst')

})
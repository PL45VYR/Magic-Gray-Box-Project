ServerEvents.recipes(event => {
    // Dark Steel Replacements
    event.replaceInput({ mod: "hazennstuff" }, '#c:ingots/steel', 'enderio:dark_steel_ingot')
    event.replaceInput({ type: "oritech:assembler" }, '#c:ingots/steel', 'enderio:dark_steel_ingot')
    event.replaceInput({ id: /oritech:crafting.*/}, '#c:ingots/steel', 'enderio:dark_steel_ingot')
    event.replaceInput({ id: /oritech:motor.*/}, '#c:ingots/steel', 'enderio:dark_steel_ingot')

})
ServerEvents.recipes(event => {
    // Atomic Reconstruction Tweaks
    event.replaceInput({ output: "actuallyadditions:restonia_crystal" }, "minecraft:redstone", "minecraft:redstone_block")
    event.replaceInput({ output: "actuallyadditions:palis_crystal" }, "minecraft:lapis_lazuli", "minecraft:lapis_block")
    event.replaceInput({ output: "actuallyadditions:diamatine_crystal" }, "minecraft:diamond", "minecraft:diamond_block")
    event.replaceInput({ output: "actuallyadditions:void_crystal" }, "minecraft:coal", "minecraft:coal_block")
    event.replaceInput({ output: "actuallyadditions:emeradic_crystal" }, "minecraft:emerald", "minecraft:emerald_block")
    event.replaceInput({ output: "actuallyadditions:enori_crystal" }, "minecraft:iron_ingot", "minecraft:iron_block")
})
RecipeViewerEvents.removeCategories(event => {
    // Category Removal
    // Categories of removed recipes go here
    event.remove("railcraft:blasting_category")
    event.remove("railcraft:coking_category")
    event.remove("railcraft:crushing_category")
})

RecipeViewerEvents.removeEntriesCompletely("item", event => {
    // Item Removal
    // Removed items due to redundancy go here
    event.remove("railcraft:blast_furnace_bricks")
    event.remove("railcraft:coke_oven_bricks")
    event.remove("railcraft:crusher")
    event.remove("dimpaintings:end_painting")
    event.remove(/actuallyadditions:tiny_c.*/)
    event.remove("create:rose_quartz")
    event.remove("oritech:steel_block")
})

ServerEvents.recipes(event => {
    // Recipe Removal
    // Removed recipes go here

    // Actually Additions
    event.remove({ input: /actuallyadditions:tiny_c.*/, output: /actuallyadditions:tiny_c.*/ })

    // Ars Nouveau
    event.remove({ id: /ars_nouveau:novice.*/ })
    event.remove({ input: "lapis_lazuli", output: "ars_nouveau:source_gem" })
    event.remove({ output: "ars_nouveau:imbuement_chamber" })
    event.remove({ output: "ars_nouveau:scribes_table" })

    // Create
    event.remove({ id: "create:crafting/materials/andesite_alloy" })
    event.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" })
    event.remove({ id: /create:mixing\/andesite_alloy.*/ })
    event.remove({ id: "create:crafting/kinetics/empty_blaze_burner" })

    // Dim Paintings
    event.remove("dimpaintings:end_painting")
    event.remove("dimpaintings:nether_painting")

    // Eidolon Repraised
    event.remove({ output: "eidolon_repraised:pewter_blend" })
    event.remove({ output: "eidolon_repraised:pewter_ingot" })
    event.remove({ output: "eidolon_repraised:worktable" })

    // Ender IO

    // Extended Crafting
    event.remove({ id: "extendedcrafting:black_iron_ingot" })
    event.remove({ id: "extendedcrafting:black_iron_slate" })
    event.remove({ id: "extendedcrafting:luminessence" })
    event.remove({ id: "extendedcrafting:basic_component" })
    event.remove({ id: "extendedcrafting:basic_catalyst" })

    // Farming for Blockheads
    event.remove({ output: /ars_nouveau:.*/, type: "farmingforblockheads:market" })
    event.remove({ output: /malum:.*/, type: "farmingforblockheads:market" })

    // Forbidden Arcanus
    event.remove({ id: "forbidden_arcanus:deorum_ingot" })
    event.remove({ id: "forbidden_arcanus:clibano_core" })
    event.remove({ id: "forbidden_arcanus:mundabitur_dust" })

    // Hexerei

    // Immersive Engineering
    event.remove({ output: "immersiveengineering:alloybrick" })
    event.remove({ id: "immersiveengineering:crafting/component_iron" })
    event.remove({ id: "immersiveengineering:crafting/component_steel" })
    event.remove({ id: /immersiveengineering:crafting\/.*hammering/ })
    event.remove({ output: "#c:plates", type: "railcraft:rolling" })
    event.remove({ id: "immersiveengineering:crafting/steel_scaffolding_standard" })
    event.remove({ id: "immersiveengineering:crafting/alu_scaffolding_standard" })
    event.remove({ output: "immersiveengineering:wirecoil_copper" })
    event.remove({ output: "immersiveengineering:wirecoil_electrum" })
    event.remove({ output: "immersiveengineering:wirecoil_steel" })
    event.remove({ output: "immersiveengineering:wirecoil_redstone" })
    event.remove({ output: /immersiveengineering:.*_engineering/ })

    // Irons Spellbooks
    event.remove({ output: "hazennstuff:rose_quartz" })

    // Malum
    event.remove({ output: "malum:spirit_altar" })

    // Occultism
    event.remove({ output: "occultism:chalk_white_impure" })
    event.remove({ output: "occultism:chalk_yellow_impure" })
    event.remove({ output: "occultism:chalk_purple_impure" })

    // Oritech
    event.remove({ id: /oritech:crafting\/alloy\/.*/ })
    event.remove({ id: /oritech:primitive_compat\/.*/ })
    event.remove({ id: "oritech:mixing/compat/create/biosteel" })
    event.remove({ id: "oritech:mixing/compat/create/steel" })
    event.remove({ output: "oritech:raw_silicon" })
    event.remove({ id: "oritech:centrifuge/carbon"})

    // Railcraft Reborn
    event.remove({ id: /railcraft:.*crafted_with_ingots/ })
    event.remove({ id: "railcraft:rolling/rebar_bronze" })
    event.remove({ id: "railcraft:rolling/rebar_invar" })
    event.remove({ id: "railcraft:rolling/rebar_iron" })
    event.remove({ id: "railcraft:bag_of_cement_slag" })
    event.remove({ output: "railcraft:blast_furnace_bricks" })
    event.remove({ output: "railcraft:coke_oven_bricks" })
    event.remove({ output: "railcraft:crusher" })

    // Theurgy
    event.remove({ output: "theurgy:pyromantic_brazier" })
})

ServerEvents.tags("item", event => {
    // Individual Tag Removal
    // Removed tags from items go here

    event.remove("c:crops/coffee/cooked", "rusticdelight:coffee_beans")
    event.remove("c:gems/quartz", "hazennstuff:rose_quartz")
    event.remove("theurgy:gems/mercury/low", "hazennstuff:rose_quartz")
    event.remove("ae2:all_quartz", "hazennstuff:rose_quartz")
    event.remove("ae2:all_nether_quartz", "hazennstuff:rose_quartz")
    event.remove("c:ores", "hazennstuff:rose_quartz")
    event.remove("c:gems", "hazennstuff:rose_quartz")

    // Tag Deletion
    // Unneeded tags go here

    event.removeAll("railcraft:ingot_chest_loot")
})

LootJS.modifiers(event => {
    // Loot Modifier Removal
    // Removed loot modifiers go here

    // Ars Nouveau
    event.addTableModifier(/.*chests\/.*/).removeLoot(/ars_.*/)

    // Eidolon Repraised
    event.addTableModifier(/.*catacomb.*/).removeLoot("minecraft:soul_sand")

    // Extra Delight
    event.addTableModifier(/.*chests\/.*/).removeLoot(/extradelight:.*/)

    // Forbidden Arcanus
    event.addTableModifier(/.*chests\/.*/).removeLoot(/forbidden_arcanus.*/)
})

LootJS.lootTables(event => {
    // Loot Table Removal
    // Removed loot tables go here
})
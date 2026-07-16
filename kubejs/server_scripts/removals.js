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
    event.remove("railcraft:bushing_gear")
    event.remove("hazennstuff:crude_metal")
    event.remove("oritech:raw_silicon")
    event.remove("actuallyadditions:iron_casing")
    event.remove('enderio:powered_spawner')
    event.remove(/sophisticated.*copper.*/)
    event.remove('sophisticatedstorage:stack_upgrade_tier_1_plus')
    event.remove('sophisticatedbackpacks:stack_upgrade_starter_tier')
    event.remove(/.*omega_tier/)
    event.remove(/.*survival_infinity_upgrade/)
    event.remove(/igleelib.*/)
    event.remove(/.*aiot/)
    event.remove('ars_nouveau:ritual_containment')
    event.remove('hazennstuff:starkissed_zenalite')
    event.remove('laserio:logic_chip_raw')
    event.remove(/.*uraninite_ore.*/)
    event.remove(/.*uraninite_raw/)
    event.remove(/immersivepetroleum:crude.*/)
    event.remove(/immersivepetroleum:naphtha.*/)
    event.remove('extendedae:quartz_blend')
})

RecipeViewerEvents.removeEntriesCompletely("fluid", event => {
    // Fluid Removal
    // Removed fluids due to redundancy go here
    event.remove(/immersivepetroleum:crude.*/)
    event.remove(/immersivepetroleum:naphtha.*/)
})

ServerEvents.recipes(event => {
    // Recipe Removal
    // Removed recipes go here

    // Actually Additions
    event.remove({ input: /actuallyadditions:tiny_c.*/, output: /actuallyadditions:tiny_c.*/ })
    event.remove({ output: /.*aiot/ })
    event.remove({ output: /.*crystal_block/, type: "actuallyadditions:laser" })
    event.remove({ output: /.*crystal_block/, type: "actuallyadditions:empowering" })
    event.remove({ output: "actuallyadditions:lava_factory_casing" })
    event.remove({ output: "actuallyadditions:atomic_reconstructor" })
    event.remove({ output: "actuallyadditions:ender_casing" })
    event.remove({ output: "actuallyadditions:empowerer" })
    event.remove({ type: "actuallyadditions:empowering", not: { output: "actuallyadditions:empowered_canola_seed" } })

    // AE2
    event.remove({ input: /.*quartz.*/, output: 'oritech:silicon', not: { type: 'mekanism:enriching' } })
    event.remove({ input: 'extendedae:quartz_blend' })
    event.remove({ output: 'extendedae:quartz_blend' })
    event.remove({ id: "ae2:transform/entangled_singularity_from_pearl" })
    event.remove({ output: "ae2:charger" })
    event.remove({ id: "ae2:network/cells/view_cell" })

    // Apotheosis
    event.remove({ output: /apothic_enchanting:.*shelf.*/, type: "minecraft:crafting_shaped" })
    event.remove({ output: "apothic_enchanting:library" })

    // Ars Nouveau
    event.remove({ id: /ars_nouveau:novice.*/ })
    event.remove({ input: "lapis_lazuli", output: "ars_nouveau:source_gem" })
    event.remove({ output: "ars_nouveau:imbuement_chamber" })
    event.remove({ output: "ars_nouveau:scribes_table" })
    event.remove({ output: /ars_.*:ritual.*/, not: { output: "ars_nouveau:ritual_brazier" } })

    // Compact Crafting
    event.remove({ id: "compactmachines:wall" })
    event.remove({ output: "compactcrafting:field_projector" })
    event.remove({ output: "compactcrafting:base" })
    event.remove({ output: "compactcrafting:projector_dish" })
    event.remove({ output: "compactcrafting:rescan_proxy" })
    event.remove({ output: "compactcrafting:match_proxy" })

    // Create
    event.remove({ id: "create:crafting/materials/andesite_alloy" })
    event.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" })
    event.remove({ id: /create:mixing\/andesite_alloy.*/ })
    event.remove({ id: "create:crafting/kinetics/empty_blaze_burner" })
    event.remove({ output: "create:track" })
    event.remove({ id: "create:mixing/brass_ingot" })
    event.remove({ input: /apoth.*/, output: /create_enchantment_industry.*/ })
    event.remove({ output: /.*industry:infuser/ })

    // Dim Paintings
    event.remove("dimpaintings:end_painting")
    event.remove("dimpaintings:nether_painting")

    // Eidolon Repraised
    event.remove({ output: "eidolon_repraised:pewter_blend" })
    event.remove({ output: "eidolon_repraised:pewter_ingot" })
    event.remove({ output: "eidolon_repraised:worktable" })

    // Ender IO
    event.remove({ id: "enderio:iron_gear" })
    event.remove({ output: "enderio:dark_steel_ingot" })
    event.remove({ id: /.*alloy_smelting.*ingot/ })
    event.remove({ output: /enderio.*chassis/ })
    event.remove({ output: "enderio:conduit_binder" })
    event.remove({ output: 'enderio:powered_spawner' })

    // Extended Crafting
    event.remove({ id: "extendedcrafting:black_iron_ingot" })
    event.remove({ id: "extendedcrafting:black_iron_slate" })
    event.remove({ id: "extendedcrafting:luminessence" })
    event.remove({ id: "extendedcrafting:basic_component" })
    event.remove({ id: "extendedcrafting:basic_catalyst" })
    event.remove({ id: "extendedcrafting:advanced_component" })
    event.remove({ id: "extendedcrafting:advanced_catalyst" })
    event.remove({ id: "extendedcrafting:elite_component" })
    event.remove({ id: "extendedcrafting:elite_catalyst" })
    event.remove({ id: "extendedcrafting:crystaltine_ingot" })
    event.remove({ id: "extendedcrafting:redstone_ingot" })
    event.remove({ id: "extendedcrafting:flux_crafter" })
    event.remove({ id: "extendedcrafting:flux_alternator" })
    event.remove({ mod: "extendedcrafting", output: /.*auto.*/ })
    event.remove({ id: "extendedcrafting:enhanced_redstone_ingot" })
    event.remove({ id: "extendedcrafting:flux_star" })
    event.remove({ id: "extendedcrafting:redstone_component" })
    event.remove({ id: "extendedcrafting:redstone_catalyst" })
    event.remove({ id: "extendedcrafting:enhanced_redstone_component" })
    event.remove({ id: "extendedcrafting:enhanced_redstone_catalyst" })
    event.remove({ id: "extendedcrafting:crystaltine_component" })
    event.remove({ id: "extendedcrafting:crystaltine_catalyst" })
    event.remove({ id: "extendedcrafting:ender_ingot" })
    event.remove({ id: "extendedcrafting:ender_component" })
    event.remove({ id: "extendedcrafting:ender_catalyst" })
    event.remove({ id: "extendedcrafting:ender_crafter" })
    event.remove({ id: "extendedcrafting:ender_alternator" })


    // Farming for Blockheads
    event.remove({ output: /ars_nouveau:.*/, type: "farmingforblockheads:market" })
    event.remove({ output: /malum:.*/, type: "farmingforblockheads:market" })

    // Forbidden Arcanus
    event.remove({ id: "forbidden_arcanus:deorum_ingot" })
    event.remove({ id: "forbidden_arcanus:clibano_core" })
    event.remove({ id: "forbidden_arcanus:mundabitur_dust" })
    event.remove({ id: "forbidden_arcanus:corrupti_dust" })
    event.remove({ output: "forbidden_arcanus:arcane_crystal_dust", type: "minecraft:smelting" })
    event.remove({ output: "forbidden_arcanus:arcane_crystal_dust", type: "minecraft:blasting" })

    // Gateways
    event.remove({ id: "apotheosis:gateways/tiered/frontier" })

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
    event.remove({ output: "immersiveengineering:radiator" })
    event.remove({ output: "immersiveengineering:generator" })
    event.remove({ id: "immersiveengineering:squeezer/graphite_dust" })
    event.remove({ input: "#c:dusts/coal", output: "#c:ingots/steel" })
    event.remove({ id: /engineeredcompatibility:arcfurnace\/ae2.*/ })
    event.remove({ id: "immersiveengineering:crafting/blastbrick" })
    event.remove({ id: /engineeredcompatibility:arcfurnace\/forbidden.*/ })
    event.remove({ output: "immersivepetroleum:seismic_survey" })

    // Industrial Foregoing
    event.remove({ mod: "industrialforegoing", output: "#c:gears" })

    // Irons Spellbooks
    event.remove({ output: "hazennstuff:rose_quartz" })
    event.remove([{ output: "hazennstuff:crude_metal" }, { input: "hazennstuff:crude_metal" }])
    event.remove({ output: "hazennstuff:lemon" })
    event.remove({ output: "hazennstuff:nether_star_fragment" })
    event.remove({ output: "hazennstuff:starkissed_zenalite" })
    event.remove({ id: /.*zenalite_from.*/ })
    event.remove({ output: "irons_spellbooks:cinderous_soulcaller" })

    // Just Dire Things
    event.remove({ output: "justdirethings:gooblock_tier1" })
    event.remove({ output: "justdirethings:gooblock_tier2" })
    event.remove({ output: "justdirethings:gooblock_tier3" })
    event.remove({ id: "justdirethings:raw_ferricore_ore-goospread" })
    event.remove({ id: "justdirethings:raw_blazegold_ore-goospread" })
    event.remove({ id: "justdirethings:raw_celestigem_ore-goospread" })
    event.remove({ id: "justdirethings:raw_eclipsealloy_ore-goospread" })

    // Malum
    event.remove({ output: "malum:spirit_altar" })

    // Mekanism
    event.remove({ id: /.*alloying\/compat\/enderio.*/ })

    // Miscellaneous
    event.remove({ id: "endermanoverhaul:ender_eye" })
    event.remove({ output: /endrem.*/ })
    event.remove({ output: /igleelib.*/ })
    event.remove({ output: /cataclysm.*eye/ })
    event.remove({ id: "gag:time_sand_pouch" })
    event.remove({ mod: "modularrouters", not: [{ output: /.*extruder_module_1/ }, { output: /.*breaker.*/ }] })
    event.remove({ mod: "laserio", not: { id: /.*nbtclear/ }, not: { output: /.*book.*/ } })
    event.remove({ mod: "dysoncubeproject", not: { output: /dysoncubeproject.*package/ } })
    event.remove({ mod: "hostilenetworks", not: { output: /.*fab_directive/ }, not: [{ input: /.*_prediction/ }, { output: /.*learn.*/ }, { output: /.*blank.*/ }] })

    // Occultism
    event.remove({ output: /occultism.*impure/ })
    event.remove({ output: "occultism:iesnium_ingot", type: "minecraft:smelting" })
    event.remove({ output: "occultism:iesnium_ingot", type: "minecraft:blasting" })
    event.remove({ id: /engineeredcompatibility:arcfurnace\/occultism.*/ })

    // Oritech
    event.remove({ id: /oritech:crafting\/alloy\/.*/ })
    event.remove({ id: /oritech:primitive_compat\/.*/ })
    event.remove({ id: "oritech:mixing/compat/create/biosteel" })
    event.remove({ id: "oritech:mixing/compat/create/steel" })
    event.remove({ input: "oritech:raw_silicon" })
    event.remove({ id: "oritech:centrifuge/carbon" })
    event.remove({ id: /.*alloy\/compat\/enderio.*/ })
    event.remove({ id: /compat/, output: "oritech:fluxite" })
    event.remove({ output: "#c:ingots/energite", id: /.*compat.*/ })
    event.remove({ id: "oritech:foundry/alloy/duratium" })
    event.remove({ output: "#c:ingots/duratium", id: /.*compat.*/ })
    event.remove({ output: "#c:ingots/adamant", id: /.*compat.*/ })
    event.remove({ id: "oritech:pulverizer/pearl_enderic" })
    event.remove({ id: /.*fluid\/siliconwash/, not: { id: /.*bad/ } })
    event.remove({ id: /.*motor\/advbattery/ })
    event.remove({ id: /.*motor\/manualbattery/ })
    event.remove({ id: /.*motor\/overchargedcrystal/ })
    event.remove({ output: /oritech:machine_core.*/ })
    event.remove({ id: "oritech:crafting/manualresin" })
    event.remove({ id: "oritech:crafting/claybeads" })
    event.remove({ id: "oritech:crafting/fluidpipe" })
    event.remove({ id: "oritech:compat/enderio/crafting/fluidpipe" })
    event.remove({ id: "oritech:crafting/fluidpipe" })
    event.remove({ id: "oritech:crafting/addon/fluid" })
    event.remove({ output: "oritech:pulverizer_block" })
    event.remove({ output: "oritech:powered_furnace_block" })
    event.remove({ output: "oritech:basic_generator_block" })
    event.remove({ output: "oritech:pump_block" })
    event.remove({ output: "oritech:pipe_booster_block" })
    event.remove({ output: "oritech:treefeller_block" })
    event.remove({ output: "oritech:assembler_block" })
    event.remove({ output: "oritech:charger_block" })
    event.remove({ output: "oritech:cooler_block" })
    event.remove({ output: "oritech:lava_generator_block" })
    event.remove({ output: "oritech:steam_engine_block" })
    event.remove({ output: "oritech:refinery_module_block" })
    event.remove({ output: "oritech:centrifuge_block" })
    event.remove({ output: "oritech:foundry_block" })
    event.remove({ output: "oritech:bio_generator_block" })
    event.remove({ output: "oritech:placer_block" })
    event.remove({ output: "oritech:fertilizer_block" })
    event.remove({ output: "oritech:refinery_block" })
    event.remove({ output: "oritech:laser_arm_block" })
    event.remove({ output: "oritech:fuel_generator_block" })
    event.remove({ output: "oritech:destroyer_block" })
    event.remove({ output: "oritech:augment_application_block" })
    event.remove({ output: "oritech:accelerator_ring" })
    event.remove({ output: "oritech:simple_augment_station" })
    event.remove({ output: "oritech:atomic_forge_block" })
    event.remove({ output: "oritech:deep_drill_block" })
    event.remove({ output: "oritech:big_solar_panel_block" })
    event.remove({ output: "oritech:advanced_augment_station" })
    event.remove({ output: "oritech:reactor_controller" })
    event.remove({ output: "oritech:reactor_fuel_port" })
    event.remove({ output: "oritech:reactor_absorber_port" })
    event.remove({ output: "oritech:reactor_energy_port" })
    event.remove({ output: "oritech:reactor_redstone_port" })
    event.remove({ output: "oritech:particle_collector_block" })

    // Powah
    event.remove({ output: /powah:crystal.*/ })
    event.remove({ output: /.*uraninite_ore.*/ })
    event.remove({ id: /.*uraninite_from.*/, not: /.*_uranium.*/ })
    event.remove({ output: /.*sulfur_uraninite/ })
    event.remove({ output: 'powah:dielectric_casing' })
    event.remove({ output: 'powah:dielectric_paste' })
    event.remove({ output: /.*dielectric_rod.*/, not: { input: /.*dielectric_rod.*/ } })
    event.remove({ output: 'powah:steel_energized' })
    event.remove({ output: 'powah:photoelectric_pane' })
    event.remove({ output: 'powah:energizing_orb' })

    // Railcraft Reborn
    event.remove({ id: /railcraft:.*crafted_with_ingots/ })
    event.remove({ id: /railcraft:rolling\/rebar.*/ })
    event.remove({ id: "railcraft:bag_of_cement_slag" })
    event.remove({ output: "railcraft:blast_furnace_bricks" })
    event.remove({ output: "railcraft:coke_oven_bricks" })
    event.remove({ output: "railcraft:crusher" })
    event.remove({ id: /railcraft:.*/, output: "#c:gears" })
    event.remove({ output: "railcraft:bushing_gear" })

    // Theurgy
    event.remove({ output: "theurgy:pyromantic_brazier" })

    // Sophisticated Core
    event.remove({ type: 'sophisticatedstorage:storage_tier_upgrade' })
    event.remove({ type: 'sophisticatedbackpacks:backpack_upgrade' })
    event.remove({ output: /sophisticatedstorage:.*tier_upgrade/, not: { output: /.*basic_tier.*/ } })
    event.remove({ output: /sophisticated.*copper.*/ })
    event.remove({ output: /.*upgrade/, mod: 'sophisticatedbackpacks' })
    event.remove({ output: /.*upgrade/, mod: 'sophisticatedstorage' })
    event.remove({ output: /sophisticatedstorage:storage.*/ })
    event.remove({ output: 'sophisticatedstorage:controller' })

    // XyCraft
    event.remove({ output: "xycraft_machines:machine_base" })
    event.remove({ output: "xycraft_machines:extractor" })
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

    // Actually Additions
    event.addTableModifier(/.*chests\/.*/).removeLoot(/actuallyadditions.*/)

    // Ars Nouveau
    event.addTableModifier(/.*chests\/.*/).removeLoot(/ars_.*/)

    // End Remastered
    event.addTableModifier(/.*/).removeLoot(/.*endrem.*/)

    // Ender IO
    event.removeGlobalModifiers("enderio:alloy_loot")

    // Forbidden Arcanus
    event.addTableModifier(/.*chests\/.*/).removeLoot(/forbidden_arcanus.*/)
})

LootJS.lootTables(event => {
    // Loot Table Removal
    // Removed loot tables go here

    // Ender IO
    let enderio_tables = event.getLootTableIds(/enderio.*/)

    enderio_tables.forEach(table => {
        event.getLootTable(table).removeItem("enderio:dark_steel_ingot")
        event.getLootTable(table).removeItem("minecraft:ender_pearl")
    })

    // Forbidden Arcanus
    let forbidden_tables = event.getLootTableIds(/forbidden.*/)

    forbidden_tables.forEach(table => {
        event.getLootTable(table).removeItem('forbidden_arcanus:crimson_stone')
        event.getLootTable(table).removeItem('forbidden_arcanus:elementarium')
        event.getLootTable(table).removeItem('forbidden_arcanus:maledictus_pact')
    })

    // Oritech Things
    let fish_table = event.getLootTableIds(/oritechthings.*/)

    fish_table.forEach(table => {
        event.getLootTable(table).removeItem('oritech:fluxite')
    })
})
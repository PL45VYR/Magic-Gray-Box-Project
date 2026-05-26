// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

// Custom Miscellaneous Recipes

ServerEvents.recipes(event => {
    // Pyromantic Brazier Recipe
    event.shaped('1x theurgy:pyromantic_brazier', [
        'SCS',
        'CFC',
        'SCS'
    ], {
        S: '#c:stones',
        C: '#c:ingots/copper',
        F: 'sgjourney:fire_pit'
    })

    // Bundle Recipe
    event.shaped('1x minecraft:bundle', [
        'S',
        'L'
    ], {
        S: 'minecraft:string',
        L: '#c:leathers'
    })

    // Quartz Block Recipe Tweak
    event.replaceInput({ id: 'minecraft:quartz_block' }, 'minecraft:quartz', '#c:gems/quartz')

    // Magic Workbench Recipe
    event.shaped(
        Item.of('eidolon_repraised:worktable'),
        [
            'CCC',
            'ISI',
            'PPP'
        ],
        {
            S: 'malum:refined_soulstone',
            I: 'eidolon_repraised:pewter_inlay',
            P: '#minecraft:planks',
            C: 'minecraft:purple_carpet'
        }
    )

    // Nether Brick Salvaging
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "netherex:lively_nether_bricks"
            }
        ],
        "result": [
            {
                "item": {
                    "count": 4,
                    "id": "netherex:lively_nether_brick"
                }
            }
        ],
        "tool": [
            {
                "type": "farmersdelight:item_ability",
                "action": "pickaxe_dig"
            },
            {
                "tag": "minecraft:pickaxes"
            }
        ]
    })
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "netherex:fiery_nether_bricks"
            }
        ],
        "result": [
            {
                "item": {
                    "count": 4,
                    "id": "netherex:fiery_nether_brick"
                }
            }
        ],
        "tool": [
            {
                "type": "farmersdelight:item_ability",
                "action": "pickaxe_dig"
            },
            {
                "tag": "minecraft:pickaxes"
            }
        ]
    })
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "netherex:gloomy_nether_bricks"
            }
        ],
        "result": [
            {
                "item": {
                    "count": 4,
                    "id": "netherex:gloomy_nether_brick"
                }
            }
        ],
        "tool": [
            {
                "type": "farmersdelight:item_ability",
                "action": "pickaxe_dig"
            },
            {
                "tag": "minecraft:pickaxes"
            }
        ]
    })

    // Ender Pearl Overhauls

    // Corrupted Pearl
    let corrupted_items = [
        "hazennstuff:enderconic_scepter",
        "minecraft:echo_shard",
        "entangled:block",
        "entangled:item",
        "justdirethings:blockswappert2",
        "ars_nouveau:stable_warp_scroll",
        "justdirethings:portalgun",
        "ae2:fluix_pearl",
        "apothic_enchanting:endshelf",
        "apothic_enchanting:pearl_endshelf",
        "apothic_enchanting:draconic_endshelf"
    ]
    corrupted_items.forEach(item => {
        event.replaceInput({ output: item }, 'minecraft:ender_pearl', 'endermanoverhaul:corrupted_pearl')
        event.replaceInput({ output: item }, 'minecraft:ender_eye', 'endermanoverhaul:corrupted_pearl')
    })

    // Soul Pearl
    let soul_items = [
        "ars_nouveau:glyph_exchange",
        "ars_nouveau:glyph_blink",
        "ars_additions:glyph_recall",
        "ars_additions:glyph_mark",
        "justdirethings:blockswappert1",
        "justdirethings:itemcollector",
        "justdirethings:playeraccessor",
        "xycraft_machines:collector",
        "ae2:quantum_entangled_singularity",
        "occultism:stable_wormhole",
        "occultism:stable_wormhole_dark",
        "occultism:entity_wormhole_dark",
        "occultism:entity_wormhole"
    ]
    soul_items.forEach(item => {
        event.replaceInput({ output: item }, 'minecraft:ender_pearl', 'endermanoverhaul:soul_pearl')
        event.replaceInput({ output: item }, 'minecraft:ender_eye', 'endermanoverhaul:soul_pearl')
    })

    // Ancient Pearl
    let ancient_items = [
        "extendedae:concurrent_processor_press",
        "oritech:arcane_augment_station",
        "ars_additions:ender_source_jar",
        "oritechthings:addon_block_cross_dimensional",
        "ars_nouveau:relay_warp",
        "enderstorage:ender_chest",
        "enderstorage:ender_tank",
        "reliquary:ender_staff",
        "ars_additions:stabilized_warp_index",
        "integrateddynamics:part_extradimensional_reader",
        "actuallyadditions:phantom_connector"
    ]
    ancient_items.forEach(item => {
        event.replaceInput({ output: item }, 'minecraft:ender_pearl', 'endermanoverhaul:ancient_pearl')
        event.replaceInput({ output: item }, 'minecraft:ender_eye', 'endermanoverhaul:ancient_pearl')
    })

    // Bubble Pearl
    let bubble_items = [
        "compactmachines:personal_shrinking_device",
        "railcraft:personal_world_spike",
        "railcraft:world_spike",
        "justdirethings:upgrade_dropteleport",
        "actuallyadditions:ranged_collector",
        "eidolon_repraised:gravity_belt",
        "malum:ring_of_the_hoarder",
        "mekanism:qio_drive_base",
        "mekanism:qio_dashboard",
        "mekanism:qio_importer",
        "mekanism:qio_exporter",
        "mekanism:qio_redstone_adapter"
    ]
    bubble_items.forEach(item => {
        event.replaceInput({ output: item }, 'minecraft:ender_pearl', 'endermanoverhaul:bubble_pearl')
        event.replaceInput({ output: item }, 'minecraft:ender_eye', 'endermanoverhaul:bubble_pearl')
    })

    // Summoner Pearl
    let summoner_items = [
        "not_enough_glyphs:glyph_contingency_blink",
        "ars_nouveau:glyph_orbit",
        "reliquary:serpent_staff",
        "ars_additions:handy_haversack",
        "apothic_enchanting:flimsy_ender_lead",
        "actuallyadditions:teleport_staff",
        "ars_additions:unstable_reliquary",
        "ars_nouveau:enchanters_eye",
        "create:wand_of_symmetry"
    ]
    summoner_items.forEach(item => {
        event.replaceInput({ output: item }, 'minecraft:ender_pearl', 'endermanoverhaul:summoner_pearl')
        event.replaceInput({ output: item }, 'minecraft:ender_eye', 'endermanoverhaul:summoner_pearl')
    })

    // Icy Pearl
    let icy_items = [
        "malum:necklace_of_the_mystic_mirror",
        "ironfurnaces:crystal_furnace",
        "ironfurnaces:upgrade_crystal",
        "gag:time_sand_pouch",
        "apotheosis:sigil_of_withdrawal",
        "actuallyadditions:void_sack",
        "eidolon_repraised:reversal_pick",
        "ars_nouveau:void_jar",
        "ars_nouveau:ring_of_lesser_discount",
        "occultism:dimensional_matrix",
        "torchmaster:frozen_pearl"
    ]
    icy_items.forEach(item => {
        event.replaceInput({ output: item }, 'minecraft:ender_pearl', 'endermanoverhaul:icy_pearl')
        event.replaceInput({ output: item }, 'minecraft:ender_eye', 'endermanoverhaul:icy_pearl')
    })

    // Crimson Pearl
    let crimson_items = [
        "compactmachines:shrinking_module",
        "reliquary:salamander_eye",
        "justdirethings:experienceholder",
        "justdirethings:energytransmitter",
        "justdirethings:totem_of_death_recall",
        "justdirethings:creaturecatcher",
        "buildinggadgets2:gadget_destruction",
        "occultism:ritual_satchel_t2",
        "occultism:knowledge_tablet",
        "occultism:storage_remote"
    ]
    crimson_items.forEach(item => {
        event.replaceInput({ output: item }, 'minecraft:ender_pearl', 'endermanoverhaul:crimson_pearl')
        event.replaceInput({ output: item }, 'minecraft:ender_eye', 'endermanoverhaul:crimson_pearl')
    })

    // Warped Pearl
    let warped_items = [
        "ars_nouveau:glyph_intangible",
        "ars_elemental:glyph_arc_projectile",
        "compactmachines:enlarging_module",
        "justdirethings:upgrade_stupefy",
        "justdirethings:upgrade_nightvision",
        "minecraft:ender_eye",
        "waystones:warp_dust",
        "waystones:warp_stone",
        "waystones:warp_scroll",
        "transmog:void_fragment",
        "integrateddynamics:proto_chorus"
    ]
    warped_items.forEach(item => {
        event.replaceInput({ output: item }, 'minecraft:ender_pearl', 'endermanoverhaul:warped_pearl')
        event.replaceInput({ output: item }, 'minecraft:ender_eye', 'endermanoverhaul:warped_pearl')
    })

    event.replaceInput({ id: 'occultism:ritual/possess_weak_shulker' }, 'minecraft:ender_pearl', 'endermanoverhaul:warped_pearl')

    // Gateways

    let summoner_gateways = [
        Ingredient.of('gateways:gate_pearl[gateways:gateway="gateways:emerald_grove"]'),
        Ingredient.of('gateways:gate_pearl[gateways:gateway="apotheosis:tiered/summit"]'),
        Ingredient.of('gateways:gate_pearl[gateways:gateway="gateways:basic/enderman"]'),
        Ingredient.of('gateways:gate_pearl[gateways:gateway="gateways:basic/slime"]'),
        Ingredient.of('gateways:gate_pearl[gateways:gateway="apotheosis:tiered/frontier"]'),
        Ingredient.of('gateways:gate_pearl[gateways:gateway="apotheosis:tiered/ascent"]')
    ]
    summoner_gateways.forEach(gateway => {
        event.replaceInput({ output: gateway }, 'minecraft:ender_pearl', 'endermanoverhaul:summoner_pearl')
        event.replaceInput({ output: gateway }, 'minecraft:ender_eye', 'endermanoverhaul:summoner_pearl')
    })

    event.replaceInput({ output: Ingredient.of('gateways:gate_pearl[gateways:gateway="gateways:overworldian_nights"]')}, 'minecraft:ender_eye', 'endermanoverhaul:icy_pearl')
    event.replaceInput({ output: Ingredient.of('gateways:gate_pearl[gateways:gateway="gateways:hellish_fortress"]')}, 'minecraft:ender_eye', 'endermanoverhaul:crimson_pearl')
})

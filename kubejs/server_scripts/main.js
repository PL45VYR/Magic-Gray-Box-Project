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

    // Sophisticated Backpacks Recipe Tweaks
    event.custom({
        "type": "apotheosis:sized_upgrade_recipe",
        "addition": {
            "count": 4,
            "tag": "c:ingots/iron"
        },
        "base": {
            "item": "sophisticatedbackpacks:copper_backpack"
        },
        "result": {
            "count": 1,
            "id": "sophisticatedbackpacks:iron_backpack"
        },
        "template": {
            "item": "apotheosis:iron_upgrade_smithing_template"
        }
    })
    event.custom({
        "type": "apotheosis:sized_upgrade_recipe",
        "addition": {
            "count": 4,
            "tag": "c:ingots/gold"
        },
        "base": {
            "item": "sophisticatedbackpacks:iron_backpack"
        },
        "result": {
            "count": 1,
            "id": "sophisticatedbackpacks:gold_backpack"
        },
        "template": {
            "item": "apotheosis:gold_upgrade_smithing_template"
        }
    })
    event.custom({
        "type": "apotheosis:sized_upgrade_recipe",
        "addition": {
            "count": 4,
            "tag": "c:gems/diamond"
        },
        "base": {
            "item": "sophisticatedbackpacks:gold_backpack"
        },
        "result": {
            "count": 1,
            "id": "sophisticatedbackpacks:diamond_backpack"
        },
        "template": {
            "item": "apotheosis:diamond_upgrade_smithing_template"
        }
    })

    // Sophisticated Storage Recipe Tweaks
    event.replaceInput({output: /sophisticatedstorage.*/}, 'minecraft:iron_ingot', 'extendedcrafting:black_iron_ingot')
    event.replaceInput({output: /sophisticatedstorage.*/}, 'minecraft:gold_ingot', 'forbidden_arcanus:deorum_ingot')
    event.replaceInput({output: /sophisticatedstorage.*/}, 'minecraft:diamond', 'occultism:iesnium_ingot')
    event.replaceInput({output: /sophisticatedstorage.*/}, 'minecraft:netherite_ingot', 'oritech:duratium_ingot')
})

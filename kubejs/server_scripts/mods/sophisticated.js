ServerEvents.recipes(event => {
    // Sophisticated Backpacks Recipe Tweaks
    event.custom({
        "type": "apotheosis:sized_upgrade_recipe",
        "addition": {
            "count": 4,
            "tag": "c:ingots/iron"
        },
        "base": {
            "item": "sophisticatedbackpacks:backpack"
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

    // Sophisticated Storage Barrel and Chest Tweaks
    let storage_variants = [
        'barrel',
        '_barrel_1',
        '_barrel_2',
        '_barrel_3',
        '_barrel_4',
        'chest',
        'shulker_box'
    ]

    // Barrel and Chest Recipes
    storage_variants.forEach((type, index) => {
        if (type.charAt(0) != '_') {
            // Iron Upgrades
            event.custom({
                "type": "apotheosis:sized_upgrade_recipe",
                "addition": {
                    "count": 4,
                    "item": "minecraft:iron_ingot"
                },
                "base": {
                    "item": `sophisticatedstorage:${type}`
                },
                "result": {
                    "count": 1,
                    "id": `sophisticatedstorage:iron_${type}`
                },
                "template": {
                    "item": "apotheosis:iron_upgrade_smithing_template"
                }
            })
            // Gold Upgrades
            event.custom({
                "type": "apotheosis:sized_upgrade_recipe",
                "addition": {
                    "count": 4,
                    "item": "minecraft:gold_ingot"
                },
                "base": {
                    "item": `sophisticatedstorage:iron_${type}`
                },
                "result": {
                    "count": 1,
                    "id": `sophisticatedstorage:gold_${type}`
                },
                "template": {
                    "item": "apotheosis:gold_upgrade_smithing_template"
                }
            })
            // Diamond Upgrades
            event.custom({
                "type": "apotheosis:sized_upgrade_recipe",
                "addition": {
                    "count": 4,
                    "item": "minecraft:diamond"
                },
                "base": {
                    "item": `sophisticatedstorage:gold_${type}`
                },
                "result": {
                    "count": 1,
                    "id": `sophisticatedstorage:diamond_${type}`
                },
                "template": {
                    "item": "apotheosis:diamond_upgrade_smithing_template"
                }
            })
            // Netherite Upgrade
            event.smithing(`sophisticatedstorage:netherite_${type}`,
                'minecraft:netherite_upgrade_smithing_template',
                `sophisticatedstorage:diamond_${type}`,
                'minecraft:netherite_ingot'
            )
        } else {
            // Iron Upgrades
            event.custom({
                "type": "apotheosis:sized_upgrade_recipe",
                "addition": {
                    "count": 4,
                    "item": "minecraft:iron_ingot"
                },
                "base": {
                    "item": `sophisticatedstorage:limited${type}`
                },
                "result": {
                    "count": 1,
                    "id": `sophisticatedstorage:limited_iron${type}`
                },
                "template": {
                    "item": "apotheosis:iron_upgrade_smithing_template"
                }
            })
            // Gold Upgrades
            event.custom({
                "type": "apotheosis:sized_upgrade_recipe",
                "addition": {
                    "count": 4,
                    "item": "minecraft:gold_ingot"
                },
                "base": {
                    "item": `sophisticatedstorage:limited_iron${type}`
                },
                "result": {
                    "count": 1,
                    "id": `sophisticatedstorage:limited_gold${type}`
                },
                "template": {
                    "item": "apotheosis:gold_upgrade_smithing_template"
                }
            })
            // Diamond Upgrades
            event.custom({
                "type": "apotheosis:sized_upgrade_recipe",
                "addition": {
                    "count": 4,
                    "item": "minecraft:diamond"
                },
                "base": {
                    "item": `sophisticatedstorage:limited_gold${type}`
                },
                "result": {
                    "count": 1,
                    "id": `sophisticatedstorage:limited_diamond${type}`
                },
                "template": {
                    "item": "apotheosis:diamond_upgrade_smithing_template"
                }
            })
            // Netherite Upgrade
            event.smithing(`sophisticatedstorage:limited_netherite${type}`,
                'minecraft:netherite_upgrade_smithing_template',
                `sophisticatedstorage:limited_diamond${type}`,
                'minecraft:netherite_ingot'
            )
        }
    })
})
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

    // Tier Upgrades

    let from_basic = [
        'basic',
        'iron',
        'gold',
        'diamond',
        'netherite'
    ]

    let to_upgrade = [
        'basic',
        'iron',
        'gold',
        'diamond',
        'netherite'
    ]

    let tier_material = [
        'minecraft:lever',
        'minecraft:iron_ingot',
        'minecraft:gold_ingot',
        'minecraft:diamond',
        'minecraft:netherite_ingot'
    ]

    from_basic.forEach((base_material, base_index) => {
        to_upgrade.forEach((new_material, new_index) => {
            // One-Tier Gap Upgrades
            if (new_material != 'netherite') {
                if (new_index - base_index == 1) {
                    if (base_material == 'basic') { // Basic to Iron
                        event.custom({
                            "type": "apotheosis:sized_upgrade_recipe",
                            "addition": {
                                "count": 4,
                                "item": `${tier_material[new_index]}`
                            },
                            "base": {
                                "item": `sophisticatedstorage:basic_tier_upgrade`
                            },
                            "result": {
                                "count": 1,
                                "id": `sophisticatedstorage:${base_material}_to_${new_material}_tier_upgrade`
                            },
                            "template": {
                                "item": `apotheosis:${new_material}_upgrade_smithing_template`
                            }
                        })
                    } else { // Iron to Gold, Gold to Diamond
                        event.custom({
                            "type": "apotheosis:sized_upgrade_recipe",
                            "addition": {
                                "count": 4,
                                "item": `${tier_material[new_index]}`
                            },
                            "base": {
                                "item": `sophisticatedstorage:basic_tier_upgrade`
                            },
                            "result": {
                                "count": 1,
                                "id": `sophisticatedstorage:${base_material}_to_${new_material}_tier_upgrade`
                            },
                            "template": {
                                "item": `apotheosis:${new_material}_upgrade_smithing_template`
                            }
                        })
                    }
                } else if (new_index - base_index > 1) { // Basic to Gold, Iron to Diamond
                    event.custom({
                        "type": "apotheosis:sized_upgrade_recipe",
                        "addition": {
                            "count": 4,
                            "item": `${tier_material[new_index]}`
                        },
                        "base": {
                            "item": `sophisticatedstorage:${base_material}_to_${to_upgrade[new_index - 1]}_tier_upgrade`
                        },
                        "result": {
                            "count": 1,
                            "id": `sophisticatedstorage:${base_material}_to_${new_material}_tier_upgrade`
                        },
                        "template": {
                            "item": `apotheosis:${new_material}_upgrade_smithing_template`
                        }
                    })
                }
            } else if (base_index != new_index) {
                if (new_index - base_index == 1) {
                    event.smithing(`sophisticatedstorage:${base_material}_to_${new_material}_tier_upgrade`,
                        'minecraft:netherite_upgrade_smithing_template',
                        `sophisticatedstorage:basic_tier_upgrade`,
                        'minecraft:netherite_ingot'
                    )
                } else {
                    event.smithing(`sophisticatedstorage:${base_material}_to_${new_material}_tier_upgrade`,
                        'minecraft:netherite_upgrade_smithing_template',
                        `sophisticatedstorage:${base_material}_to_${to_upgrade[new_index - 1]}_tier_upgrade`,
                        'minecraft:netherite_ingot'
                    )
                }
            }
        })
    })
})
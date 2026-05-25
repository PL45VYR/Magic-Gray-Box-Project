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

    // Sophisticated Backpack Upgrade Base
    event.recipes.extendedcrafting.shaped_table('sophisticatedbackpacks:upgrade_base',
        [
            "ABABA",
            "BCCCB",
            "ACCCA",
            "BCCCB",
            "ABABA"
        ],
        {
            "A": {
                "item": "minecraft:iron_ingot"
            },
            "B": {
                "item": "minecraft:string"
            },
            "C": {
                "item": "immersiveengineering:ersatz_leather"
            }
        }
    )

    // Sophisticated Storage Upgrade Base
    event.recipes.extendedcrafting.shaped_table('sophisticatedstorage:upgrade_base',
        [
            "ABABA",
            "BABAB",
            "ABABA",
            "BABAB",
            "ABABA"
        ],
        {
            "A": {
                "tag": "minecraft:planks"
            },
            "B": {
                "item": "minecraft:iron_ingot"
            }
        }
    )

    // Sophisticated Stack Upgrades
    let stack_tiers = [
        'base',
        'iron',
        'gold',
        'diamond',
        'netherite'
    ]

    stack_tiers.forEach((base_material, index) => {
        if (index != 0) {
            if (base_material == 'netherite') {
                event.custom({
                    "type": "apotheosis:sized_upgrade_recipe",
                    "addition": {
                        "count": 4,
                        "tag": `c:storage_blocks/${base_material}`
                    },
                    "base": {
                        "item": `sophisticatedbackpacks:stack_upgrade_tier_${index - 1}`
                    },
                    "result": {
                        "count": 1,
                        "id": `sophisticatedbackpacks:stack_upgrade_tier_${index}`
                    },
                    "template": {
                        "item": `minecraft:${base_material}_upgrade_smithing_template`
                    }
                })
                event.custom({
                    "type": "apotheosis:sized_upgrade_recipe",
                    "addition": {
                        "count": 4,
                        "tag": `c:storage_blocks/${base_material}`
                    },
                    "base": {
                        "item": `sophisticatedstorage:stack_upgrade_tier_${index}`
                    },
                    "result": {
                        "count": 1,
                        "id": `sophisticatedstorage:stack_upgrade_tier_${index + 1}`
                    },
                    "template": {
                        "item": `minecraft:${base_material}_upgrade_smithing_template`
                    }
                })
            } else if (index != 1) {
                event.custom({
                    "type": "apotheosis:sized_upgrade_recipe",
                    "addition": {
                        "count": 4,
                        "tag": `c:storage_blocks/${base_material}`
                    },
                    "base": {
                        "item": `sophisticatedbackpacks:stack_upgrade_tier_${index - 1}`
                    },
                    "result": {
                        "count": 1,
                        "id": `sophisticatedbackpacks:stack_upgrade_tier_${index}`
                    },
                    "template": {
                        "item": `apotheosis:${base_material}_upgrade_smithing_template`
                    }
                })
                event.custom({
                    "type": "apotheosis:sized_upgrade_recipe",
                    "addition": {
                        "count": 4,
                        "tag": `c:storage_blocks/${base_material}`
                    },
                    "base": {
                        "item": `sophisticatedstorage:stack_upgrade_tier_${index}`
                    },
                    "result": {
                        "count": 1,
                        "id": `sophisticatedstorage:stack_upgrade_tier_${index + 1}`
                    },
                    "template": {
                        "item": `apotheosis:${base_material}_upgrade_smithing_template`
                    }
                })
            } else {
                event.custom({
                    "type": "apotheosis:sized_upgrade_recipe",
                    "addition": {
                        "count": 4,
                        "tag": `c:storage_blocks/${base_material}`
                    },
                    "base": {
                        "item": `sophisticatedbackpacks:upgrade_base`
                    },
                    "result": {
                        "count": 1,
                        "id": `sophisticatedbackpacks:stack_upgrade_tier_${index}`
                    },
                    "template": {
                        "item": `apotheosis:${base_material}_upgrade_smithing_template`
                    }
                })
                event.custom({
                    "type": "apotheosis:sized_upgrade_recipe",
                    "addition": {
                        "count": 4,
                        "tag": `c:storage_blocks/${base_material}`
                    },
                    "base": {
                        "item": `sophisticatedstorage:stack_upgrade_tier_${index}`
                    },
                    "result": {
                        "count": 1,
                        "id": `sophisticatedstorage:stack_upgrade_tier_${index + 1}`
                    },
                    "template": {
                        "item": `apotheosis:${base_material}_upgrade_smithing_template`
                    }
                })
            }
        }
    })

    // Backpack/Storage Upgrade Recipe Tweaks
    let sophisticated_upgrades = [
        'sophisticatedstorage:pickup_upgrade',
        'sophisticatedstorage:filter_upgrade',
        'sophisticatedstorage:compacting_upgrade',
        'sophisticatedstorage:smelting_upgrade',
        'sophisticatedstorage:smoking_upgrade',
        'sophisticatedstorage:blasting_upgrade',
        'sophisticatedstorage:crafting_upgrade',
        'sophisticatedstorage:stonecutter_upgrade',
        'sophisticatedstorage:stack_upgrade_tier_1',
        'sophisticatedstorage:stack_downgrade_tier_1',
        'sophisticatedstorage:stack_downgrade_tier_2',
        'sophisticatedstorage:stack_downgrade_tier_3',
        'sophisticatedstorage:jukebox_upgrade',
        'sophisticatedstorage:compression_upgrade',
        'sophisticatedstorage:hopper_upgrade',
        'sophisticatedbackpacks:pickup_upgrade',
        'sophisticatedbackpacks:filter_upgrade',
        'sophisticatedbackpacks:compacting_upgrade',
        'sophisticatedbackpacks:restock_upgrade',
        'sophisticatedbackpacks:deposit_upgrade',
        'sophisticatedbackpacks:smelting_upgrade',
        'sophisticatedbackpacks:smoking_upgrade',
        'sophisticatedbackpacks:blasting_upgrade',
        'sophisticatedbackpacks:crafting_upgrade',
        'sophisticatedbackpacks:stonecutter_upgrade',
        'sophisticatedbackpacks:stack_downgrade_tier_1',
        'sophisticatedbackpacks:stack_downgrade_tier_2',
        'sophisticatedbackpacks:stack_downgrade_tier_3',
        'sophisticatedbackpacks:tool_swapper_upgrade',
        'sophisticatedbackpacks:anvil_upgrade',
        'sophisticatedbackpacks:smithing_upgrade',
        'sophisticatedbackpacks:jukebox_upgrade'
    ]
    sophisticated_upgrades.forEach(upgrade => {
        event.forEachRecipe({ type: "minecraft:crafting_shaped", id: upgrade }, new_recipe => {
            let old_recipe = JSON.parse(new_recipe.json.toString())
            event.custom({
                "type": "extendedcrafting:shaped_table",
                "pattern": old_recipe.pattern,
                "key": old_recipe.key,
                "result": old_recipe.result
            })
        })
        event.remove({ id: upgrade })
    })

    // Unconverted Sophisticated Upgrade Recipes

    let sophisticated_mods = ['backpacks', 'storage']

    sophisticated_mods.forEach((mod_name, index) => {
        // Feeding Upgrade
        event.recipes.extendedcrafting.shaped_table(`sophisticated${mod_name}:feeding_upgrade`,
            [
                " A ",
                "BCD",
                " E "
            ],
            {
                "A": {
                    "item": "farmersdelight:gleaming_salad_block"
                },
                "B": {
                    "item": "create:builders_tea"
                },
                "C": {
                    "item": `sophisticated${mod_name}:upgrade_base`
                },
                "D": {
                    "item": "quark:ancient_fruit"
                },
                "E": {
                    "item": "endermanoverhaul:bubble_pearl"
                }
            }
        )

        // Void Upgrade
        event.recipes.extendedcrafting.shaped_table(`sophisticated${mod_name}:void_upgrade`,
            [
                " A ",
                "BCB",
                "DBD"
            ],
            {
                "A": {
                    "item": "endermanoverhaul:icy_pearl"
                },
                "B": {
                    "item": "minecraft:obsidian"
                },
                "C": {
                    "item": `sophisticated${mod_name}:upgrade_base`
                },
                "D": {
                    "item": "minecraft:redstone"
                }
            }
        )

        // Pump Upgrade
        event.recipes.extendedcrafting.shaped_table(`sophisticated${mod_name}:pump_upgrade`,
            [
                "ABA",
                "CDE",
                "ABA"
            ],
            {
                "A": {
                    "tag": "railcraft:strengthened_glass"
                },
                "B": {
                    "item": "minecraft:bucket"
                },
                "C": {
                    "item": "minecraft:piston"
                },
                "D": {
                    "item": `sophisticated${mod_name}:upgrade_base`
                },
                "E": {
                    "item": "minecraft:sticky_piston"
                }
            }
        )

        // Alchemy Upgrade
        event.recipes.extendedcrafting.shaped_table(`sophisticated${mod_name}:alchemy_upgrade`,
            [
                "ABC",
                "DED",
                "FGF"
            ],
            {
                "A": {
                    "item": "minecraft:ghast_tear"
                },
                "B": {
                    "item": "minecraft:glass_bottle"
                },
                "C": {
                    "item": "minecraft:fermented_spider_eye"
                },
                "D": {
                    "item": "minecraft:iron_ingot"
                },
                "E": {
                    "item": `sophisticated${mod_name}:upgrade_base`
                },
                "F": {
                    "item": "minecraft:blaze_rod"
                },
                "G": {
                    "item": "endermanoverhaul:bubble_pearl"
                }
            }
        )

        // XP Pump Upgrade
        event.recipes.extendedcrafting.shaped_table(`sophisticated${mod_name}:xp_pump_upgrade`,
            [
                "ABA",
                "CDC",
                "ABA"
            ],
            {
                "A": {
                    "item": "minecraft:redstone"
                },
                "B": {
                    "item": "endermanoverhaul:summoner_pearl"
                },
                "C": {
                    "item": "create_enchantment_industry:super_experience_nugget"
                },
                "D": {
                    "item": `sophisticated${mod_name}:advanced_pump_upgrade`
                }
            }
        )
    })

    // Refill Upgrade
    event.recipes.extendedcrafting.shaped_table('sophisticatedbackpacks:refill_upgrade',
        [
            " A ",
            "BCB",
            "DED"
        ],
        {
            "A": {
                "item": "endermanoverhaul:summoner_pearl"
            },
            "B": {
                "item": "minecraft:iron_ingot"
            },
            "C": {
                "item": "sophisticatedbackpacks:upgrade_base"
            },
            "D": {
                "item": "minecraft:redstone"
            },
            "E": {
                "tag": "c:chests/wooden"
            }
        }
    )

    // Inception Upgrade
    event.recipes.extendedcrafting.shaped_table('sophisticatedbackpacks:inception_upgrade',
        [
            "ABA",
            "CDC",
            "ACA"
        ],
        {
            "A": {
                "item": "endermanoverhaul:summoner_pearl"
            },
            "B": {
                "item": "minecraft:nether_star"
            },
            "C": {
                "item": "actuallyadditions:empowered_diamatine_crystal"
            },
            "D": {
                "item": "sophisticatedbackpacks:upgrade_base"
            }
        }
    )

    // Everlasting Upgrade
    event.recipes.extendedcrafting.shaped_table('sophisticatedbackpacks:everlasting_upgrade',
        [
            "ABA",
            "CDC",
            "ACA"
        ],
        {
            "A": {
                "item": "minecraft:end_crystal"
            },
            "B": {
                "item": "forbidden_arcanus:soul_binding_crystal"
            },
            "C": {
                "item": "minecraft:nether_star"
            },
            "D": {
                "item": "sophisticatedbackpacks:upgrade_base"
            }
        }
    )

    // Tank Upgrade
    event.recipes.extendedcrafting.shaped_table('sophisticatedbackpacks:tank_upgrade',
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            "A": {
                "item": "railcraft:white_strengthened_glass"
            },
            "B": {
                "item": "sophisticatedbackpacks:upgrade_base"
            }
        }
    )

    // Battery Upgrade
    event.recipes.extendedcrafting.shaped_table('sophisticatedbackpacks:battery_upgrade',
        [
            " A ",
            "BCB",
            " D "
        ],
        {
            "A": {
                "item": "immersiveengineering:component_electronic"
            },
            "B": {
                "item": "immersiveengineering:wirecoil_electrum"
            },
            "C": {
                "item": "sophisticatedbackpacks:upgrade_base"
            },
            "D": {
                "item": "immersiveengineering:capacitor_mv"
            }
        }
    )

    let basic_upgrades = [
        'sophisticatedstorage:pickup_upgrade',
        'sophisticatedstorage:filter_upgrade',
        'sophisticatedstorage:magnet_upgrade',
        'sophisticatedstorage:feeding_upgrade',
        'sophisticatedstorage:compacting_upgrade',
        'sophisticatedstorage:void_upgrade',
        'sophisticatedstorage:jukebox_upgrade',
        'sophisticatedstorage:hopper_upgrade',
        'sophisticatedstorage:pump_upgrade',
        'sophisticatedstorage:alchemy_upgrade',
        'sophisticatedbackpacks:pickup_upgrade',
        'sophisticatedbackpacks:filter_upgrade',
        'sophisticatedbackpacks:magnet_upgrade',
        'sophisticatedbackpacks:feeding_upgrade',
        'sophisticatedbackpacks:compacting_upgrade',
        'sophisticatedbackpacks:void_upgrade',
        'sophisticatedbackpacks:restock_upgrade',
        'sophisticatedbackpacks:deposit_upgrade',
        'sophisticatedbackpacks:refill_upgrade',
        'sophisticatedbackpacks:tool_swapper_upgrade',
        'sophisticatedbackpacks:jukebox_upgrade',
        'sophisticatedbackpacks:pump_upgrade',
        'sophisticatedbackpacks:alchemy_upgrade',
    ]

    // Advanced Upgrades
    basic_upgrades.forEach(upgrade => {
        let new_upgrade = upgrade.slice(0, upgrade.indexOf(':') + 1) + 'advanced_' + upgrade.slice(upgrade.indexOf(':') + 1)
        event.recipes.extendedcrafting.shaped_table(new_upgrade,
            [
                " AAA ",
                " BBB ",
                "BBCBB",
                "DDDDD",
                "DDDDD"
            ],
            {
                "A": {
                    "item": "actuallyadditions:diamatine_crystal"
                },
                "B": {
                    "item": "forbidden_arcanus:deorum_ingot"
                },
                "C": {
                    "item": upgrade
                },
                "D": {
                    "item": "actuallyadditions:restonia_crystal"
                }
            }
        )
        event.remove({ id: new_upgrade })
    })

    // Auto Upgrades
    let auto_upgrades = [
        'sophisticatedstorage:smelting_upgrade',
        'sophisticatedstorage:smoking_upgrade',
        'sophisticatedstorage:blasting_upgrade',
        'sophisticatedbackpacks:smelting_upgrade',
        'sophisticatedbackpacks:smoking_upgrade',
        'sophisticatedbackpacks:blasting_upgrade'
    ]

    auto_upgrades.forEach(upgrade => {
        let new_upgrade = upgrade.slice(0, upgrade.indexOf(':') + 1) + 'auto_' + upgrade.slice(upgrade.indexOf(':') + 1)
        event.recipes.extendedcrafting.shaped_table(new_upgrade,
            [
                " AAA ",
                " BBB ",
                "BBCBB",
                "DDDDD",
                "DDDDD"
            ],
            {
                "A": {
                    "item": "actuallyadditions:diamatine_crystal"
                },
                "B": {
                    "item": "forbidden_arcanus:deorum_ingot"
                },
                "C": {
                    "item": upgrade
                },
                "D": {
                    "item": "actuallyadditions:restonia_crystal"
                }
            }
        )
        event.remove({ id: new_upgrade })
    })

    // Magnet Upgrades
    event.recipes.extendedcrafting.shaped_table('sophisticatedbackpacks:magnet_upgrade',
        [
            " A ",
            "BCB",
            " D "
        ],
        {
            "A": {
                "item": "minecraft:iron_ingot"
            },
            "B": {
                "item": "endermanoverhaul:bubble_pearl"
            },
            "C": {
                "item": "sophisticatedbackpacks:pickup_upgrade"
            },
            "D": {
                "item": "immersiveengineering:toolupgrade_powerpack_magnet"
            }
        }
    )
    event.recipes.extendedcrafting.shaped_table('sophisticatedstorage:magnet_upgrade',
        [
            " A ",
            "BCB",
            " D "
        ],
        {
            "A": {
                "item": "minecraft:iron_ingot"
            },
            "B": {
                "item": "endermanoverhaul:bubble_pearl"
            },
            "C": {
                "item": "sophisticatedstorage:pickup_upgrade"
            },
            "D": {
                "item": "immersiveengineering:toolupgrade_powerpack_magnet"
            }
        }
    )

    // Advanced Magnet Upgrades
    event.recipes.extendedcrafting.shaped_table('sophisticatedbackpacks:advanced_magnet_upgrade',
        [
            " A ",
            "BCB",
            " D "
        ],
        {
            "A": {
                "item": "minecraft:iron_ingot"
            },
            "B": {
                "item": "endermanoverhaul:bubble_pearl"
            },
            "C": {
                "item": "sophisticatedbackpacks:advanced_pickup_upgrade"
            },
            "D": {
                "item": "immersiveengineering:toolupgrade_powerpack_magnet"
            }
        }
    )
    event.recipes.extendedcrafting.shaped_table('sophisticatedstorage:advanced_magnet_upgrade',
        [
            " A ",
            "BCB",
            " D "
        ],
        {
            "A": {
                "item": "minecraft:iron_ingot"
            },
            "B": {
                "item": "endermanoverhaul:bubble_pearl"
            },
            "C": {
                "item": "sophisticatedstorage:advanced_pickup_upgrade"
            },
            "D": {
                "item": "immersiveengineering:toolupgrade_powerpack_magnet"
            }
        }
    )

    // Storage Link Recipe
    event.recipes.extendedcrafting.shaped_table('sophisticatedstorage:storage_link',
        [
            "AB ",
            "CD ",
            "   "
        ],
        {
            "A": {
                "item": "endermanoverhaul:soul_pearl"
            },
            "B": {
                "tag": "minecraft:planks"
            },
            "C": {
                "item": "create:transmitter"
            },
            "D": {
                "tag": "c:stones"
            }
        }
    )

    // Storage Tool Recipe
    event.recipes.extendedcrafting.shaped_table('sophisticatedstorage:storage_tool',
        [
            " AB",
            " CD",
            "C  "
        ],
        {
            "A": {
                "item": "endermanoverhaul:soul_pearl"
            },
            "B": {
                "item": "minecraft:iron_ingot"
            },
            "C": {
                "item": "minecraft:stick"
            },
            "D": {
                "item": "minecraft:redstone_torch"
            }
        }
    )
})
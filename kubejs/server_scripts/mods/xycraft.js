ServerEvents.recipes(event => {
    // Extractor Recipe
    event.recipes.extendedcrafting.shaped_table('xycraft_machines:extractor',
        [
            "       ",
            "  ABA  ",
            " ACDCA ",
            " ACECA ",
            " ACECA ",
            " ACFCA ",
            " AAAAA "
        ],
        {
            "A": {
                "item": "xycraft_world:kivi"
            },
            "B": {
                "item": "xycraft_machines:item_io"
            },
            "C": {
                "item": "xycraft_world:aluminum_ingot"
            },
            "D": {
                "item": "minecraft:piston"
            },
            "E": {
                "item": "immersiveengineering:component_steel"
            },
            "F": {
                "item": "occultism:dimensional_extractor"
            }
        })

    // Collector Recipe Tweak
    event.replaceInput({ output: "xycraft_machines:collector" }, "minecraft:redstone", "xycraft_machines:machine_base")

    // Renewable Building Block Recipes
    // Limestone (Quark)
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "minecraft:water",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "quark:limestone"
        },
        "target": {
            "block": "quark:limestone",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Jasper
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "minecraft:water",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "quark:jasper"
        },
        "target": {
            "block": "quark:jasper",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Shale
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "minecraft:water",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "quark:shale"
        },
        "target": {
            "block": "quark:shale",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Quarried Stone
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "minecraft:water",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "railcraft:quarried_stone"
        },
        "target": {
            "block": "railcraft:quarried_stone",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Abyssal Stone
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "minecraft:water",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "railcraft:abyssal_stone"
        },
        "target": {
            "block": "railcraft:abyssal_stone",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Darkstone
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "minecraft:water",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "forbidden_arcanus:darkstone"
        },
        "target": {
            "block": "forbidden_arcanus:darkstone",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Limestone (Create)
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "block": "xycraft_machines:water_block",
                "predicate_type": "xycraft_core:block_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "create:limestone"
        },
        "target": {
            "block": "create:limestone",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Scoria
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "block": "xycraft_machines:water_block",
                "predicate_type": "xycraft_core:block_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "create:scoria"
        },
        "target": {
            "block": "create:scoria",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Scorchia
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "block": "xycraft_machines:water_block",
                "predicate_type": "xycraft_core:block_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "create:scorchia"
        },
        "target": {
            "block": "create:scorchia",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Myalite
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "create_dragons_plus:dragons_breath",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "quark:myalite"
        },
        "target": {
            "block": "quark:myalite",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Dusky Myalite
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "create_dragons_plus:dragons_breath",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "quark:dusky_myalite"
        },
        "target": {
            "block": "quark:dusky_myalite",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Voidshale
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "create_dragons_plus:dragons_breath",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "enderscape:void_shale"
        },
        "target": {
            "block": "enderscape:void_shale",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Permafrost
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "minecraft:water",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:water",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "quark:permafrost"
        },
        "target": {
            "block": "quark:permafrost",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Fiery Netherrack
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "netherex:fiery_netherrack"
        },
        "target": {
            "block": "netherex:fiery_netherrack",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Gloomy Netherrack
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "netherex:gloomy_netherrack"
        },
        "target": {
            "block": "netherex:gloomy_netherrack",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Lively Netherrack
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "netherex:lively_netherrack"
        },
        "target": {
            "block": "netherex:lively_netherrack",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Crimsite
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "block": "xycraft_machines:water_block",
                "predicate_type": "xycraft_core:block_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "create:crimsite"
        },
        "target": {
            "block": "minecraft:raw_iron_block",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Ochrum
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "block": "xycraft_machines:water_block",
                "predicate_type": "xycraft_core:block_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "create:ochrum"
        },
        "target": {
            "block": "minecraft:raw_gold_block",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Veridium
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "block": "xycraft_machines:water_block",
                "predicate_type": "xycraft_core:block_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "create:veridium"
        },
        "target": {
            "block": "minecraft:raw_copper_block",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })

    // Asurine
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            {
                "block": "xycraft_machines:water_block",
                "predicate_type": "xycraft_core:block_rule"
            },
            {
                "fluid_type": "minecraft:lava",
                "predicate_type": "xycraft_core:fluid_type_rule"
            }
        ],
        "output": {
            "count": 1,
            "id": "create:asurine"
        },
        "target": {
            "block": "create:raw_zinc_block",
            "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
    })
})
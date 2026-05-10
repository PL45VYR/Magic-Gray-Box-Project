ServerEvents.recipes(event => {
    // Metal Scaffold Recipe Tweaks
    event.recipes.extendedcrafting.shaped_table("3x immersiveengineering:steel_scaffolding_standard",
        [
            "PPP",
            " R ",
            "R R"
        ],
        {
            "P": {
                "tag": "c:plates/steel"
            },
            "R": {
                "tag": "c:rods/steel"
            }
        }
    )

    event.recipes.extendedcrafting.shaped_table("3x immersiveengineering:alu_scaffolding_standard",
        [
            "PPP",
            " R ",
            "R R"
        ],
        {
            "P": {
                "tag": "c:plates/aluminum"
            },
            "R": {
                "tag": "c:rods/aluminum"
            }
        }
    )

    // Coil Recipes Using Rolling

    // Copper Coil Recipe
    event.custom({
        "type": "railcraft:rolling",
        "key": {
            "w": {
                "tag": "c:wires/copper"
            },
            "s": {
                "item": "immersiveengineering:stick_treated"
            }
        },
        "pattern": [
            " w ",
            "wsw",
            " w "
        ],
        "result": {
            "count": 4,
            "id": "immersiveengineering:wirecoil_copper"
        }
    })

    // Electrum Coil Recipe
    event.custom({
        "type": "railcraft:rolling",
        "key": {
            "w": {
                "tag": "c:wires/electrum"
            },
            "s": {
                "item": "immersiveengineering:stick_treated"
            }
        },
        "pattern": [
            " w ",
            "wsw",
            " w "
        ],
        "result": {
            "count": 4,
            "id": "immersiveengineering:wirecoil_electrum"
        }
    })

    // Steel Coil Recipe
    event.custom({
        "type": "railcraft:rolling",
        "key": {
            "w": {
                "tag": "c:wires/steel"
            },
            "a": {
                "tag": "c:wires/aluminum"
            },
            "s": {
                "item": "immersiveengineering:stick_treated"
            }
        },
        "pattern": [
            " w ",
            "asa",
            " w "
        ],
        "result": {
            "count": 4,
            "id": "immersiveengineering:wirecoil_steel"
        }
    })

    // Redstone Coil Recipe
    event.custom({
        "type": "railcraft:rolling",
        "key": {
            "w": {
                "tag": "c:wires/aluminum"
            },
            "d": {
                "item": "minecraft:redstone"
            },
            "s": {
                "item": "immersiveengineering:stick_treated"
            }
        },
        "pattern": [
            " w ",
            "dsd",
            " w "
        ],
        "result": {
            "count": 4,
            "id": "immersiveengineering:wirecoil_redstone"
        }
    })

    // Engineering Block Recipes

    // Basic Engineering
    event.recipes.extendedcrafting.shaped_table('immersiveengineering:basic_engineering',
        [
            "SCS",
            "C C",
            "SCS"
        ],
        {
            "S": '#c:plates/iron',
            "C": '#immersiveengineering:treated_wood'
        }
    )

    // Light Engineering
    event.recipes.extendedcrafting.shaped_table('immersiveengineering:light_engineering',
        [
            "SCS",
            "CIC",
            "SCS"
        ],
        {
            "S": 'immersiveengineering:sheetmetal_iron',
            "C": 'immersiveengineering:component_iron',
            "I": 'create:precision_mechanism'
        }
    )

    // Redstone Engineering
    event.recipes.extendedcrafting.shaped_table('immersiveengineering:rs_engineering',
        [
            "SCS",
            "CIC",
            "SCS"
        ],
        {
            "S": 'immersiveengineering:sheetmetal_iron',
            "C": 'minecraft:redstone',
            "I": 'create_connected:control_chip'
        }
    )

    // Heavy Engineering
    event.recipes.extendedcrafting.shaped_table('immersiveengineering:heavy_engineering',
        [
            "SCS",
            "CIC",
            "SCS"
        ],
        {
            "S": 'immersiveengineering:sheetmetal_steel',
            "C": 'immersiveengineering:component_steel',
            "I": '#c:ingots/electrum'
        }
    )

    // Radiator
    event.recipes.extendedcrafting.shaped_table('immersiveengineering:radiator',
        [
            "SCS",
            "CIC",
            "SCS"
        ],
        {
            "S": 'immersiveengineering:sheetmetal_steel',
            "C": '#c:plates/constantan',
            "I": 'minecraft:water_bucket'
        }
    )

    // Generator
    event.recipes.extendedcrafting.shaped_table('immersiveengineering:generator',
        [
            "SCS",
            "CIC",
            "SCS"
        ],
        {
            "S": 'immersiveengineering:sheetmetal_steel',
            "C": 'immersiveengineering:coil_mv',
            "I": 'immersiveengineering:component_iron'
        }
    )

    // Resonanz Engineering
    event.recipes.extendedcrafting.shaped_table('immersiveengineering:resonanz_engineering',
        [
            "SCS",
            "CIC",
            "SCS"
        ],
        {
            "S": 'immersiveengineering:sheetmetal_lead',
            "C": 'immersiveengineering:component_electronic_adv',
            "I": 'minecraft:echo_shard'
        }
    )

    // Blast Brick Recipe Change
    event.recipes.extendedcrafting.shaped_table("3x immersiveengineering:blastbrick",
        [
            "NNN",
            "NMN",
            "NNN"
        ],
        {
            "N": {
                "item": "netherex:fiery_nether_brick"
            },
            "M": {
                "item": "minecraft:magma_block"
            }
        }
    )

    // Dark Steel Recipe
    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "tag": "c:dusts/hop_graphite"
            }
        ],
        "energy": 102400,
        "input": {
            "tag": "c:ingots/iron"
        },
        "results": [
            {
                "basePredicate": {
                    "tag": "c:ingots/dark_steel"
                },
                "count": 1
            }
        ],
        "time": 100
    })
})
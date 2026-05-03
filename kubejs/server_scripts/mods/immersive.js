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
})
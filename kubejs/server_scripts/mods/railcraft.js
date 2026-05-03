ServerEvents.recipes(event => {
    // Manual Rolling Machine Tweaks
    event.replaceInput({ output: "railcraft:manual_rolling_machine" }, 'minecraft:crafting_table', 'minecraft:crafter')
    event.replaceInput({ output: "railcraft:manual_rolling_machine" }, 'railcraft:bronze_gear', 'create:precision_mechanism')

    // Rod Recipes Using Rolling
    let metal_material = [
        'iron',
        'gold',
        'copper',
        'netherite',
        'steel',
        'aluminum',
        'lead',
        'silver',
        'nickel',
        'constantan',
        'electrum',
        'uranium',
        'naquadah_alloy'
    ]

    let rod_name = [
        'immersiveengineering:stick_iron',
        'immersiveposts:stick_gold',
        'immersiveposts:stick_copper',
        'immersiveengineering:stick_netherite',
        'immersiveengineering:stick_steel',
        'immersiveengineering:stick_aluminum',
        'immersiveposts:stick_lead',
        'immersiveposts:stick_silver',
        'immersiveposts:stick_nickel',
        'immersiveposts:stick_constantan',
        'immersiveposts:stick_electrum',
        'immersiveposts:stick_uranium',
        'sgjourney:naquadah_rod'
    ]

    metal_material.forEach((material, index) => {
        event.custom({
            "type": "railcraft:rolling",
            "key": {
                "i": {
                    "tag": `c:ingots/${material}`
                }
            },
            "pattern": ["i", "i"],
            "result": {
                "count": 1,
                "id": rod_name[index]
            }
        })
        event.remove({ output: rod_name[index], type: "minecraft:crafting_shaped" })
    })

    metal_material.forEach((material, index) => {
        if (material !== "netherite" && material !== "naquadah_alloy") {
            event.custom({
                "type": "railcraft:rolling",
                "key": {
                    "i": {
                        "tag": `c:plates/${material}`
                    }
                },
                "pattern": [
                    " i ",
                    "i i",
                    " i "
                ],
                "result": {
                    "count": 4,
                    "id": `immersiveengineering:sheetmetal_${material}`
                }
            })
            event.remove({ id: `immersiveengineering:crafting/sheetmetal_${material}`, type: "minecraft:crafting_shaped" })
        }
    })

    // Blast Furnace Brick Unification
    event.replaceInput({ input: "railcraft:blast_furnace_bricks" }, 'railcraft:blast_furnace_bricks', 'immersiveengineering:blastbrick')
})
ServerEvents.recipes(event => {
    // Manual Rolling Machine Tweaks
    event.replaceInput({ output: "railcaft:manual_rolling_machine" }, 'minecraft:crafting_table', 'minecraft:crafter')
    event.replaceInput({ output: "railcaft:manual_rolling_machine" }, 'railcraft:bronze_gear', 'create:precision_mechanism')

    // Rod Recipes Using Rolling
    let rod_material = [
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
        'uranium'
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
        'immersiveposts:stick_uranium'
    ]

    rod_material.forEach((material, index) => {
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
})
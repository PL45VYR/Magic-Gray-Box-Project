ServerEvents.recipes(event => {
    event.custom({
        "type": "hexerei:pestle_and_mortar",
        "ingredients": [
            {
                "tag": "c:dusts/tin"
            },
            {
                "tag": "c:dusts/tin"
            },
            {
                "tag": "c:dusts/lead"
            }
        ],
        "output": {
            "id": "eidolon_repraised:pewter_blend",
            "count": 1
        },
        "grindingTime": 200
    })

    event.custom({
        "type": "hexerei:mixingcauldron",
        "fluid": {
            "id": "minecraft:lava",
            "amount": 250
        },
        "ingredients": [
            {
                "tag": "c:gems/quartz"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:iron_ingot"
            }
        ],
        "output": {
            "id": "hexerei:pestle_and_mortar",
            "count": 1
        }
    })
})
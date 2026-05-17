ServerEvents.recipes(event => {
    // Oil Unification

    // Crude Distillation
    event.custom({
        "type": "immersivepetroleum:distillation",
        "byproducts": [
            {
                "chance": 0.25,
                "output": {
                    "id": "immersivepetroleum:bitumen"
                }
            }
        ],
        "energy": 1024,
        "input": {
            "amount": 60,
            "fluid": "oritech:still_oil"
        },
        "results": [
            {
                "amount": 15,
                "id": "oritech:still_naphtha"
            },
            {
                "amount": 20,
                "id": "immersivepetroleum:kerosene"
            },
            {
                "amount": 30,
                "id": "immersivepetroleum:diesel_sulfur"
            },
            {
                "amount": 10,
                "id": "immersivepetroleum:lubricant"
            }
        ],
        "time": 1
    })
    event.remove({ id: "immersivepetroleum:distillationtower/oil" })

    // Gasoline Refinery
    event.custom({
        "type": "immersiveengineering:refinery",
        "energy": 80,
        "input0": {
            "amount": 15,
            "fluid": "oritech:still_naphtha"
        },
        "input1": {
            "amount": 10,
            "fluid": "immersivepetroleum:benzol"
        },
        "result": {
            "amount": 25,
            "id": "immersivepetroleum:gasoline"
        }
    })
    event.remove({ id: "immersivepetroleum:refinery/gasoline" })

    // Petroleum Gas Refinery
    event.custom({
        "type": "immersivepetroleum:hydrotreater",
        "energy": 192000,
        "input": {
            "amount": 1500,
            "fluid": "oritech:still_naphtha"
        },
        "result": {
            "amount": 2000,
            "id": "immersivepetroleum:petroleum_gas"
        },
        "secondary_input": {
            "amount": 500,
            "fluid": "minecraft:water"
        },
        "time": 300
    })
    event.remove({ id: "immersivepetroleum:hydrotreater/naphtha_cracking" })

    // Diesel Refinery
    event.custom({
        "type": "immersivepetroleum:hydrotreater",
        "energy": 8000,
        "input": {
            "amount": 1000,
            "fluid": "immersivepetroleum:diesel_sulfur"
        },
        "result": {
            "amount": 1000,
            "id": "oritech:still_diesel"
        },
        "secondary_input": {
            "amount": 500,
            "fluid": "minecraft:water"
        },
        "secondary_result": {
            "output": {
                "count": 5,
                "tag": "c:dusts/sulfur"
            }
        },
        "time": 100
    })
    event.remove({ id: "immersivepetroleum:hydrotreater/sulfur_recovery" })

    // In-World Diesel Reservoirs
    event.custom({
        "type": "immersivepetroleum:reservoirs",
        "biomes": {
            "isBlacklist": false,
            "list": []
        },
        "dimensions": {
            "isBlacklist": true,
            "list": [
                "minecraft:the_end"
            ]
        },
        "equilibrium": 0,
        "fluid": "oritech:still_oil",
        "fluidcapacity": 32500000,
        "fluidminimum": 2500000,
        "fluidtrace": 6,
        "name": "oil",
        "weight": 40
    })
    event.remove({ id: "immersivepetroleum:reservoirs/oil"})
})
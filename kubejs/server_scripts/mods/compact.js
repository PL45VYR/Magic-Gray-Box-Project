ServerEvents.recipes(event => {
    // XyCraft Machine Base Recipe
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 5,
        "layers": [
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["R", "R", "R", "R", "R"],
                    ["R", "S", "S", "S", "R"],
                    ["R", "S", "S", "S", "R"],
                    ["R", "S", "S", "S", "R"],
                    ["R", "R", "R", "R", "R"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["R", "S", "S", "S", "R"],
                    ["S", "D", "L", "D", "S"],
                    ["S", "L", "E", "L", "S"],
                    ["S", "D", "L", "D", "S"],
                    ["R", "S", "S", "S", "R"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["R", "S", "S", "S", "R"],
                    ["S", "L", "E", "L", "S"],
                    ["S", "E", "F", "E", "S"],
                    ["S", "L", "E", "L", "S"],
                    ["R", "S", "S", "S", "R"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["R", "S", "S", "S", "R"],
                    ["S", "D", "L", "D", "S"],
                    ["S", "L", "E", "L", "S"],
                    ["S", "D", "L", "D", "S"],
                    ["R", "S", "S", "S", "R"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["R", "R", "R", "R", "R"],
                    ["R", "S", "S", "S", "R"],
                    ["R", "S", "S", "S", "R"],
                    ["R", "S", "S", "S", "R"],
                    ["R", "R", "R", "R", "R"]
                ]
            }
        ],
        "catalyst": {
            "id": "extendedcrafting:basic_catalyst",
            "Count": 1
        },
        "components": {
            "R": {
                "type": "compactcrafting:block",
                "block": "xycraft_world:kivi_rajan"
            },
            "S": {
                "type": "compactcrafting:block",
                "block": "xycraft_world:smooth_kivi"
            },
            "D": {
                "type": "compactcrafting:block",
                "block": "enderio:dark_steel_block"
            },
            "L": {
                "type": "compactcrafting:block",
                "block": "immersiveengineering:light_engineering"
            },
            "E": {
                "type": "compactcrafting:block",
                "block": "immersiveengineering:rs_engineering"
            },
            "F": {
                "type": "compactcrafting:block",
                "block": "justdirethings:ferricore_block"
            },
        },
        "outputs": [
            {
                "id": "xycraft_machines:machine_base",
                "Count": 1
            }
        ]
    })
})
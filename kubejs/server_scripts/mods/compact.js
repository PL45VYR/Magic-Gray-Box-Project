ServerEvents.recipes(event => {
    // Machine Wall Recipe
    event.shaped("compactmachines:wall",
        [
            'DDD',
            'DND',
            'DDD'
        ],
        {
            D: 'minecraft:polished_deepslate',
            N: 'enderio:dark_steel_nugget'
        }
    )

    // Projector Base Recipe
    event.recipes.extendedcrafting.shaped_table('compactcrafting:base',
        [
            "       ",
            "       ",
            "       ",
            "   A   ",
            "AABABAA",
            "AABBBAA",
            "AAAAAAA"
        ],
        {
            "A": {
                "item": "compactmachines:wall"
            },
            "B": {
                "tag": "c:storage_blocks/aluminum"
            }
        }

    )

    // Projector Dish Recipe
    event.recipes.extendedcrafting.shaped_table('compactcrafting:projector_dish',
        [
            "       ",
            "AAAAAAA",
            "ABBBBBA",
            "ABCCCBA",
            "ABBBBBA",
            "AAAAAAA",
            "       "
        ],
        {
            "A": {
                "item": "compactmachines:wall"
            },
            "B": {
                "tag": "c:ingots/aluminum"
            },
            "C": {
                "item": "occultism:iesnium_ingot"
            }
        }
    )

    // Field Projector Recipe
    event.recipes.create.deploying('compactcrafting:field_projector', ['compactcrafting:base', 'compactcrafting:projector_dish'])

    // Rescan Proxy Recipe
    event.recipes.create.deploying('compactcrafting:rescan_proxy', ['compactcrafting:base', 'minecraft:amethyst_block'])

    // Match Proxy Recipe
    event.recipes.create.deploying('compactcrafting:match_proxy', ['compactcrafting:base', 'railcraft:receiver_circuit'])

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

    // Lava Factory Casing Recipe
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 5,
        "layers": [
            {
                "type": "compactcrafting:hollow",
                "wall": "B"
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["B", "-", "-", "-", "B"],
                    ["-", "B", "B", "B", "-"],
                    ["-", "B", "H", "B", "-"],
                    ["-", "B", "B", "B", "-"],
                    ["B", "-", "-", "-", "B"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["B", "-", "-", "-", "B"],
                    ["-", "B", "H", "B", "-"],
                    ["-", "H", "M", "H", "-"],
                    ["-", "B", "H", "B", "-"],
                    ["B", "-", "-", "-", "B"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["B", "-", "-", "-", "B"],
                    ["-", "B", "B", "B", "-"],
                    ["-", "B", "H", "B", "-"],
                    ["-", "B", "B", "B", "-"],
                    ["B", "-", "-", "-", "B"]
                ]
            },
            {
                "type": "compactcrafting:hollow",
                "wall": "B"
            }
        ],
        "catalyst": {
            "id": "extendedcrafting:basic_catalyst",
            "Count": 1
        },
        "components": {
            "B": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:black_iron_block"
            },
            "H": {
                "type": "compactcrafting:block",
                "block": "immersiveengineering:heavy_engineering"
            },
            "M": {
                "type": "compactcrafting:block",
                "block": "xycraft_machines:machine_base"
            }
        },
        "outputs": [
            {
                "id": "actuallyadditions:lava_factory_casing",
                "Count": 1
            }
        ]
    })
})
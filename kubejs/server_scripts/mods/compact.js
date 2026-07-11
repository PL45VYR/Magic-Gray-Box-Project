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
            "id": "extendedcrafting:advanced_catalyst",
            "Count": 1
        },
        "components": {
            "B": {
                "type": "compactcrafting:block",
                "block": "create:polished_cut_deepslate"
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

    // Void Chassis Recipe
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 5,
        "layers": [
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["S", "S", "S", "S", "S"],
                    ["S", "-", "S", "-", "S"],
                    ["S", "S", "S", "S", "S"],
                    ["S", "-", "S", "-", "S"],
                    ["S", "S", "S", "S", "S"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["S", "-", "S", "-", "S"],
                    ["-", "-", "-", "-", "-"],
                    ["S", "-", "D", "-", "S"],
                    ["-", "-", "-", "-", "-"],
                    ["S", "-", "S", "-", "S"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["S", "S", "S", "S", "S"],
                    ["S", "-", "D", "-", "S"],
                    ["S", "D", "C", "D", "S"],
                    ["S", "-", "D", "-", "S"],
                    ["S", "S", "S", "S", "S"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["S", "-", "S", "-", "S"],
                    ["-", "-", "-", "-", "-"],
                    ["S", "-", "D", "-", "S"],
                    ["-", "-", "-", "-", "-"],
                    ["S", "-", "S", "-", "S"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["S", "S", "S", "S", "S"],
                    ["S", "-", "S", "-", "S"],
                    ["S", "S", "S", "S", "S"],
                    ["S", "-", "S", "-", "S"],
                    ["S", "S", "S", "S", "S"]
                ]
            }
        ],
        "catalyst": {
            "id": "extendedcrafting:redstone_catalyst",
            "Count": 1
        },
        "components": {
            "S": {
                "type": "compactcrafting:block",
                "block": "immersiveengineering:steel_scaffolding_standard"
            },
            "D": {
                "type": "compactcrafting:block",
                "block": "immersiveengineering:storage_steel"
            },
            "C": {
                "type": "compactcrafting:block",
                "block": "actuallyadditions:lava_factory_casing"
            }
        },
        "outputs": [
            {
                "id": "enderio:void_chassis",
                "Count": 1
            }
        ]
    })

    // Dielectric Casing Recipe
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 3,
        "layers": [
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["A", "I", "A"],
                    ["I", "G", "I"],
                    ["A", "I", "A"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["I", "G", "I"],
                    ["G", "C", "G"],
                    ["I", "G", "I"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["A", "I", "A"],
                    ["I", "G", "I"],
                    ["A", "I", "A"]
                ]
            }
        ],
        "catalyst": {
            "id": "extendedcrafting:redstone_catalyst",
            "Count": 1
        },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": "create:andesite_alloy_block"
            },
            "I": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:black_iron_block"
            },
            "G": {
                "type": "compactcrafting:block",
                "block": "xycraft_world:glass_viewer_silicon"
            },
            "C": {
                "type": "compactcrafting:block",
                "block": "actuallyadditions:lava_factory_casing"
            }
        },
        "outputs": [
            {
                "id": "powah:dielectric_casing",
                "Count": 1
            }
        ]
    })

    // Primitive Machine Core Recipe
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 3,
        "layers": [
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["W", "W", "W"],
                    ["W", "C", "W"],
                    ["W", "W", "W"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["W", "C", "W"],
                    ["C", "M", "C"],
                    ["W", "C", "W"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["W", "W", "W"],
                    ["W", "C", "W"],
                    ["W", "W", "W"]
                ]
            }
        ],
        "catalyst": {
            "id": "extendedcrafting:enhanced_redstone_catalyst",
            "Count": 1
        },
        "components": {
            "W": {
                "type": "compactcrafting:block",
                "block": "architects_palette:oak_boards"
            },
            "C": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:crystaltine_block"
            },
            "M": {
                "type": "compactcrafting:block",
                "block": "xycraft_machines:machine_base"
            }
        },
        "outputs": [
            {
                "id": "oritech:machine_core_1",
                "Count": 1
            }
        ]
    })

    // Basic Machine Core Recipe
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 3,
        "layers": [
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["F", "F", "F"],
                    ["F", "C", "F"],
                    ["F", "F", "F"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["F", "C", "F"],
                    ["C", "M", "C"],
                    ["F", "C", "F"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["F", "F", "F"],
                    ["F", "C", "F"],
                    ["F", "F", "F"]
                ]
            }
        ],
        "catalyst": {
            "id": "extendedcrafting:enhanced_redstone_catalyst",
            "Count": 1
        },
        "components": {
            "F": {
                "type": "compactcrafting:block",
                "block": "justdirethings:ferricore_block"
            },
            "C": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:crystaltine_block"
            },
            "M": {
                "type": "compactcrafting:block",
                "block": "oritech:machine_core_1"
            }
        },
        "outputs": [
            {
                "id": "oritech:machine_core_2",
                "Count": 1
            }
        ]
    })

    // Improved Machine Core Recipe
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 3,
        "layers": [
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["F", "D", "F"],
                    ["D", "C", "D"],
                    ["F", "D", "F"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["D", "C", "D"],
                    ["C", "M", "C"],
                    ["D", "C", "D"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["F", "D", "F"],
                    ["D", "C", "D"],
                    ["F", "D", "F"]
                ]
            }
        ],
        "catalyst": {
            "id": "extendedcrafting:enhanced_redstone_catalyst",
            "Count": 1
        },
        "components": {
            "F": {
                "type": "compactcrafting:block",
                "block": "justdirethings:ferricore_block"
            },
            "D": {
                "type": "compactcrafting:block",
                "block": "enderio:dark_steel_block"
            },
            "C": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:crystaltine_block"
            },
            "M": {
                "type": "compactcrafting:block",
                "block": "oritech:machine_core_2"
            }
        },
        "outputs": [
            {
                "id": "oritech:machine_core_3",
                "Count": 1
            }
        ]
    })

    // Advanced Machine Core Recipe
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 5,
        "layers": [
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["D", "D", "D", "D", "D"],
                    ["D", "E", "E", "E", "D"],
                    ["D", "E", "C", "E", "D"],
                    ["D", "E", "E", "E", "D"],
                    ["D", "D", "D", "D", "D"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["D", "E", "E", "E", "D"],
                    ["E", "E", "I", "E", "E"],
                    ["E", "I", "G", "I", "E"],
                    ["E", "E", "I", "E", "E"],
                    ["D", "E", "E", "E", "D"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["D", "E", "C", "E", "D"],
                    ["E", "I", "G", "I", "E"],
                    ["C", "G", "M", "G", "C"],
                    ["E", "I", "G", "I", "E"],
                    ["D", "E", "C", "E", "D"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["D", "E", "E", "E", "D"],
                    ["E", "E", "I", "E", "E"],
                    ["E", "I", "G", "I", "E"],
                    ["E", "E", "I", "E", "E"],
                    ["D", "E", "E", "E", "D"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["D", "D", "D", "D", "D"],
                    ["D", "E", "E", "E", "D"],
                    ["D", "E", "C", "E", "D"],
                    ["D", "E", "E", "E", "D"],
                    ["D", "D", "D", "D", "D"]
                ]
            }
        ],
        "catalyst": {
            "id": "extendedcrafting:enhanced_redstone_catalyst",
            "Count": 1
        },
        "components": {
            "D": {
                "type": "compactcrafting:block",
                "block": "enderio:dark_steel_block"
            },
            "E": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:enhanced_redstone_ingot_block"
            },
            "C": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:crystaltine_block"
            },
            "I": {
                "type": "compactcrafting:block",
                "block": "actuallyadditions:enori_crystal_block"
            },
            "G": {
                "type": "compactcrafting:block",
                "block": "justdirethings:celestigem_block"
            },
            "M": {
                "type": "compactcrafting:block",
                "block": "oritech:machine_core_3"
            }
        },
        "outputs": [
            {
                "id": "oritech:machine_core_4",
                "Count": 1
            }
        ]
    })

    // Advanced Machine Core Recipe
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 5,
        "layers": [
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["B", "B", "E", "B", "B"],
                    ["B", "B", "E", "B", "B"],
                    ["E", "E", "C", "E", "E"],
                    ["B", "B", "E", "B", "B"],
                    ["B", "B", "E", "B", "B"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["B", "B", "E", "B", "B"],
                    ["B", "B", "G", "B", "B"],
                    ["E", "G", "C", "G", "E"],
                    ["B", "B", "G", "B", "B"],
                    ["B", "B", "E", "B", "B"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["E", "E", "C", "E", "E"],
                    ["E", "G", "G", "G", "E"],
                    ["C", "G", "M", "G", "C"],
                    ["E", "G", "G", "G", "E"],
                    ["E", "E", "C", "E", "E"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["B", "B", "E", "B", "B"],
                    ["B", "B", "G", "B", "B"],
                    ["E", "G", "C", "G", "E"],
                    ["B", "B", "G", "B", "B"],
                    ["B", "B", "E", "B", "B"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["B", "B", "E", "B", "B"],
                    ["B", "B", "E", "B", "B"],
                    ["E", "E", "C", "E", "E"],
                    ["B", "B", "E", "B", "B"],
                    ["B", "B", "E", "B", "B"]
                ]
            }
        ],
        "catalyst": {
            "id": "extendedcrafting:enhanced_redstone_catalyst",
            "Count": 1
        },
        "components": {
            "B": {
                "type": "compactcrafting:block",
                "block": "justdirethings:blazegold_block"
            },
            "E": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:enhanced_redstone_ingot_block"
            },
            "C": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:crystaltine_block"
            },
            "G": {
                "type": "compactcrafting:block",
                "block": "justdirethings:celestigem_block"
            },
            "M": {
                "type": "compactcrafting:block",
                "block": "oritech:machine_core_4"
            }
        },
        "outputs": [
            {
                "id": "oritech:machine_core_5",
                "Count": 1
            }
        ]
    })

    // Ultra Machine Core Recipe
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 7,
        "layers": [
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["A", "A", "R", "R", "R", "A", "A"],
                    ["A", "D", "R", "R", "R", "D", "A"],
                    ["R", "R", "A", "A", "A", "R", "R"],
                    ["R", "R", "A", "C", "A", "R", "R"],
                    ["R", "R", "A", "A", "A", "R", "R"],
                    ["A", "D", "R", "R", "R", "D", "A"],
                    ["A", "A", "R", "R", "R", "A", "A"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["A", "D", "R", "R", "R", "D", "A"],
                    ["D", "D", "S", "S", "S", "D", "D"],
                    ["R", "S", "F", "F", "F", "S", "R"],
                    ["R", "S", "F", "F", "F", "S", "R"],
                    ["R", "S", "F", "F", "F", "S", "R"],
                    ["D", "D", "S", "S", "S", "D", "D"],
                    ["A", "D", "R", "R", "R", "D", "A"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["R", "R", "A", "A", "A", "R", "R"],
                    ["D", "S", "F", "F", "F", "S", "R"],
                    ["A", "F", "E", "E", "E", "F", "A"],
                    ["A", "F", "E", "E", "E", "F", "A"],
                    ["A", "F", "E", "E", "E", "F", "A"],
                    ["R", "S", "F", "F", "F", "S", "R"],
                    ["R", "R", "A", "A", "A", "R", "R"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["R", "R", "A", "C", "A", "R", "R"],
                    ["D", "S", "F", "F", "F", "S", "R"],
                    ["A", "F", "E", "E", "E", "F", "A"],
                    ["C", "F", "E", "M", "E", "F", "C"],
                    ["A", "F", "E", "E", "E", "F", "A"],
                    ["R", "S", "F", "F", "F", "S", "R"],
                    ["R", "R", "A", "C", "A", "R", "R"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["R", "R", "A", "A", "A", "R", "R"],
                    ["D", "S", "F", "F", "F", "S", "R"],
                    ["A", "F", "E", "E", "E", "F", "A"],
                    ["A", "F", "E", "E", "E", "F", "A"],
                    ["A", "F", "E", "E", "E", "F", "A"],
                    ["R", "S", "F", "F", "F", "S", "R"],
                    ["R", "R", "A", "A", "A", "R", "R"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["A", "D", "R", "R", "R", "D", "A"],
                    ["D", "D", "S", "S", "S", "D", "D"],
                    ["R", "S", "F", "F", "F", "S", "R"],
                    ["R", "S", "F", "F", "F", "S", "R"],
                    ["R", "S", "F", "F", "F", "S", "R"],
                    ["D", "D", "S", "S", "S", "D", "D"],
                    ["A", "D", "R", "R", "R", "D", "A"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["A", "A", "R", "R", "R", "A", "A"],
                    ["A", "D", "R", "R", "R", "D", "A"],
                    ["R", "R", "A", "A", "A", "R", "R"],
                    ["R", "R", "A", "C", "A", "R", "R"],
                    ["R", "R", "A", "A", "A", "R", "R"],
                    ["A", "D", "R", "R", "R", "D", "A"],
                    ["A", "A", "R", "R", "R", "A", "A"]
                ]
            }
        ],
        "catalyst": {
            "id": "extendedcrafting:enhanced_ender_catalyst",
            "Count": 1
        },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": "oritech:adamant_block"
            },
            "R": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:redstone_ingot_block"
            },
            "D": {
                "type": "compactcrafting:block",
                "block": "enderio:dark_steel_block"
            },
            "C": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:crystaltine_block"
            },
            "S": {
                "type": "compactcrafting:block",
                "block": "ae2:smooth_sky_stone_block"
            },
            "F": {
                "type": "compactcrafting:block",
                "block": "ae2:fluix_block"
            },
            "E": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:ender_ingot_block"
            },
            "M": {
                "type": "compactcrafting:block",
                "block": "oritech:machine_core_5"
            }
        },
        "outputs": [
            {
                "id": "oritech:machine_core_6",
                "Count": 1
            }
        ]
    })

    // Ultimate Machine Core Recipe
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 7,
        "layers": [
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["C", "C", "R", "R", "R", "C", "C"],
                    ["C", "D", "R", "R", "R", "D", "C"],
                    ["R", "R", "G", "G", "G", "R", "R"],
                    ["R", "R", "G", "F", "G", "R", "R"],
                    ["R", "R", "G", "G", "G", "R", "R"],
                    ["C", "D", "R", "R", "R", "D", "C"],
                    ["C", "C", "R", "R", "R", "C", "C"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["C", "D", "R", "R", "R", "D", "C"],
                    ["D", "D", "D", "D", "D", "D", "D"],
                    ["R", "D", "E", "E", "E", "D", "R"],
                    ["R", "D", "E", "E", "E", "D", "R"],
                    ["R", "D", "E", "E", "E", "D", "R"],
                    ["D", "D", "D", "D", "D", "D", "D"],
                    ["C", "D", "R", "R", "R", "D", "C"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["R", "R", "G", "G", "G", "R", "R"],
                    ["R", "D", "E", "E", "E", "D", "R"],
                    ["G", "E", "S", "S", "S", "E", "G"],
                    ["G", "E", "S", "S", "S", "E", "G"],
                    ["G", "E", "S", "S", "S", "E", "G"],
                    ["R", "D", "E", "E", "E", "D", "R"],
                    ["R", "R", "G", "G", "G", "R", "R"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["R", "R", "G", "F", "G", "R", "R"],
                    ["R", "D", "E", "E", "E", "D", "R"],
                    ["G", "E", "S", "S", "S", "E", "G"],
                    ["F", "E", "S", "M", "S", "E", "F"],
                    ["G", "E", "S", "S", "S", "E", "G"],
                    ["R", "D", "E", "E", "E", "D", "R"],
                    ["R", "R", "G", "F", "G", "R", "R"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["R", "R", "G", "G", "G", "R", "R"],
                    ["R", "D", "E", "E", "E", "D", "R"],
                    ["G", "E", "S", "S", "S", "E", "G"],
                    ["G", "E", "S", "S", "S", "E", "G"],
                    ["G", "E", "S", "S", "S", "E", "G"],
                    ["R", "D", "E", "E", "E", "D", "R"],
                    ["R", "R", "G", "G", "G", "R", "R"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["C", "D", "R", "R", "R", "D", "C"],
                    ["D", "D", "D", "D", "D", "D", "D"],
                    ["R", "D", "E", "E", "E", "D", "R"],
                    ["R", "D", "E", "E", "E", "D", "R"],
                    ["R", "D", "E", "E", "E", "D", "R"],
                    ["D", "D", "D", "D", "D", "D", "D"],
                    ["C", "D", "R", "R", "R", "D", "C"]
                ]
            },
            {
                "type": "compactcrafting:mixed",
                "pattern": [
                    ["C", "C", "R", "R", "R", "C", "C"],
                    ["C", "D", "R", "R", "R", "D", "C"],
                    ["R", "R", "G", "G", "G", "R", "R"],
                    ["R", "R", "G", "F", "G", "R", "R"],
                    ["R", "R", "G", "G", "G", "R", "R"],
                    ["C", "D", "R", "R", "R", "D", "C"],
                    ["C", "C", "R", "R", "R", "C", "C"]
                ]
            }
        ],
        "catalyst": {
            "id": "extendedcrafting:enhanced_ender_catalyst",
            "Count": 1
        },
        "components": {
            "C": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:crystaltine_block"
            },
            "R": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:redstone_ingot_block"
            },
            "D": {
                "type": "compactcrafting:block",
                "block": "oritech:duratium_block"
            },
            "G": {
                "type": "compactcrafting:block",
                "block": "forbidden_arcanus:deorum_block"
            },
            "F": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:flux_star_block"
            },
            "E": {
                "type": "compactcrafting:block",
                "block": "oritech:energite_block"
            },
            "S": {
                "type": "compactcrafting:block",
                "block": "forbidden_arcanus:stellarite_block"
            },
            "M": {
                "type": "compactcrafting:block",
                "block": "oritech:machine_core_6"
            }
        },
        "outputs": [
            {
                "id": "oritech:machine_core_7",
                "Count": 1
            }
        ]
    })
})
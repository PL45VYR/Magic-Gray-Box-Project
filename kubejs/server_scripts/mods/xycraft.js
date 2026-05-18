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
    event.replaceInput({output: "xycraft_machines:collector"}, "minecraft:redstone", "xycraft_machines:machine_base")
})
ServerEvents.recipes(event => {
    // Atomic Reconstruction Tweaks
    event.replaceInput({ output: "actuallyadditions:restonia_crystal" }, "minecraft:redstone", "minecraft:redstone_block")
    event.replaceInput({ output: "actuallyadditions:palis_crystal" }, "minecraft:lapis_lazuli", "minecraft:lapis_block")
    event.replaceInput({ output: "actuallyadditions:diamatine_crystal" }, "minecraft:diamond", "minecraft:diamond_block")
    event.replaceInput({ output: "actuallyadditions:void_crystal" }, "minecraft:coal", "minecraft:coal_block")
    event.replaceInput({ output: "actuallyadditions:emeradic_crystal" }, "minecraft:emerald", "minecraft:emerald_block")
    event.replaceInput({ output: "actuallyadditions:enori_crystal" }, "minecraft:iron_ingot", "minecraft:iron_block")

    // Machine Casing Replacements
    event.replaceInput({ input: "actuallyadditions:iron_casing" }, "actuallyadditions:iron_casing", "actuallyadditions:lava_factory_casing")
    event.replaceInput({ id: "actuallyadditions:feeder" }, "actuallyadditions:wood_casing", "actuallyadditions:lava_factory_casing")

    // Atomic Reconstructor Recipe
    event.recipes.extendedcrafting.shaped_table("actuallyadditions:atomic_reconstructor",
        [
            "AAAAAAA",
            "ABAAABA",
            "AACDCEF",
            "AADGEEF",
            "AACDCEF",
            "ABAAABA",
            "AAAAAAA"
        ],
        {
            "A": {
                "item": "create:polished_cut_deepslate"
            },
            "B": {
                "item": "immersiveengineering:capacitor_hv"
            },
            "C": {
                "item": "create:electron_tube"
            },
            "D": {
                "item": "industrialforegoing:iron_gear"
            },
            "E": {
                "item": "extendedcrafting:crystaltine_ingot"
            },
            "F": {
                "item": "xycraft_world:glass_viewer_immortal"
            },
            "G": {
                "item": "actuallyadditions:lava_factory_casing"
            }
        }
    )

    // Empowerer Recipe
    event.recipes.extendedcrafting.shaped_table('actuallyadditions:empowerer',
        [
            "       ",
            "  ABA  ",
            "ACDEDCA",
            "ADFGFDA",
            "AAAAAAA",
            "AAAAAAA",
            "       "
        ],
        {
            "A": {
                "item": "create:polished_cut_deepslate"
            },
            "B": {
                "item": "reliquary:eye_of_the_storm"
            },
            "C": {
                "item": "railcraft:charge_coil"
            },
            "D": {
                "item": "actuallyadditions:quintuple_battery"
            },
            "E": {
                "item": "actuallyadditions:lava_factory_casing"
            },
            "F": {
                "item": "actuallyadditions:restonia_crystal_block"
            },
            "G": {
                "item": "actuallyadditions:diamatine_crystal_block"
            }
        }
    )

    // Empowered Restonia Recipe
    event.recipes.actuallyadditions.empowering("actuallyadditions:empowered_restonia_crystal",
        'actuallyadditions:restonia_crystal_block',
        [
            'minecraft:red_dye',
            'quark:red_corundum_cluster',
            'xycraft_world:xychorium_storage_red',
            'hazennstuff:dreadsteel_ingot'
        ]
    )

    // Empowered Palis Recipe
    event.recipes.actuallyadditions.empowering("actuallyadditions:empowered_palis_crystal",
        'actuallyadditions:palis_crystal_block',
        [
            'minecraft:blue_dye',
            'quark:indigo_corundum_cluster',
            'xycraft_world:xychorium_storage_blue',
            'hazennstuff:stardust'
        ]
    )

    // Empowered Diamatine Recipe
    event.recipes.actuallyadditions.empowering("actuallyadditions:empowered_diamatine_crystal",
        'actuallyadditions:diamatine_crystal_block',
        [
            'minecraft:light_blue_dye',
            'quark:blue_corundum_cluster',
            'create_enchantment_industry:super_experience_block',
            'quark:soul_bead'
        ]
    )

    // Empowered Void Recipe
    event.recipes.actuallyadditions.empowering("actuallyadditions:empowered_void_crystal",
        'actuallyadditions:void_crystal_block',
        [
            'minecraft:black_dye',
            'quark:black_corundum_cluster',
            'xycraft_world:xychorium_storage_dark',
            'transmog:void_fragment'
        ]
    )

    // Empowered Emeradic Recipe
    event.recipes.actuallyadditions.empowering("actuallyadditions:empowered_emeradic_crystal",
        'actuallyadditions:emeradic_crystal_block',
        [
            'minecraft:lime_dye',
            'quark:green_corundum_cluster',
            'xycraft_world:xychorium_storage_green',
            'hazennstuff:chlorophyte_ingot'
        ]
    )

    // Empowered Enori Recipe
    event.recipes.actuallyadditions.empowering("actuallyadditions:empowered_enori_crystal",
        'actuallyadditions:enori_crystal_block',
        [
            'minecraft:gray_dye',
            'quark:white_corundum_cluster',
            'xycraft_world:xychorium_storage_light',
            'forbidden_arcanus:rune'
        ]
    )
})
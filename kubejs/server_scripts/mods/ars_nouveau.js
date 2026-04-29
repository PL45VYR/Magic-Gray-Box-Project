ServerEvents.recipes(event => {

    // Arcane Core Recipe Change
    event.replaceInput({ id: 'ars_nouveau:arcane_core' }, 'minecraft:gold_ingot', 'forbidden_arcanus:deorum_ingot')

    // Gold Replacement for Hallowed Gold
    event.replaceInput({ id: /ars.*/ }, 'minecraft:gold_ingot', 'malum:hallowed_gold_ingot')
    event.replaceInput({ id: /ars.*/ }, 'minecraft:gold_nugget', 'malum:hallowed_gold_ingot')
    event.replaceInput({ id: /ars.*/ }, 'minecraft:gold_block', 'malum:hallowed_gold_ingot')
    event.replaceInput({ id: /starbunclemania.*/ }, 'minecraft:gold_ingot', 'malum:hallowed_gold_ingot')
    event.replaceInput({ id: /starbunclemania.*/ }, 'minecraft:gold_nugget', 'malum:hallowed_gold_ingot')
    event.replaceInput({ id: /starbunclemania.*/ }, 'minecraft:gold_block', 'malum:hallowed_gold_ingot')

    // Air Essence Simplification
    event.replaceInput({ output: 'ars_nouveau:air_essence' }, 'ars_nouveau:wilden_wing', 'forbidden_arcanus:bat_wing')

    // Early Occultism Chalk

    // White Chalk
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
            {
                "item": "occultism:otherworld_ashes"
            },
            {
                "item": "occultism:otherworld_ashes"
            },
            {
                "item": "occultism:otherworld_ashes"
            },
            {
                "item": "occultism:burnt_otherstone"
            },
            {
                "item": "occultism:burnt_otherstone"
            },
            {
                "item": "occultism:burnt_otherstone"
            }
        ],
        "reagent": {
            "item": "ars_nouveau:runic_chalk"
        },
        "result": {
            "count": 1,
            "id": "occultism:chalk_white_impure"
        },
        "sourceCost": 0
    })

    // Yellow Chalk
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
            {
                "item": "malum:ether"
            },
            {
                "tag": "c:dusts/gold"
            },
            {
                "item": "malum:ether"
            },
            {
                "tag": "c:dusts/gold"
            },
            {
                "item": "malum:ether"
            },
            {
                "tag": "c:dusts/gold"
            },
            {
                "item": "malum:ether"
            },
            {
                "tag": "c:dusts/gold"
            }
        ],
        "reagent": {
            "item": "occultism:chalk_white_impure"
        },
        "result": {
            "count": 1,
            "id": "occultism:chalk_yellow_impure"
        },
        "sourceCost": 1000
    })

    // Purple Chalk
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
            {
                "item": "hazennstuff:shadow_scale"
            },
            {
                "tag": "c:dusts/obsidian"
            },
            {
                "item": "hazennstuff:shadow_scale"
            },
            {
                "tag": "c:dusts/obsidian"
            },
            {
                "item": "hazennstuff:shadow_scale"
            },
            {
                "tag": "c:dusts/obsidian"
            },
            {
                "item": "hazennstuff:shadow_scale"
            },
            {
                "tag": "c:dusts/obsidian"
            },
        ],
        "reagent": {
            "item": "occultism:chalk_white_impure"
        },
        "result": {
            "count": 1,
            "id": "occultism:chalk_purple_impure"
        },
        "sourceCost": 1000
    })
})
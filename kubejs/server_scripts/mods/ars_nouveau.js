ServerEvents.recipes(event => {

    // Gold Replacement for Hallowed Gold
    event.replaceInput({ id: /ars.*/ }, 'minecraft:gold_ingot', 'malum:hallowed_gold_ingot')
    event.replaceInput({ id: /ars.*/ }, 'minecraft:gold_nugget', 'malum:hallowed_gold_ingot')
    event.replaceInput({ id: /ars.*/ }, 'minecraft:gold_block', 'malum:hallowed_gold_ingot')
    event.replaceInput({ id: /starbunclemania.*/ }, 'minecraft:gold_ingot', 'malum:hallowed_gold_ingot')
    event.replaceInput({ id: /starbunclemania.*/ }, 'minecraft:gold_nugget', 'malum:hallowed_gold_ingot')
    event.replaceInput({ id: /starbunclemania.*/ }, 'minecraft:gold_block', 'malum:hallowed_gold_ingot')

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
                "item": "hexerei:dried_belladonna_flowers"
            },
            {
                "item": "malum:paracausal_flame"
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
                "item": "malum:paracausal_flame"
            },
            {
                "item": "hexerei:dried_belladonna_flowers"
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
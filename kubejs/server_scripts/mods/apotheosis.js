ServerEvents.recipes(event => {
    event.custom({
        "type": "apothic_enchanting:infusion",
        "input": {
            "item": "malum:fused_consciousness"
        },
        "requirements": {
            "eterna": 50,
            "quanta": 1,
            "arcana": 58.58
        },
        "max_requirements": {
            "eterna": 50,
            "quanta": 1,
            "arcana": 58.58
        },
        "result": {
            "id": "endrem:cryptic_eye",
            "count": 1
        }
    })

    // Rarity Material Recipes
    event.recipes.create.crushing(['2x apotheosis:mythic_material', CreateItem.of('apotheosis:mythic_material', 0.25)], 'ancientreforging:ancient_material')
    event.recipes.create.crushing(['2x apotheosis:epic_material', CreateItem.of('apotheosis:epic_material', 0.25)], 'apotheosis:mythic_material')
    event.recipes.create.crushing(['2x apotheosis:rare_material', CreateItem.of('apotheosis:rare_material', 0.25)], 'apotheosis:epic_material')
    event.recipes.create.crushing(['2x apotheosis:uncommon_material', CreateItem.of('apotheosis:uncommon_material', 0.25)], 'apotheosis:rare_material')
    event.recipes.create.crushing(['2x apotheosis:common_material', CreateItem.of('apotheosis:common_material', 0.25)], 'apotheosis:uncommon_material')

})
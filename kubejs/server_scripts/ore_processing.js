ServerEvents.recipes(event => {

    // Recipe: Crushing | Raw Ore to Clump
    const crushingRawOre = (material) => {
        event.recipes.create.crushing(
            [unifyItem(`c:clumps/${material}`), CreateItem.of('create:experience_nugget', 0.75)],
            unifyIngredient(`#c:raw_materials/${material}`)
        )
    }

    // Recipe: Fragmenting | Raw Ore to Clump BYP
    const fragmentRawOre = () => { }

    // Recipe: Refining | Raw Ore to Clump MULT
    const refineryRawOre = (material, ticks) => {
        event.custom({
            "type": "oritech:refinery",
            "fluidInput": {
                "amount": 250,
                "fluid": "oritech:still_sheol_fire"
            },
            "fluidOutputs": [
                {
                    "amount": 100,
                    "fluid": "minecraft:lava"
                }
            ],
            "ingredients": [
                {
                    "tag": `c:raw_materials/${material}`
                }
            ],
            "results": [
                {
                    "count": 2,
                    "id": unifyItem(`c:clumps/${material}`)
                }
            ],
            "time": ticks
        })
    }

    // Recipe: Hammer | Raw Ore to Dust
    const hammerRawOre = (material) => { }

    // Recipe: Crusher Spirit | Raw Ore to Dust MULT
    const spiritRawOre = () => { }

    // Recipe: Arc Furnace | Raw Ore to Ingot
    const arcsmeltRawOre = () => { }

    // Recipe: Dissolution | Raw Ore to Dirty Slurry
    const dissolutionRawOre = () => { }

    // Recipe: Enrichment | Ore Block to Dust
    const enrichingOreBlock = () => { }

    // Recipe: Purification | Ore Block to Clump
    const purifyingOreBlock = () => { }

    // Recipe: Chem Injection | Ore Block to Shard
    const injectOreBlock = () => { }

    // Recipe: Chem Dissolution | Ore Block to Dirty Slurry
    const dissolutionOreBlock = () => { }

    // Recipe: Chem Wash | Dirty Slurry to Clean Slurry
    const chemwashDirtySlurry = () => { }

    // Recipe: Chem Crystallizer | Clean Slurry to Crystal
    const crystalCleanSlurry = () => { }

    // Recipe: Chem Injection | Crystal to Shard
    const injectingCrystal = () => { }

    // Recipe: Purification | Shard to Clump
    const purifyingShard = () => { }

    // Recipe: Melting | Dust to Molten
    const meltingDust = (material, heat) => {
        if (heat == 'heated') {
            event.recipes.create.mixing(
                Fluid.of(`evolvedmekanism:molten_${material}`, 90),
                [
                    unifyItem(`c:dusts/${material}`)
                ]
            ).heated()
        } else if (heat == 'superheated') {
            event.recipes.create.mixing(
                Fluid.of(`evolvedmekanism:molten_${material}`, 90),
                [
                    unifyItem(`c:dusts/${material}`)
                ]
            ).superheated()
        } else {
            event.recipes.create.mixing(
                Fluid.of(`evolvedmekanism:molten_${material}`, 90),
                [
                    unifyItem(`c:dusts/${material}`)
                ]
            )
        }
    }

    // Recipe: Arc Furnace | Dust to Ingot
    const arcsmeltDust = () => { }

    // Recipe: Milling | Small Clump to Small Dust
    const millingSmallClump = (material) => {
        event.recipes.create.milling(
            unifyItem(`c:small_dusts/${material}`),
            unifyItem(`#c:small_clumps/${material}`),
        )
    }

    // Recipe: Smelting | Small Dust to Nugget
    const smeltingSmallDust = (material) => { }

    // Recipe: Bulk Washing | Dirty Dust to Dust PART
    const splashingDirtyDust = (material) => {
        event.recipes.create.splashing(
            unifyItem(`c:dusts/${material}`, 0.5),
            unifyItem(`c:dirty_dusts/${material}`)
        )
    }

    // Recipe: Enrichment | Dirty Dust to Dust
    const enrichingDirtyDust = () => { }

    // Recipe: Melting | Dirty Dust to Molten
    const meltingDirtyDust = (material, heat) => {
        if (heat == 'heated') {
            event.recipes.createMixing(
                Fluid.of(`evolvedmekanism:molten_${material}`, 45),
                [
                    unifyItem(`#c:dirty_dusts/${material}`)
                ]
            ).heated()
        } else if (heat == 'superheated') {
            event.recipes.createMixing(
                Fluid.of(`evolvedmekanism:molten_${material}`, 45),
                [
                    unifyItem(`#c:dirty_dusts/${material}`)
                ]
            ).superheated()
        } else {
            event.recipes.createMixing(
                Fluid.of(`evolvedmekanism:molten_${material}`, 45),
                [
                    unifyItem(`#c:dirty_dusts/${material}`)
                ]
            )
        }
    }

    // Recipe: Milling | Clump to Dust
    const millingClump = (material) => {
        event.recipes.create.milling(
            unifyItem(`c:dusts/${material}`),
            unifyItem(`c:clumps/${material}`)
        )
    }

    // Recipe: Crushing | Clump to Dirty Dust
    const crushingClump = (material) => {
        event.recipes.create.crushing(
            [unifyItem(`c:dirty_dusts/${material}`)],
            unifyItem(`c:clumps/${material}`)
        )
    }

    // Recipe: Crusher Spirit | Clump to Dirty Dust MULT
    const spiritClump = () => { }

    // Recipe: Bulk Washing | Clump to Nugget BYP
    const splashingClump = () => { }

    // Recipe: Centrifuge | Clump to Gem
    const centrifugeClump = () => { }

    // Recipe: Water Separation | Clump to Gem MULT
    const waterClump = () => { }

    // Recipe: Acid Separation | Clump to Gem MULT PLUS
    const acidClump = () => { }

    // Recipe: Meat Washing | Clump to Raw Meat
    const meatingClump = () => { }

    // Recipe: Meat Sieving | Fermented to Dust
    const sievingFermented = () => { }

    // Recipe: Smelting | Metal Gem to Ingot
    const smeltingMetalGem = () => { }

    // Recipe: Alloying | Metal Gem to Ingot MULT
    const alloyingMetalGem = () => { }

    // Recipe: Engraving | Metal Gem to Dust
    const engravingMetalGem = () => { }

    // Recipe: Arc Furnace | Metal Gem to Ingot MULT PLUS
    const arcsmeltMetalGem = () => { }

    // Iron Recipes
    let material_list = ['nickel', 'platinum', 'iron', 'copper', 'gold', 'zinc', 'osmium', 'silver', 'tin', 'lead', 'aluminum', 'uranium']
    let one_to_one_tough = ['platinum', 'osmium']
    material_list.forEach(material => {
        crushingRawOre(material)
        meltingDust(material, 'heated')
        millingSmallClump(material)
        splashingDirtyDust(material)
        meltingDirtyDust(material, 'heated')
        millingClump(material)
        crushingClump(material)

        if (tough_materials.includes(material)) {
            refineryRawOre(material, 120)
        } else if (material != 'uranium') {
            refineryRawOre(material, 80)
        }

    })
})
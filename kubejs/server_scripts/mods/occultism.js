ServerEvents.recipes(event => {

    // Spirit Fire Recipes
    event.recipes.occultism.spirit_fire('minecraft:blackstone', 'forbidden_arcanus:darkstone')
    event.recipes.occultism.spirit_fire('malum:azure_runewood_sapling', 'malum:runewood_sapling')

    // Otherrock and Otherstone Recipe Tweaks
    event.replaceInput({id: 'occultism:spirit_fire/otherrock'}, 'minecraft:diorite', 'malum:tainted_rock')
    event.replaceInput({id: 'occultism:spirit_fire/otherstone'}, 'minecraft:andesite', 'malum:twisted_rock')
})
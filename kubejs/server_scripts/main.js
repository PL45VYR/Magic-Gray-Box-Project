// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

// Custom Vanilla Recipes

ServerEvents.recipes(event => {
    // Pyromantic Brazier Recipe
    event.shaped('1x theurgy:pyromantic_brazier', [
        'SCS',
        'CFC',
        'SCS'
    ], {
        S: '#c:stones',
        C: '#c:ingots/copper',
        F: 'sgjourney:fire_pit'
    })

    // Quartz Block Recipe Tweak
    event.replaceInput({ id: 'minecraft:quartz_block' }, 'minecraft:quartz', '#c:gems/quartz')

    // Magic Workbench Recipe
    event.shaped(
        Item.of('eidolon_repraised:worktable'),
        [
            'CCC',
            'ISI',
            'PPP'
        ],
        {
            S: 'malum:refined_soulstone',
            I: 'eidolon_repraised:pewter_inlay',
            P: '#minecraft:planks',
            C: 'minecraft:purple_carpet'
        }
    )
})

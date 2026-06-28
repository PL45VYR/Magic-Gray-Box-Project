StartupEvents.registry('item', (event) => {
    event.create('dummy_craft_frontier', 'occultism:ritual_dummy')
        .pentacleType("craft") //Determines the dummy texture, valid options are Valid options are: "misc", "craft", "summon", "possess", default is "misc".
        .displayName('Ritual: Craft Frontier Gateway')
        .ritualTooltip('Cross the First Frontier by completing this gateway.')
})
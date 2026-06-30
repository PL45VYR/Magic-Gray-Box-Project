StartupEvents.registry('item', (event) => {
    event.create('dummy_craft_frontier', 'occultism:ritual_dummy')
        .pentacleType("craft")
        .displayName('Ritual: Craft Frontier Gateway')
        .ritualTooltip('Cross the First Frontier by completing this gateway.')

    event.create('dummy_craft_blazebloom_goo', 'occultism:ritual_dummy')
        .pentacleType("craft") //Valid options are: "misc", "craft", "summon", "possess"
        .displayName('Ritual: Craft Blazebloom Goo')
        .ritualTooltip('Blazebloom Goo allows you to start creating Blazegold Ore.')
})
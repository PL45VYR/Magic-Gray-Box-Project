StartupEvents.registry('item', (event) => {
    event.create('dummy_craft_frontier', 'occultism:ritual_dummy')
        .pentacleType("craft")
        .displayName('Ritual: Craft Frontier Gateway')
        .ritualTooltip('Cross the First Frontier by completing this gateway.')

    event.create('dummy_craft_blazebloom_goo', 'occultism:ritual_dummy')
        .pentacleType("craft") //Valid options are: "misc", "craft", "summon", "possess"
        .displayName('Ritual: Craft Blazebloom Goo')
        .ritualTooltip('Blazebloom Goo allows you to start creating Blazegold Ore.')

    event.create('dummy_misc_voidshimmer_goo', 'occultism:ritual_dummy')
        .pentacleType("misc")
        .displayName('Ritual: Forge VoidShimmer Goo')
        .ritualTooltip('VoidShimmer Goo allows you to start creating Celestigem Ore.')

    event.create('dummy_possess_monstrous_eye', 'occultism:ritual_dummy')
    .pentacleType("possess")
    .displayName('Ritual: Possess Monstrous Eye')
    .ritualTooltip('The Monstrous Eye will lead you to a Netherite Monstrosity.')

    event.create('dummy_misc_mech_eye', 'occultism:ritual_dummy')
    .pentacleType("misc")
    .displayName('Ritual: Forge Mech Eye')
    .ritualTooltip('The Mech Eye will lead you to The Harbinger.')

    event.create('dummy_misc_flame_eye', 'occultism:ritual_dummy')
    .pentacleType("misc")
    .displayName('Ritual: Forge Flame Eye')
    .ritualTooltip('The Flame Eye will lead you to Ignis.')

    event.create('dummy_misc_cursed_eye', 'occultism:ritual_dummy')
    .pentacleType("misc")
    .displayName('Ritual: Forge Cursed Eye')
    .ritualTooltip('The Cursed Eye will lead you to Maledictus.')

    event.create('dummy_possess_desert_eye', 'occultism:ritual_dummy')
    .pentacleType("possess")
    .displayName('Ritual: Possess Desert Eye')
    .ritualTooltip('The Desert Eye will lead you to an Ancient Remnant.')

    event.create('dummy_possess_abyss_eye', 'occultism:ritual_dummy')
    .pentacleType("possess")
    .displayName('Ritual: Possess Abyss Eye')
    .ritualTooltip('The Abyss Eye will lead you to The Leviathan.')

    event.create('dummy_possess_storm_eye', 'occultism:ritual_dummy')
    .pentacleType("possess")
    .displayName('Ritual: Possess Storm Eye')
    .ritualTooltip('The Storm Eye will lead you to Scylla.')
})
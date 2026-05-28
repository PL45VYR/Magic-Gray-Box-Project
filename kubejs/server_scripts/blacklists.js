ServerEvents.tags('entity_type', event => {
    const drygmyBlacklist = [
        "cataclysm:ender_guardian",
        "cataclysm:netherite_monstrosity",
        "cataclysm:ignis",
        "cataclysm:the_harbinger",
        "cataclysm:the_leviathan",
        "cataclysm:ancient_remnant",
        "cataclysm:maledictus",
        "cataclysm:scylla",
        "irons_spellbooks:fire_boss",
        "irons_spellbooks:dead_king",
        "discerning_the_eldritch:ascended_one",
        "discerning_the_eldritch:ascended_one_cultist",
        "ars_nouveau:wilden_boss"
    ]

    drygmyBlacklist.forEach(type => {
        event.add("ars_nouveau:drygmy_blacklist", type)
        event.add("ars_nouveau:jar_blacklist", type)
    })

    event.add("ars_nouveau:drygmy_blacklist", /.*possessed.*/)
    event.add("ars_nouveau:drygmy_blacklist", /occultism:wild.*/)

    event.add("ars_nouveau:drygmy_blacklist", "occultism:afrit_wild")
    event.add("ars_nouveau:drygmy_blacklist", "occultism:iesnium_golem")
    event.add("ars_nouveau:drygmy_blacklist", "occultism:marid_unbound")
    event.add("ars_nouveau:drygmy_blacklist", "occultism:mercy_goat")
})
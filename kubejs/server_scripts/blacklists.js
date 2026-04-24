ServerEvents.tags('entity_type', event => {
    const drygmyBlacklist = [
        "cataclysm:ender_guardian",
        "cataclysm:netherite_monstrosity",
        "cataclysm:ignis",
        "cataclysm:the_harbinger",
        "cataclysm:the_leviathan",
        "cataclysm:ancient_remnant",
        "cataclysm:maledictus",
        "cataclysm:scylla"
    ]

    drygmyBlacklist.forEach(type => {
        event.add(type, "#ars_nouveau:drygmy_blacklist")
    })
})
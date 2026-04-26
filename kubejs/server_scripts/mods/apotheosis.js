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
})
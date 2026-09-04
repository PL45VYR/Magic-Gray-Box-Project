/**
 * unifyItem(): Input an item tag to get an itemstack; returns string num1 or num1 are empty
 * @param {*} tag : string tag input, e.g. 'c:dusts/iron'; removes # if included
 * @param {*} count : decimal input, truncates if >1; =1 otherwise
 * @param {*} chance : decimal input; =0.5 when input <=0
 * @returns 
 */
function unifyItem(tag, num1, num2) {
    console.log(`Input Tag: ${tag}`)
    let clean_tag = tag;
    if (tag[0] == '#') {
        clean_tag = tag.slice(1)
    }
    console.log(`Clean Tag: ${clean_tag}`)

    let id = AlmostUnified.getTagTargetItem(clean_tag).getId()
    let count;
    let chance;
    let stack_string;
    let return_type = 'Ingredient'

    if (num1 == undefined) {
        return_type = 'ItemId'
    } else if (num2 == undefined) {    // Is num1 a Chance or a Count?
        count = 1
        if (num1 >= 1) {
            count = num1 | 0
        } else if (num1 > 0) {
            chance = num1
            return_type = 'CreateItem'
        }
    } else if (num2 < 1 && num2 > 0) {  // Is chance (num2) a valid percentage?
        if (num1 >= 1) {
            count = num1 | 0
        }
        chance = num2
        return_type = 'CreateItem'
    } else {
        count = 1
        chance = 0.5
        return_type = 'CreateItem'
    }

    // Build the stack string with count
    stack_string = `${count}x ${id}`
    console.log(`Id: ${id} | Count: ${count} | Chance: ${chance}`)

    // Ash in Case of Emergency
    if (id == 'minecraft:air') {
        console.log(`Type: ${return_type} | Output: ${'supplementaries:ash'}`)
        return 'supplementaries:ash'
    }

    // Stack Type Assignment
    if (return_type == 'ItemId') {
        console.log(`Type: ${return_type} | Output: ${id}`)
        return id
    } else if (return_type == 'CreateItem') {
        console.log(`Type: ${return_type} | Output: ${CreateItem.of(stack_string, chance)}`)
        return CreateItem.of(stack_string, chance)
    } else {
        console.log(`Type: ${return_type} | Output: ${stack_string}`)
        return stack_string
    }
}
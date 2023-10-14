const schema = [
    "id", "name", "description", "price", "type"
]

const schemaVal = function(data){
    for (let value of schema) {
        if (!data.hasOwnProperty(value)) {
            return false;
        }
    }
    return true
}

module.exports = {schemaVal};
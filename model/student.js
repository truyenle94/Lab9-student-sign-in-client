module.exports = (squelize, DataTypes) => {
    var Student = squelize.define('Student',{
        name: {
            type: DataTypes.STRING,
        }, starID: {
            type: DataTypes.STRING,
        }, present: {
            type: DataTypes.BOOLEAN,
        }
    })

    Student.sync({force: true}).then( () => {
        console.log('synced table')
    })

    return Student
}

/*newcode*/
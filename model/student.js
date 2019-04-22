module.exports = (squelize, DataTypes) => {
    var Student = squelize.define('Student',{
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    Student.sync({force: false}).then( () => {
        console.log('synced table')
    })

    return Student
}

/*newcode*/
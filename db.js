const {Sequelize} =require('sequelize')


const sequelize = new Sequelize('test','postgres','sundar@12345',{
    host: 'localhost',
    dialect: 'postgres',
    port:'5432',
    logging: false
    })

    async function testConnection(){
        try{
            await sequelize.authenticate();
            console.log('Connection is successfully........');
    }
    catch(error){
        console.log('Connection failed........', error)
    }}
    testConnection();


    module.exports =sequelize;
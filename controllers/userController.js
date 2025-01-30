const User = require('../model/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { useInflection } = require('sequelize');


const registerUser = async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({
            error: "Please provide both username and password",
        });
    }

    try {
        // Check if the user already exists
        const checkExistingUser = await User.findOne({ where: { username } });
        if (checkExistingUser) {
            return res.status(400).json({
                error: "User already exists",
            });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user
        const newUser = await User.create({ username, password: hashedPassword });

        // Send success response
        res.status(201).json({
            message: "Registration successful",
            user: newUser, // Optional: Include user data (exclude sensitive info like password)
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Something went wrong",
        });
    }
}

const loginUser = async() =>{
    if(!username || !password){
        return resisterUser.status(400).json({
            error: "Please Insert Username and Password"
        })
    }

    try{
        const checkExistingUser = await User.findOne({where: username})
        if(!checkExistingUser){
            return resisterUser.status(400).json({
                error: "New user Required"
                })
                
            }
        const isMatch = await bcrypt.compare(password, checkExistingUser.password)
        if(!isMatch){
            return resisterUser.status(400).json({
                error: "Password is Incorrect!!!!"
                })
            }
        const token = jwt.sign(
            {id: checkExistingUser.username, username: checkExistingUser, username},
            SOIJoijoij3232,
            {expiresIn : '24h'}
        )
        resUser.status(200).json({token: token, message: "Login Successful..."})
        }
    catch(error){
         res.status(500).json({error: "Something went Wrong"});
    }

}
// const getUser = async(req, res)=>{

//     try{
//         const tests = await User.findAll();
//         res.status(200).json(tests);

//     }
//     catch(error){
//         res.status(500).json({error: "Failed to Load"})
//     }
// }

// const createUser = async(req, res)=>{
    
//     try{
        
// const {username, password} = req.body;

// //Hash the password
// const newtest = await User.create({username, password})

// res.status(200).json(newtest);
//     }
//     catch(error){
//         res.status(500).json({error: "Failed to Load"})
//         console.log(error)
//     }

// }

// const updateUser = async(req, res)=>{
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         await user.update(req.body);
//         res.json(user);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// }

// const deleteUser = async(req, res)=>{
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         await user.destroy();
//         res.json({ message: 'User deleted' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// }

// module.exports = {createUser, getUser, deleteUser, updateUser}
module.exports = {registerUser, loginUser}
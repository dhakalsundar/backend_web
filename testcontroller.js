const Test = require('../model/test');
const tests = require('../model/T\test');
 
const getTests = async (req, res) => {
    try {
        const tests = await Test.findAll();
        res.status(200).json(tests);
        console.log('Retrieved all tests users');
    } catch (error) {
       
        res.status(500).json('fieled to retrieve tests');
        }
    }
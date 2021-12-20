const Reporter = require('../Models/reporter')

const create = async(req, res) => {


    try {
        const body = re.body;

        const reporter = await new Reporter(body);

    } catch (error) {
        return res.status(500).send(error.message)
    }






    res.send('done')
}




module.exports = { create }
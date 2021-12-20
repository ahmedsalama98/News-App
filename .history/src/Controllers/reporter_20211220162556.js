const Reporter = require('../Models/reporter')

const create = async(req, res) => {


    try {
        const body = req.body;

        const reporter = await new Reporter(body);

        res.status(200).send(reporter);

    } catch (error) {
        return res.status(500).send(error.message)
    }






    res.send('done')
}




module.exports = { create }
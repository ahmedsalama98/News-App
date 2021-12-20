const Reporter = require('../Models/reporter')

const create = async(req, res) => {


    try {
        const body = req.body;

        const reporter = new Reporter(body);
        await reporter.save()
        const token = await reporter.generateToken()
        res.status(200).send({ reporter, token });

    } catch (error) {
        return res.status(500).send(error.message)
    }




    res.send('done')
}


const update = async(req, res) => {

}



module.exports = { create, update }
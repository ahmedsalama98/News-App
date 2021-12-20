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

    try {

        const updates = Object.keys(req.body)

        _id = req.params.id
        res.status(200).send(updates);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = { create, update }
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

        const updates = Object.keys(req.body);
        const allowsUpdates = ['email', 'phone', 'password']
        const isValidUpdates = updates.every(el => allowsUpdates.includes(el))


        if (!isValidUpdates) {
            return res.status(401).send('Not Allowed Update')
        }

        const _id = req.params.id

        const reporter = await Reporter.findOne({ _id });
        res.status(200).send(reporter);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = { create, update }
const Reporter = require('../Models/reporter')




const index = async(req, res) => {


    try {

        res.status(200).send(req.reporter);

    } catch (error) {
        return res.status(500).send(error.message)
    }

}
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

        const reporter = await Reporter.findById(_id);

        const body = req.body;

        updates.forEach(update => reporter[update] = body[update])
        await reporter.save()
        res.status(200).send(reporter);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const deleteFun = async(req, res) => {

    try {

        const _id = req.params.id

        const reporter = await Reporter.findByIdAndRemove(_id);

        res.status(200).send({ message: 'deleted' });
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = { index, create, update, deleteFun }
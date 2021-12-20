// const Reporter = require('../Models/reporter')

const create = async(req, res) => {


    try {
        const body = req.body;

        // const reporter = await new Reporter({
        //     "name": "ahmed",
        //     "email": "ahmed@gmail.com",
        //     "password": "88888888"
        // });

        res.status(200).send(body);

    } catch (error) {
        return res.status(500).send(error.message)
    }






    res.send('done')
}




module.exports = { create }
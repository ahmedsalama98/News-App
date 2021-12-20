const News = require('../Models/news')


const index = async(req, res) => {


    try {

        const news = await News.find({})

        res.status(200).send(news);

    } catch (error) {
        return res.status(500).send(error.message)
    }

}
const create = async(req, res) => {


    try {
        const body = req.body;

        const News = new News(body);
        await News.save()
        const token = await News.generateToken()
        res.status(200).send({ News, token });

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

        const News = await News.findById(_id);

        const body = req.body;

        updates.forEach(update => News[update] = body[update])
        await News.save()
        res.status(200).send(News);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const deleteFun = async(req, res) => {

    try {

        const _id = req.params.id
        const News = await News.findByIdAndRemove(_id);

        res.status(200).send({ message: 'deleted' });
    } catch (error) {
        return res.status(500).send(error.message)
    }
}








module.exports = { index, create, update, deleteFun }
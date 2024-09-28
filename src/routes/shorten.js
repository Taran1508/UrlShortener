const { Router } = require('express');
const bodyParser = require('body-parser');
const { shortenUrl } = require('../utils/shortener');

const router = Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/shorten',async (req, res) => {
    try {
        const urlBody = new URL(req.body.url);
        const result = await shortenUrl(req.body.url);
        console.log(`${result}`);
        // res.status(200).json(result);
        res.status(200).render('views',{result});
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports= router;
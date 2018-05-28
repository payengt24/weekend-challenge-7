const express = require('express');
const router = express.Router();
const pool = require ('../modules/pool')

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback"`)
        .then((results) => {
            console.log(results.rows);
            res.send(results.rows)
        })
        .catch((error) => {
            console.log('error with feedback GET', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('req.body', req.body)
    const feedback = req.body;
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4)`, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((results) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error with SQL insert on feedback POST', error);
            res.sendStatus(500);
        });
})


router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    console.log('id', id);
    pool.query(`DELETE FROM "feedback"
                WHERE "id" = $1`, [id])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error on delete', error);
            res.sendStatus(500);
        })
})

module.exports = router;
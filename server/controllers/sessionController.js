const session = require('../models/session');

const session_index = (req, res) => {
    session.find().sort( { createdAt: -1 })
        .then((result) => {
            res.render('sessions/index', { title: 'All sessions', sessions: result });
        })
        .catch((err) => {
            console.log(err);
        })
}

const session_details = (req, res) => {
    const id = req.params.id;
    session.findById(id)
        .then(result => {
            res.render('sessions/details', { session: result, title: 'session Details' });
        })
        .catch(err => {
            res.status(404).render('404', { title: 'session not found' });
        });
}

const session_create_get = (req, res) => {
    res.render('sessions/create', { title: 'Create a new session' });
}

const session_create_post = (req, res) => {
    const session = new session(req.body);
    
        session.save()
            .then((result) => {
                res.redirect('/sessions');
            })
            .catch((err) => {
                console.log(err);
            })
}

const session_delete = (req, res) => {
    const id = req.params.id;
    session.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/sessions' });
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = {
    session_index,
    session_details,
    session_create_get,
    session_create_post,
    session_delete
}
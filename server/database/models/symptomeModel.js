const db = require('../vitalitea_blend_db.sql');

exports.getAll = (callback) => {
    const query = 'SELECT * FROM symptomes';
    db.query(query, callback);
};

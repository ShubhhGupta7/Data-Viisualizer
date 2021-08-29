const express = require('express');
const router = express.Router();

router.get('/data-visualizer/tool', function(req, res) {
    return res.render('index');
});

router.get('/data-visualizer/about', function(req, res) {
    return res.render('about');
});

router.get('/data-visualizer/chart-gallery', function(req, res) {
    return res.render('chart_gallery');
});

module.exports = router;
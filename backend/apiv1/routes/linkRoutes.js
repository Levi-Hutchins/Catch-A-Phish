const express = require('express');
const linkController  = require('../api/controllers/linkController');
const { body, validationResult } = require("express-validator");

const router = express.Router();

router.get('/get_link_data', linkController.getLinkData);

router.post(
    '/insert_link_data',
    [
      body('link').isURL(),
      body('description').optional().isLength({ min: 1, max: 500 })
    ],
    linkController.insertLinkData
  );


module.exports = router;
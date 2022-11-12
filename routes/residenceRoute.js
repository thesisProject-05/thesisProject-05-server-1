const express = require('express');
const router = express.Router();
const {getAll,addResidence,deleteResidence,updateResidence,getOne}=require("../controllers/residenceController.js")

router.get('/getAll',getAll);
router.post('/add',addResidence);
router.delete ('/:id',deleteResidence);
router.put("/:id",updateResidence)
router.get('/:id',getOne)



module.exports = router; 


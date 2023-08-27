const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { findByPk } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tagData=await Tag.findAll()
  return res.json(tagData)
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  const tagid = await Tag.findByPk(req.params.id)
  return res.json(tagid)
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  const tagData= await Tag.create({
    tag_name:req.body.tag_name
  })
  return res.json(tagData)
});

router.put('/:id', async (req, res) => {
  const updatedCategory = await Tag.update({
    tag_name:req.body.tag_name
  },
  {
    where:{
      id:req.params.id
    }
  })
  return res.json(updatedCategory)
});

router.delete('/:id', async (req, res) => {
  const deleteCategory = await Tag.destroy({
    where:{
      id:req.params.id
    }
  })
  return res.json(deleteCategory)
});

module.exports = router;

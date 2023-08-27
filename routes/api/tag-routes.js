const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { findByPk } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const tagData=await Tag.findAll()
    return res.json(tagData)
  }catch(err){
    console.log(err);
    return res.json(err);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try{
    const tagid = await Tag.findByPk(req.params.id)
    return res.json(tagid)
  }catch (err){
    console.log(err);
    return res.json(err);
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try{
    const tagData= await Tag.create({
    tag_name:req.body.tag_name
     })
    return res.json(tagData)
  }catch (err){
    console.log(err);
    return res.json(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
    const updatedCategory = await Tag.update({
    tag_name:req.body.tag_name
    },
    {
      where:{
        id:req.params.id
      }
    })
    return res.json(updatedCategory)
  }catch(err){
    console.log(err);
    return res.json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const deleteCategory = await Tag.destroy({
    where:{
      id:req.params.id
    }
    })
    return res.json(deleteCategory)
  }catch (err){
    console.log(err);
    return res.json(err);
  }
});

module.exports = router;

const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // be sure to include its associated Product data
  Category.findAll({ include: Product })
  .then((categoryData)=>{
    res.json(categoryData)
  })
  .catch((err) => {
    res.json(err)
  })
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, { include: Product })
  .then((categoryData)=>{
    res.json(categoryData)
  })
  .catch((err) => {
    res.json(err)
  })
});

router.post('/', (req, res) => {
  Category.create({
    category_name:req.body.category_name
  })
  .then((newCateogry) => {
    res.json(newCateogry);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  Category.update({
    category_name:req.body.category_name
  },
  {
    where:{
      id: req.params.id
    }
  })
  .then((updatedCategory) => {
    res.json(updatedCategory);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where:{
      id: req.params.id
    }
  })
  .then((deletedBook) => {
    res.json(deletedBook);
  })
  .catch((err) => res.json(err));
});

module.exports = router;

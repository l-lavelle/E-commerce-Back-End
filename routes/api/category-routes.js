const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({ include: Product }).then((categoryData)=>{
    res.json(categoryData)
  })
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, { include: Product }).then((categoryData)=>{
    res.json(categoryData)
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
  // update a category by its `id` value
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

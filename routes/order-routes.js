const express = require('express');
const { getAllOrders, createOrder, updateOrder, deleteOrder, getOneOrder } = require('../controllers/order-controller');


const router = express.Router();

router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOneOrder);
router.patch('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
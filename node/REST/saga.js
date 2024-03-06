// index.js

const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

// Simulated databases
let inventory = {
  product1: 5, // Initial inventory
}

let orders = []

// Step 1: Initiate Order (Create Order)
app.post('/order', (req, res) => {
  const { productId, quantity } = req.body

  // Check if the product is available in inventory
  if (!inventory[productId] || inventory[productId] < quantity) {
    return res
      .status(400)
      .json({ error: 'Product not available or insufficient stock' })
  }

  // Deduct the ordered quantity from inventory
  inventory[productId] -= quantity

  // Create the order
  const order = { productId, quantity, status: 'initiated' }
  orders.push(order)

  res.json({ message: 'Order initiated successfully', order })
})

// Step 2: Reserve Inventory
// This step might be automatically triggered after order creation or by a separate process
// We'll simulate it by calling this endpoint manually in this example
app.post('/reserve-inventory', (req, res) => {
  const { orderId } = req.body

  const order = orders.find((o) => o.id === orderId)
  if (!order) {
    return res.status(404).json({ error: 'Order not found' })
  }

  // Check if the product is available in inventory
  if (
    !inventory[order.productId] ||
    inventory[order.productId] < order.quantity
  ) {
    // Compensate by releasing reserved inventory and updating order status
    inventory[order.productId] += order.quantity
    order.status = 'inventory_reservation_failed'
    return res.status(400).json({ error: 'Inventory reservation failed' })
  }

  // Deduct the reserved quantity from inventory
  inventory[order.productId] -= order.quantity

  // Update the order status
  order.status = 'inventory_reserved'

  res.json({ message: 'Inventory reserved successfully', order })
})

// Step 3: Process Payment
app.post('/process-payment', (req, res) => {
  const { orderId } = req.body

  const order = orders.find((o) => o.id === orderId)
  if (!order) {
    return res.status(404).json({ error: 'Order not found' })
  }

  // Simulate payment processing
  // For simplicity, we assume payment is always successful
  order.status = 'payment_processed'

  res.json({ message: 'Payment processed successfully', order })
})

// Step 4: Ship Order
app.post('/ship-order', (req, res) => {
  const { orderId } = req.body

  const order = orders.find((o) => o.id === orderId)
  if (!order) {
    return res.status(404).json({ error: 'Order not found' })
  }

  // Check if the order is paid and inventory is reserved
  if (
    order.status !== 'payment_processed' ||
    order.status !== 'inventory_reserved'
  ) {
    return res
      .status(400)
      .json({ error: 'Cannot ship order, payment or inventory not processed' })
  }

  // Simulate shipping the order
  order.status = 'shipped'

  res.json({ message: 'Order shipped successfully', order })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

import { Router } from 'express'
import json from './economic-groups.json'

// Create express router
const router = Router()

router.get('/', (req, res) => {
  res.json(json)
})

// Export the server middleware
export default router

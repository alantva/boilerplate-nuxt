import { Router } from 'express'
import egRoutes from './economic-groups'

// Create express router
const router = Router()

router.use('/economic-groups', egRoutes)

// Export the server middleware
export default router

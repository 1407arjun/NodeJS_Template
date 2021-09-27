import { application } from 'express'

application.listen(process.env.PORT, () => {
  console.log('Server started at PORT' + process.env.PORT)
})

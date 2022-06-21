import fs from 'fs'

import vercelConfig from './vercel.json'

// write the config to vercel.json
fs.writeFileSync('./vercel.json', JSON.stringify(vercelConfig, null, 2))

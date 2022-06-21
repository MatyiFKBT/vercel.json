#!/usr/bin/env node
import fs from 'fs'

import vercelConfig from './vercel.json'

console.log('Creating Vercel config file...')
// write the config to vercel.json
fs.writeFileSync('./vercel.json', JSON.stringify(vercelConfig, null, 2))

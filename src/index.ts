import fs from 'fs'

const vercelConfig = {
	"github": {
		"silent": true
	},
	"regions": ["fra1"]
}

// write the config to vercel.json
fs.writeFileSync('./vercel.json', JSON.stringify(vercelConfig, null, 2))

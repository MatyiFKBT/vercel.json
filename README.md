# vercel.json

[![npm](https://img.shields.io/npm/v/vercel.json/latest)](https://www.npmjs.com/package/vercel.json)

Quickly scaffold a vercel.json configuration file.

See [vercel.json](src/vercel.json)

## Usage

```bash
npm install -g pnpm
nx vercel.json
```

## Known Issues

* The `vercel.json` file is overwritten if it already exists.
* On Windows, the only supported package manager is `pnpm`. See <https://github.com/npm/exec/issues/17>.

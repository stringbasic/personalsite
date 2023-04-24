# StringBasic personal site
My personal website, currently accessible at:

[![Netlify Status](https://api.netlify.com/api/v1/badges/fd9cb828-4160-4112-a2ab-3902d946ae68/deploy-status)](https://app.netlify.com/sites/tender-stonebraker-78d2e4/deploys)
[![Build Status](https://github.com/stringbasic/personalsite/workflows/nodejs-ci/badge.svg)](https://github.com/stringbasic/personalsite/actions)

* [www.stringbasic.com](http://www.stringbasic.com)
* [www.stringbasic.pt](http://www.stringbasic.pt)

# Instructions

## start development server

```
> npx eleventy --serve
```

or:
```
> npm start
```

## build website

```
> npm run build
```

## run tests
Start development server first, and then run tests with cypress with:

```
> npm test
```

Cypress UI can be open with:
```
> npx cypress open
```

Node processes for current session can be stopped with:
```
> pkill -s 0 node
```

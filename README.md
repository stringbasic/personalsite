# StringBasic personal site
My personal website, currently accessible at:

[![Netlify Status](https://api.netlify.com/api/v1/badges/fd9cb828-4160-4112-a2ab-3902d946ae68/deploy-status)](https://app.netlify.com/sites/tender-stonebraker-78d2e4/deploys)
[![Build Status](https://travis-ci.org/stringbasic/personalsite.svg?branch=master)](https://travis-ci.org/stringbasic/personalsite)

* [www.stringbasic.com](http://www.stringbasic.com)
* [www.stringbasic.pt](http://www.stringbasic.pt)

# Instructions

## start development server

```
> npx @11ty/eleventy --serve
```

watch for diagram changes:
```
> npx @diagrams/diagrams watch src
```

or run both with
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
> npx @cypress/cypress open
```

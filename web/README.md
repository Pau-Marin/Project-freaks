# Table of contents
- [Table of contents](#table-of-contents)
  - [TODO](#todo)
  - [Special NEXT funcs](#special-next-funcs)
  - [Steps](#steps)
  - [Come back later](#come-back-later)
  - [Some tips](#some-tips)

[src](https://github.com/adrianhajdin/ecommerce_sanity_stripe)

## TODO
- **Deployment** Change price settings to product set inside strip platform to avoid user errors
```js
line_items: [
  {
    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
    price: "price_1LaoixFaU3SEv1gLaPwA9ITm",
    quantity: 1,
  },
],
```
- add aspect-atio to banner img
- add link entry to product schema, generates from product name `name.join("-")`
- Add links to the icons in footer, and cursor-pointer
- fix the quanity box styles, no cursor on number + fix border
- fix buttons Buy now & Add to cart styling, they go beyond the VP
- 2:31:30 Fix the weird bug were the items change position as we click on crememnt or decrement


**Install exactly the version of the packages specified**
$ npm i --legacy-peer-deps

**Install sanity gloablly**
- $ npm i --location=global @sanity/cli

**Sanity project**
- Create template `$ sanity init`
- Project name: electronics-ecommerce
- Run on localhost `$ sanity start` 


## Special NEXT funcs
- `getServerSideProps()`: Used to fetch data from a DB from the server, instead of using the client's resources
- `getStaticProps()`: Use data from previosly fetched data using `getServerSideProps` to use in the current component, makes it all smoother
- `getStaticPaths()`: Needs to be used whit dynamic routing, since Next needs to know what paths needs to create before hand, kinda like that
- **Hook** `StateContext`: Some kind of native redux to manage state in the app


## Steps
- After installing sanity, cd into the project and run `sanity start`
- create a new schema inside `/schema`, then import all hte new schemas into `schema.js`
- Create all needed components and use an `index.js` fil to export them all
- Hook up sanity client, copy all the params required from `$ sanity manage`, and update components whit dynamic data from SanityDB
  - use `getServerSideProps` to fetch the data
- Create the product component and the dynamic pages in `prduct/[slug].js`, be sure to use the correct Next specific hooks
- Create `StateContext`, and Wrap all the app inside the `StateContext`


## Come back later
[src](https://www.youtube.com/watch?v=4mOkFXyxfsU)
- slug inside schema: 18:53
- not my error on import React: 27:00
- not my error on cooler import Components: 35:00

## Some tips
- `control + shift + R` to hard reaload removing chache
- **Marquee**: stands for list of scrolling divs
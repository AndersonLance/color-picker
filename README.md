# color-picker

## Project Setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Build and deploy to GitHub Pages

npm run deploy

## Project Overview

I purchased Steve Schoger's excellent Refactoring UI book, and the bundle came with some curated JSON color palettes that Steve put together. I found myself using these palettes frequently in various projects, and came up with the idea of a web application to allow me to browse through the palettes, and then export any of my choosing to SCSS code so I could very easily get up and running. Using a consistent naming convention also allowed me to change palettes on the fly, so if I ended up wanted a new palette, it was just a few clicks and a CMD-V away.

I've also recently been learning VueJS, and I thought this would be the perfect opportunity for me to build a useful app while also advancing my Vue skills.

I ended up reformatting the color palette JSON into a new data structure and naming convention, and started building the app. Over time I have added a few new features, most notably the ability to search by color name, so if you are looking for a palette with blue in it, for example, you can quickly filter the list down. I created a feature that automatically changes the colors of the app as you preview individual palettes so you can quickly see how the colors go together and might look in your app. Finally, where I work we use Tableau a lot, and I was always being asked by our Tableau developers what colors they should use in the various charts and graphs they made. I now just point them to this app, and I added the ability to export any palette directly into a format they can load into Tableau to get them working faster.

Thanks for checking this out, I hope you find it useful!
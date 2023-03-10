# Frontend Mentor - Social media dashboard with theme switcher solution โ๏ธ๐

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents ๐งพ

- [Overview ๐](#overview)
  - [The challenge ๐ฏ](#the-challenge)
  - [Screenshot ๐ท](#screenshot)
  - [Links ๐](#links)
- [My process ๐๏ธ](#my-process)
  - [Built with ๐งฐ](#built-with)
  - [What I learned ๐ง ](#what-i-learned)
  - [Useful resources ๐](#useful-resources)
- [Author โ๏ธ](#author)

## Overview ๐

### The challenge ๐ฏ

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot ๐ท

![Light Theme Screenshot](./design/screenshot-light.png)
![Dark Theme Screenshot](./design/screenshot-dark.png)

### Links ๐

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/social-media-dashboard-with-theme-switcher-hy-T5lxKNX)
- Live Site URL: [Github Pages](https://jsamuelap.github.io/social-media-dashboard/)

## My process ๐๏ธ

### Built with ๐งฐ

- Semantic HTML5 markup
- CSS custom properties
  - [Normalize CSS](https://necolas.github.io/normalize.css/)
- [SASS](https://sass-lang.com/) - CSS preprocessor
  - 7-1 Pattern
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
  - Hooks
  - Custom Hooks
  - Context API
- [Vite](https://main.vitejs.dev/) - Build Tool
- [gh-pages](https://www.npmjs.com/package/gh-pages) - Deploy module

### What I learned ๐ง 

I asked me when I have to use **.js** or **.jsx** in React files, until Vite throw an error where it couldn't read **JSX syntax** in a .js file, so I learned, if a file contains JSX, is preferable name it with .jsx.

When I was styling the cards, I had problems with the border top of Instagram card, `border-color` **can't have a gradient** as value. Researching I found a CSS property that allows it:

```css
border-image: linear-gradient(yellow, pink) 1;
```

At the end I didn't use this property because it can't be rounded with `border-radius`, I used pseudo elements better, but I learned new things ๐.

When you build your React proyect in vite with `npm run build`, you can see the result with `npm run preview`, this pull up a server on port 4173.

Finally I learned **how to deploy** a React proyect with **Vite** and **gh-pages** npm module:

```js
export default defineConfig({
	plugins: [react()],
	base: "/social-media-dashboard/",
});
```

```json
"deploy": "gh-pages -d dist",
```

```bash
npm run deploy
```

### Useful resources ๐

- [SASS 7-1 Pattern](https://www.easeout.co/blog/2020-08-25-structuring-your-sass-projects/) - This post talks about a architecture for structure the SASS folders.
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) - This specificacion helped me to write better commit messages.
- [Deploying a Static Site](https://vitejs.dev/guide/static-deploy.html#github-pages) - Steps for deploy a proyect in Github pages with Vite.

## Author โ๏ธ

- Website - [JSamuel](https://jsamuelap.github.io)
- Github - [@JSamuelAP](https://github.com/JSamuelAP)
- Frontend Mentor - [@JSamuelAP](https://www.frontendmentor.io/profile/JSamuelAP)
- LinkedIn - [@JSamuelAP](https://www.linkedin.com/in/jsamuelap)
- Twitter - [@JSamuelAP](https://www.twitter.com/yourusername)
- Email - [sp4619168@gmail.com](mailto:sp4619168@gmail.com)

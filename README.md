# mike.io

This is my personal web page where you can find the following (Built with Gatsby v3.0)

- Portfolio of projects
- Blog

#### TailwindCSS Usage

Importing tailwind is not required in a gatsby project.

#### Hardrebuild project

```bash
rm -rf node_modules &&
rm -rf public &&
rm -rf .cache &&
rm -rf package-lock.json &&
npm i &&
npm start
```

### Development

1. npm install
1. npm start

### Workflow for creating blog posts

1. Create a directory in `src/pages/blog` for your post **make sure that the name of this directory is only a few words otherwise it will return graphql /path error** This directory will be used for our post but also it will contain all of the image assets inside the post
1. Create the markdown file that will be the post. `touch src/pages/blog/how-to-use-this-plugin/how-to-use-this-plugin.md`
1. Fill out the front matter of your post with the appropriate information:

```
//post.md
---
slug: '/blog/the-title-of-my-post'
path: '/blog/the-title-of-my-post'
date: '2020-09-28'
title: 'Title Of My Post'
readtime: '15 min read'
tags: 'Tag1, Tag2, Tag3'
---
```

1. Write the body of your post, and remember to place all of the images that you are going to reference in your post in the current directory and reference them using `![alt](image.png)`

### Adding inline images to markdown blog posts

1. Create the image
1. Minify/Optimize the image (ImageOptim)
1. Place image in the folder of the post ex: `~/src/pages/blog/how-to-do-something/my-image.png`
1. Use `![alt](my-image.png)` syntax in your markdown to link the image (it will assume the image is in the current directory of the blog post) If the image is not showing up than preface with a blank Heading3 example:

```markdown
###

![alt](gh-pages-custom-domain-redirects-chart.png)
```

### TroubleShooting

* I replaced or updated an image but it hasn't changed:
A: It's stuck in cache (especially if the filename remains the same) run `gatsby clean`

#### Deployment via netlify

- If recently replaced/updated an existing static image anywhere in the project,
  make sure to clear cache and rebuild in netlify/projects/build

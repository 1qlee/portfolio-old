---
title: "Getting Started with GatsbyJS"
date: "2018-10-29"
tag: "Coding"
---

#### What is GatsbyJS?

[GatsbyJS](https://www.gatsbyjs.org) is a framework that leverages modern web technologies - React, Webpack, GraphQL, and more - to help you quickly get a website up and running. Gatsby is part of a larger web architecture or ideology called the JAMstack

#### What is the JAMstack?

The JAM in JAMstack stands for, respectively, JavaScript, APIs, and Markup. It is a flexible and serverless (i.e. you don't have to write back-end code) architecture that aims to be fast, progressive, secure, and simple. They have a [great website](https://www.jamstack.org) with plenty of videos and examples.

#### What are the use cases?

Basically anything that isn't a dynamic app. I'm talking about big projects running on a backend engine like Node or Ruby. You can use the JAMstack if your project has most of the following qualities:

* Isn't a single-page app
* Doesn't need a custom server or CMS
* Mostly static pages - don't need to handle dynamic views (i.e. user login)
* Needs to pull data from many different sources or files (e.g. a blog or image gallery)

The JAMstack is perfect for blogs, galleries, online magazines or catalogs, and any other website that needs to handle a lot of pages and content.

#### Ok, so where does Gatsby come in?

Gatsby is a static site generator. Simply put, Gatsby lets you start creating views in React without having to worry about setting up your environment, creating routes, etc. You just install and go. If you've never programmed in React before, Gatsby is a **great** way to get started. It's also a great starting point to learn GraphQL, a powerful query language also made by developers at Facebook.

In Gatsby, you just create JS files in a `/src/pages` folder and it will show up as a view. For example if you made a file named `/src/pages/about.js`, and went to the `/about` route in your browser, you'd see the code that you just created.

You can also programmatically create views from Markdown files or other data sources. Therefore, you don't have to manually create a file for every blog post or product page. For example, I create my blog posts as Markdown files like so: `/src/pages/posts/blog-post.md`. Then I use Gatsby's Node API along with GraphQL to programmatically create views for each blog post in that folder - utilizing a single template file to style and structure them.

#### Conclusion

Gatsby is fast and easy to use. It's also a great starting point to start learning some of the most popular modern web technologies like React and GraphQL.

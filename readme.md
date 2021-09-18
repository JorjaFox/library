## JorjaFox.Net Library

This replaced the old Wiki. It's written in [Hugo](http://gohugo.io), which is a bajillion times faster than other tools have been.

## Theme

The theme is forked from whatever WordPress theme the blog is running. Currently based on [Astra](https://wpastra.com/).

## Updating

Updating the site is done by adding new content in the 'content' folder.

### Content

* All entries are in the `posts` folder.
    - `/actor/` - all acting roles
    - `/advocacy/` - all advocacy work
    - `/biographies/` - all bios from all sources (movies, TV, etc)
    - `/faq/` - Frequently asked questions
    - `/news/` - news articles, separated by year
    - `/producer/` - all work done as a producer
    - `/recaps/` - TV episode recaps
    - `/self/` - appearances in media as herself
    - `/transcripts/` - interviews, online and off, sorted by year
    - `/writer/` - work done as a writer
* Formatted data is in the `data` folder.
    - filmography.json - acting, writing, self, etc.
    - episodes/* - All the eps for the TV shows.
* Static content (like images and global CSS/JS) are in `static`

### Libraries

* [Bootstrap](https://getbootstrap.com/)
* [Fuse.js](https://fusejs.io)
* jQuery ([core](https://jquery.com/), [UI](https://jqueryui.com/))
* [Mark.js](https://markjs.io)

All third party libraries are added with node, so they are updated via npm:

```
$ npm update
$ npm install
```

The post install script will automatically copy the files to the right locations.

## Testing

In the folder, run the Hugo build command: `$ hugo serve`

The output looks like this:

```
Start building sites …
hugo v0.87.0+extended darwin/arm64 BuildDate=unknown

                   |  EN
-------------------+-------
  Pages            | 1762
  Paginator pages  |    0
  Non-page files   |    0
  Static files     |   92
  Processed images |    0
  Aliases          |    2
  Sitemaps         |    1
  Cleaned          |    0

Built in 1562 ms
```

And you'll get a URL to test at, like `http://localhost:1313/library/`

If everything looks good, you can exit out and push the code.

## Publishing

Automated deployments happen when pushing to the `production` branch.

Only authorized accounts can publish, but pull requests are welcome.

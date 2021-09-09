## JorjaFox.Net Library

This replaced the old Wiki. It's written in [Hugo](http://gohugo.io), which is a bajillion times faster than other tools have been.

The theme is forked from whatever WordPress theme the blog is running.

## Updating

### Content

All content lives in `content`

* Posts are in the `posts` folder.
* Formatted data is in the `data` folder.
    - filmography.json - acting, writing, self, etc.
    - episodes/* - All the eps for the TV shows.
* Static content (like images) are in `static`

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

This is pushed via local rysnc, which is automated: `$ deployme jorjafox library`

Only authorized accounts can publish, but pull requests are welcome.

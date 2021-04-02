## JorjaFox.Net Library

This replaced the old Wiki. It's written in [Hugo](http://gohugo.io), which is a bajillion times faster than Jekyll was.

## Update Content

All content lives in `content`

* Posts are in the `posts` folder.
* Formatted data is in the `data` folder.
    - filmography.json - acting, writing, self, etc.
    - episodes/* - All the eps for the TV shows.
* Static content (like images) are in `static`

## Testing

In the folder, run the Hugo build command: `hugo serve`

It should take about 10 seconds, max.

```
0 draft content
0 future content
1487 pages created
0 paginator pages created
66 tags created
16 categories created
in 10442 ms
```

## Pushing to Production

This is pushed via rysnc, which is automated: `$ deployme jorjafox library`

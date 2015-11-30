## Commands to remember

1. jekyll build
2. octopress push

## Update

$ bundle update

## Jekyll Help

jekyll 3.0.1 -- Jekyll is a blog-aware, static site generator in Ruby

Usage:

  jekyll <subcommand> [options]

Options:
        -s, --source [DIR]  Source directory (defaults to ./)
        -d, --destination [DIR]  Destination directory (defaults to ./_site)
            --safe         Safe mode (defaults to false)
        -p, --plugins PLUGINS_DIR1[,PLUGINS_DIR2[,...]]  Plugins directory (defaults to ./_plugins)
            --layouts DIR  Layouts directory (defaults to ./_layouts)
            --profile      Generate a Liquid rendering profile
        -h, --help         Show this message
        -v, --version      Print the name and version
        -t, --trace        Show the full backtrace when an error occurs

Subcommands:
  build, b              Build your site
  clean                 Clean the site (removes site output and metadata file) without building.
  doctor, hyde          Search site and print specific deprecation warnings
  help                  Show the help message, optionally for a given subcommand.
  new                   Creates a new Jekyll site scaffold in PATH
  serve, server, s      Serve your site locally
  
## Octopress Help

octopress 3.0.11 -- Octopress is an obsessively designed toolkit for Jekyll blogging.

Usage:

  octopress <subcommand> [options]

Options:
        -h, --help         Show this message
        -v, --version      Print the name and version
        -t, --trace        Show the full backtrace when an error occurs

Subcommands:
  new                   Creates a new site with Jekyll and Octopress scaffolding at the specified path.
  docs                  Launch local server with docs for Octopress v3.0.11 and Octopress plugins.
  init                  Add Octopress's default scaffolding to your site.
  publish               Convert a draft to a normal published post.
  unpublish             Convert a post to a draft. Command accepts path to post or search string.
  isolate               Move all posts not matching selected post to _posts/_exile. Command accepts path to post or search string.
  integrate             Reintegrate posts from _posts/_exile.
  deploy                Deploy your Octopress site.
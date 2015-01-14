# readme-factory
quickly template out README files for module documentation

# install
```bash
npm install readme-factory -g
```

# usage
From your module's root, do:
```bash
readme-factory > README.md
```

`README.md` will be auto populated based on your package.json.
It's really just to speed the tedious process up. Nothing magical!

Right now, it only handles:
- Package name
- Package license
- Package description

As well as boiler-plating some headers, etc.

#### todo: it might be nice to add more templates, for example, one for command-line tools.

# license
MIT

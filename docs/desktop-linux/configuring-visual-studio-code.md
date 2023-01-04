---
sidebar_position: 5
---

# Configuring Visual Studio Code

### Generate list of extensions from existing installation
When this command is run, it will generate a list of all the installed Visual Studio Code extensions and save it to the extensions.md file. The extension names will be listed one per line in the file.

``` bash
code --list-extensions > extensions.md
```

Here's the resulting file
### extensions.md
``` md
aaron-bond.better-comments
bierner.markdown-preview-github-styles
donjayamanne.githistory
eamodio.gitlens
esbenp.prettier-vscode
formulahendry.auto-rename-tag
IvanGrigorov.openaicodehelper
jamiewoodio.cisco
TabNine.tabnine-vscode
voldemortensen.rainbow-tags
yzhang.markdown-all-in-one
```

### Install extensions from md file

The xargs command is used to build and execute a command from standard input. It takes the input, splits it into separate arguments (using the -n1 option, which means to take one argument at a time), and then runs the specified command (in this case, code --install-extension) on each argument.

The < extensions.md part of the command passes the contents of the extensions.md file as standard input to the xargs command.

So, in this case, the command reads the extensions.md file, which should contain a list of extension names (one per line), and it installs each extension using the code command.

``` bash
xargs -n1 code --install-extension < extensions.md
```


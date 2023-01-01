---
sidebar_position: 5
---

# Configuring Visual Studio Code

``` bash
code --list-extensions > extensions.md
```

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
``` bash
xargs -n1 code --install-extension < extensions.md
```


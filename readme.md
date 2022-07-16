# Project Aesop

![logo](aesop-project/images/logo.png) 
<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [Project Aesop](#project-aesop)
    - [How to run](#how-to-run)
        - [Run on ios](#run-on-ios)
        - [Run on android](#run-on-android)
        - [Run on web](#run-on-web)
        - [Normal start (might no longer be function)](#normal-start-might-no-longer-be-function)
    - [Project Information](#project-information)
        - [Style Sheet File Organisation](#style-sheet-file-organisation)
            - [Main style](#main-style)
            - [Button style](#button-style)
            - [header style](#header-style)
            - [Footer style](#footer-style)
    - [Team Info](#team-info)
        - [Team leads](#team-leads)
        - [Software Developers](#software-developers)
    - [Project Roadmap](#project-roadmap)
    - [Project Tree](#project-tree)

<!-- markdown-toc end -->

## How to run

### Run on ios

* Ensure that xCode is installed and using from mac os
```bash
npm i
npx react-native run-ios
```


### Run on android

* Ensure that android studio is installed
```bash
yarn android
npm i
npx react-native run-android
```

### Run on web
```bash
yarn web
npm i
npx react-native run-web
```

### Normal start (might no longer be functional)

```
cd my-project/ios
npx pod-install
npm start
```

## Project Information

### Style Sheet File Organisation
#### Main style
[main](aesop-project/components/style/main.js) 

#### Button style
[button](aesop-project/components/style/button.js) 


#### header style
[header](aesop-project/components/style/header.js) 

#### Footer style
[footer](aesop-project/components/style/footer.js) 

## Team Info

### Team leads
* Uni Han
* Tanushree Sharma
 
### Software Developers
* Alvin Fung
* Luyang Liu

## Project Roadmap


## Project Tree
```
.
├── App.js
├── Story Board.fig
├── app.json
├── babel.config.js
├── components
│   ├── header.js
│   └── style
│       ├── buttons.js
│       ├── header.js
│       └── main.js
├── images
│   └── logo.png
├── index.js
├── package.json
└── yarn.lock
```

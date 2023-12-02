# <img src="https://svgshare.com/i/zyf.svg" width="280" />

✨ **We're not just another framework**

BearonUI is part of **Bearon Open Source Project (BearonOS)** that aims to unify and generalize UI frameworks. While there are a lot of mature frameworks such as Material UI, Ant Design, Chakra UI and they are all designed for small and enterprise levels, Many companies have started to create their UI framework that suits their use cases and applications.

### Links

- Reference: [https://design.open.gov.sg/](https://design.open.gov.sg/)


## Command

- add storybook config: `npx nx g @nx/storybook:configuration`
- add new library: `npx nx g @nx/react:library ui --directory=libs/ui --bundler vite`

- run storybook: `npx nx run project:storybook`, ex: `npx nx run ui:storybook`
- nvm sources: `source $(brew --prefix nvm)/nvm.sh`


### TODO

- Documentation
   - [x] add Welcome section
   - [ ] finish UI Framework Research
   - [ ] finish Consumer Behaviour Research
   - [ ] finish sources Research
- Components
   - [ ] Add more theme color, double check with MUI and chakra UI
   - [ ] fix skeleton color, based on theme
   - [ ] fix showcase layout
   - [ ] fix button docs
- Animation
   - [ ] Add animation on scroll



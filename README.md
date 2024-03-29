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

  - [ ] finish UI Framework Research
  - [ ] finish Consumer Behaviour Research
  - [ ] finish sources Research

- Components

  - [ ] Add more theme color, double check with MUI and chakra UI
  - [ ] fix skeleton color, based on theme
  - [ ] add progress, top of the page
  - [ ] Add animation on scroll
  - [ ] enable passing styled component recursive function to `sx`
  - [ ] Add dropdown menu (text based, on hover, offset menu --> similar with nav)
  - [ ] Test performance of bearStyle
  - [ ] remove `any` in bearStyle in every component
  - [ ] fix portal has access to themeProvider
  - [ ] fix acceesiblity for tab
  - [ ] improve table to include sorting, virtualized list, sticky headers

- cleanup ui and styledUI
- cleaup Icon with styled
- clean up card
- clean up utils
- create first design of nav (topnav, footer, sidebar, )

  - tabs sliding hover
  - mega menu

- create autoform
  -textInput
  - selectInput
    with search
- craete basic chart
- create basic notif (breadccrumbs, toast, modal)
- create blockchain
  - wallet custom + UI
  - contract wrapper hooks + fallback RPC

**Inspiration**

- tabs sliding hover
- mega menu
- card skeleton
- animation
- button text sliding hover animation

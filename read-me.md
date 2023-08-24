task: recreate impact calculator page

designs: https://zpl.io/AmzqKkP

preview page: http://fidelity-impact.surge.sh

front-end framework: react (functional with hooks, no classes) - (use vite spa or nextjs with static export)

style library: styled-components, emotion or similar (preferred, if you have no experience with it use whatever you are most comfortable with)

state management: react state hooks (preferred)

font: https://fonts.google.com/specimen/Questrial (instead of one used in design)

other dependencies: feel free to use whatever you need but try to make it as simple as possible

assets: use provided assets if available, otherwise use placeholders.

## Instructions

- create grid with animated 3d cards generated from provided json data file
- card front should have _impact_ and _equivalent-impact_ text that will be dynamically generated based on json data for specific card and user input (see card-front.png)
- card back should have simple bar chart that will be generated based on json data for specific card and user input (see card-back.png)
- note: not all card will have back side, see example and json file
- switching tabs will flip cards and show front or back side like in preview

### Formulas:

impact formula:
```
const impact = (normalizedImpact * investAmount) / 1000000
```

equivalent formula: 
```
const equivalentImpact = (normalizedEquivalent * investAmount) / 1000000
```

### Charts

- full year bar (outlined) should have same value as impact field

- cumulated bar (filled) should show cumulative impact from selected date until current day, using full year impact as a base value. For example if selected date is full 2 years before current day then cumulated bar should be 2x higher than full year bar.

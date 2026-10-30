# React-ive Chocolate Candy Boxes

## Component Architecture & Wiring Explanation

This application follows a modular, uni-directional React component architecture consisting of three primary child components and one top-level state manager:

1. **`App` (Parent Container & State Manager):**
   - Serves as the top-level parent component.
   - Holds the primary dataset (`candiesData`) containing details for all 10 chocolate candies.
   - Manages state using the `useState` hook (`selectedCandy`) to determine which candy's calorie information should be displayed in the modal overlay.
   - Passes data down to `CandyContainer` as a prop (`candies`) and passes an event handler (`onSelectCandy`) to update `selectedCandy` when a button is clicked.

2. **`CandyContainer` (Container Component):**
   - Receives the `candies` array and `onSelectCandy` callback function via props.
   - Uses JavaScript's `.map()` method to loop through the 10 candy items and dynamically instantiate 10 `CandyCard` components.
   - Assigns a unique `key` prop (`candy.id`) to each generated card to ensure efficient DOM updates.

3. **`CandyCard` (Display Component):**
   - Receives an individual `candy` object and an `onSelect` callback prop.
   - Renders the image, name, and a "View Calories" button.
   - Triggers `onSelect(props.candy)` when clicked, notifying `App` which candy was selected.

4. **`Modal` (Overlay Component):**
   - Receives `props.candy` (the currently selected candy) and `props.onClose`.
   - Returns `null` if `props.candy` is `null`, hiding the overlay.
   - When active, displays the selected candy's title, calorie count, and description along with a close button that calls `props.onClose` to set `selectedCandy` back to `null`.
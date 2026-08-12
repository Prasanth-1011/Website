# Multiple Page Website

A practical frontend project developed to implement modern layout techniques, responsive design, and dynamic DOM interactions across multiple pages.

## Project Overview

This project demonstrates how to build a multi‑page website using CSS Grid and Flexbox for layout, responsive breakpoints for adaptability, and transitions/animations for interactivity. It also integrates DOM event handling, timing methods, and manipulation APIs to create dynamic user experiences.

## Key Learnings

- Designing structured layouts with Grid and Flexbox  
- Applying responsive breakpoints for different screen sizes  
- Creating smooth transitions and animations with CSS and keyframes  
- Handling DOM events for user interaction  
- Using timing methods for automated behaviors  
- Manipulating DOM elements with modern APIs  
- Building advanced features like image sliders, hover effects, and scroll offset adjustments  

## Concepts Implemented

### Grid Layout

Implemented CSS Grid properties including:  
- `grid-template-columns`  
- `repeat()`  
- `grid-column`  
- `row-gap`  
- `column-gap`  
- `position: sticky`  

to create flexible, multi‑page layouts.

### Flexbox

Applied Flexbox properties such as:  
- `flex`  
- `flex-direction`  
- `justify-content`  
- `align-items`  
- `flex-wrap`  
- `gap`  

for responsive alignment and spacing.

### Responsive Breakpoints

Used media queries for screen sizes:  
- `max-width: 1024px`  
- `max-width: 768px`  
- `max-width: 576px`  

to ensure layouts adapt seamlessly across devices.

### Transitions & Animations

Implemented interactive effects with:  
- `transition`  
- `transform` (`translateY`, `scale`)  
- `:hover` states  
- `@keyframes glitch`  
- `opacity`  

to enhance user engagement.

### DOM Event Handling

Handled events including:  
- `click`  
- `keyup`  
- `change`  
- `input`  
- `mouseover` / `mouseout`  
- `DOMContentLoaded`  

to create responsive and interactive behaviors.

### Timing Methods

Utilized:  
- `setTimeout`  
- `setInterval`  
- `clearInterval`  

for timed animations and automated actions.

### DOM Manipulation APIs

Applied APIs such as:  
- `querySelector` / `querySelectorAll`  
- `classList` (`add`, `remove`, `toggle`)  
- `setAttribute` / `getAttribute`  

to dynamically update and control elements.

## Advanced Features

- **Image Sliders with Transition Control**  
  Built dynamic image sliders using `createElement`, `appendChild`, and `remove`, combined with `setInterval` for automatic sliding and forced reflow for smooth transitions.  

- **Hover Image Swap with Delayed Transition**  
  Implemented hover effects using `mouseover`/`mouseout` and `setTimeout` to delay `src` changes, creating smooth image transitions.  

- **Overlapping Floating Layout**  
  Designed overlapping layouts using negative absolute positioning with `margin-top` and `padding-top` to maintain spacing and prevent collisions.  

- **Dynamic Scroll Offset for Fixed Headers**  
  Adjusted `scroll-padding-top` dynamically to ensure fixed headers do not cover content when navigating via anchor links.  

## Live Demo

[Multi Page Website](https://prasanth-1011.github.io/Website)

---

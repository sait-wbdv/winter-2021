---
layout: post
title: Vector Editors
categories: cpnt201
---

## Homework
1. Prep
    1. Go to Tony's [Band Name Generator](https://acidtone.github.io/namor/) and click for a new combination of words until you find a new product that a startup (either yours or a potential client) might think is the "next big thing".
    2. Based on the phrase you've chosen, find one or more [Font Awesome](https://fontawesome.com/) icons (or similar) that you can use to create a quick company/product logo for your startup.
        - Example: [Tony's Browser Therapy Logo](https://sait-wbdv.github.io/sample-code/assets/images/logos/browser-therapy.svg)
    3. Download the SVG versions of your icons so you can import them into Figma for the lesson.
2. Figma
    - Reference: [Figma Tutorial Video Playlist](https://www.youtube.com/playlist?list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HlN4)
        - Watch: [Setup account, teams, projects, and files](https://youtu.be/hrHL2VLMl7g)
            - Create a free account and set up a Team.
        - Watch: [Get a tour of the Editor](https://youtu.be/DSrbwCrEIII)
        - Watch: Any other videos in this playlist that interest you.
    - Watch: [Figma Drawing Tools Overview](https://webdesign.tutsplus.com/courses/using-figma-for-svg-design/lessons/drawing-tools-overview)
    - [5 of your favorite Illustrator tools in Figma](https://medium.com/@saintasia/5-of-your-favorite-illustrator-tools-in-figma-a7c2aaa45d59)


---

## Morning reflection
### Housekeeping
1. Returned marks: `dsgn270-a2`, `cpnt201-a1`, `cpnt260-exercises`
2. [`cpnt201-a3`](https://github.com/sait-wbdv/assessments/tree/master/cpnt201/assignment-3)

---

## Vector Theory
### Terminology

Vector Graphics
: Instead of being defined in pixels like raster images, vector graphics are defined with math like fonts (and icon fonts). This means that vector images always look sharp because the browser can re-draw it at any size and they are usually a much smaller file size than images defined with pixels.

Anchor Point
: A single point located on a page/artboard/viewport that a path can pass through.

Path
: A straight or curved line that connects two anchor points.

Closed Shape
: A shape that is enclosed from all sides, end-to-end, forming a figure with no openings. Examples: circle, triangle, square, polygon, etc.

Fill
: The SVG version of `background-color`.

Stroke
: The SVG version of `border`.

---

## 1. Figma Tool Overview
1. A quick(ish) tour of the basic tools you'd find in any vector editor.
    - File menu
    - Artboards/Frames
    - Layers
    - Tools pallette
      - Selection
      - Shapes
      - Pen
      - Text
      - Move
      - Fill/Stroke
    - Masks
    - Pathfinder
2. Demo: Trace an image

### Learning Objectives
1. Distinguish the difference between raster and vector image formats.
2. Identify the main features that are common to Figma and most other vector editors.
3. Import existing raster and vector image assets into a Figma frame.
4. Overview how to use the pen tool to create a vector graphic from scratch or trace an existing image.
5. Export an SVG file from a Figma frame/layer.
6. Explore the relationship between frames/layers and SVG exports.
7. Identify common hotkeys for Quality of Life shortcuts in Figma (and related vector editors).

### Materials
- [Logos Tony has made](https://github.com/sait-wbdv/sample-code/tree/master/assets/images/logos)
- [Tony's pinball diagrams](https://github.com/sait-wbdv/sample-code/tree/master/assets/images/pinball)

### Key Takeaways
- Vector logos look sharp at all zoom levels.
- SVG files (the open vector file format) are generally smaller in file size compared to raster images.
- Complex SVGs may impact performace due to processor load.
- Hotkeys!
  - See Activites below for finding a hotkey cheat sheet for Figma.
    - [Tony's current fave cheat sheet](https://usethekeyboard.com/figma/)
  - Tony's Top 5 vector editor shortcuts:
    1. `space` + _drag_: Pan the screen
    2. `command`/`control?`: Toggle selection tool
    3. `shift` + _drag_: Proportional re-sizing and equal `x`/`y` dimensions when creating shapes
    4. `alt`/`option` + _drag_: Re-size from the object's centre (instead of default from top-left)
    5. `alt`/`option` when in Pen mode: Toggles from pen to anchor tool. Very handy!

---

## 2. Pathfinder and layer export demo 
1. Import Font Awesome SVGs.
2. Edit existing icons using the Pathfinder tool.
3. Export Figma layers to SVG file.

---

## Open lab-time
### Activity 1: Build a library of personal Figma resources
- References
  - Search: "[figma tools cheat sheet](https://www.google.com/search?q=figma+tools+cheat+sheet)"
- Learning
  - Search: "[figma tools tutorial](https://www.google.com/search?q=figma+tools+tutorial)"
  - Search: "[figma exercises](https://www.google.com/search?q=figma+tools+exercises)"
- Cheating
  - Search: "[figma components](https://www.google.com/search?q=figma+components)"
  - Search: "[figma templates](https://www.google.com/search?q=figma+templates)"
  - Explore: [Best design resources websites every developer should bookmark](https://dev.to/theme_selection/best-design-resources-websites-every-developer-should-bookmark-1p5d) by ThemeSelection
    - [Video version](https://youtu.be/fAK9NxsR3es) by Adrian Twarog

---

### Activity 2: Pen Tool Pracice
1. Place an image in a new Frame/Artboard.
2. Lock the image in place. 
    - Possible to lighten/fade the image?
3. Using the Pen Tool, trace a closed path around an object.
    - Don't forget Tony's #5 shortcut!
4. Unlock the image and try masking it with your new path.

---

### Activity 3: Build webpage components
- Try following these [Morioh Design Exercises](https://morioh.com/p/a96eb2ef43be).
- [Add Font Awesome icons to text](https://help.figma.com/hc/en-us/articles/360040449513-Add-icons-to-text-layers-with-icon-fonts)

---

### Activity 4: Team card
Try re-building the Assignment 2 Team Card in Figma. Oooooor try building a new card, hero section, navigation, etc.

---

### Activity 5: Paired collaboration in Figma
The free plan on Figma (apparently) allows two people to edit the same document. 
- Try completing any of the above activities in pairs.
- Further explore the collaboration tools in Figma.

### Tony's goals for Lab-Time
- Integrate leftover SAIT website enhancements.

---

## Dailies
- Submit today's Codepen/repo/gist to the Dailies section (in Assessments) in Brightspace.
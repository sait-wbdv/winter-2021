---
layout: post
title: Responsive Web
categories: dsgn270
---

## Housekeeping
1. Poll: iOS vs Android
2. Homework for Week 2

## Homework
1. Background
    - Read: [The web and web standards](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/The_web_and_web_standards) by the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn) (link to their Learning Area)
    - Watch: [A brief history of layout](https://youtu.be/E005mjqpZ9Y) by [Layout Land](https://www.youtube.com/c/LayoutLand/)
2. Mobile Stats
    - Read: [Mobile vs. Desktop Usage in 2019](https://www.perficient.com/insights/research-hub/mobile-vs-desktop-usage-study)
3. Mobile UX
    - Watch: The first 7 minutes of [Beyond Media Queries](https://vimeo.com/235428198) by Michael Riethmuller (you can stop at Fluid Typography)
    - Read: [Designing Card-Based User Interfaces](https://www.smashingmagazine.com/2016/10/designing-card-based-user-interfaces/)
    - Read: [The Thumb Zone: Designing For Mobile Users](https://www.smashingmagazine.com/2016/09/the-thumb-zone-designing-for-mobile-users/)

---

## 1. The Evolution of Web Layout
### Learning Objectives
- Describe responsive design and what problem it tries to solve.
- List the physical and software characteristics that are unique to mobile devices.
- Discuss the relative market share of mobile web traffic vs desktop web traffic.
- Discuss the relative screen time spent on mobile apps vs mobile web sites.

### Terminology
Desktop vs Mobile Web
: A comparison of web traffic between desktop and mobile platforms.

Native App vs Web App Screen Time
: A comparison of average time spent "on-screen" between web and native phone applications.

### Materials
- [Web Statistics Cheatsheet]({{site.baseurl}}/cheatsheets/mobile-stats)

---

### Activity: How is mobile unique?
You will work in groups of 3 or 4 for this activity. 

Beyond the obvious difference in screen size, discuss how mobile is different than desktop:
- What hardware features do mobile phones have compared to traditional desktop systems?
- Do users have the same goals when browsing on a phone vs browsing on a laptop or desktop? If not, what's different?
- What problems are mobile users often trying to solve?

Post your phone make and model in `#winter-2021`

{% comment %}
#### Spoilers
- what are the device differences?
  - landscape vs portrait
  - screen size -> hamburger menu
  - no cursor -> no hover
  - gestures (with focus on the thumb)
  - performance
  - phone calls
  - location -> maps
  - camera
  - accelerometer

{% endcomment %}
---

## 2. Common Mobile Design Patterns
### Learning Objectives
- Identify common design patterns for responsive web development.
- Explore how the standards of HTML, CSS and Javascript have evolved to better take advantage of mobile web.
- Create a block of minimally responsive body text using basic box model properties.
- Locate the box model diagram in FireFox Developer Tools

### Terminology
Responsive Web
: A Web development concept focusing on making sites look and behave optimally on all devices, from desktop to mobile, using the same served web files.

Adaptive Web
: An outdated method of serving specialized content files to a browser based on the device it's running on.

Content Parity
: A measure of content consistency between mobile and desktop versions of the same website.

Viewport
: The viewable area of a website within the browser window.

Media Queries
: A feature of CSS that enables webpage content to adapt to different screen sizes, orientations, aspect ratios and mediums (e.g. print vs screen). It does this with conditional code blocks (i.e. modified `if` statements).

Breakpoint
: Points in responsive design where website presentation obviously changes due to changing viewport characteristics (width, orientation, etc).

Hamburger Menu
: A button in websites and apps that typically opens up into a vertical menu or navigation drawer.

Card Pattern
: A convenient means of displaying content composed of different types of objects. They are also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length

### Materials
- [Responsive Design Cheatsheet]({{site.baseurl}}/cheatsheets/responsive-design)
- Examples: 
  - Codepen: [Responsive Text: Max line length with scroll track](https://codepen.io/browsertherapy/pen/RwaJmbx)
  - Codepen: [Puppy Card](https://codepen.io/browsertherapy/pen/mdPWXZb)
  - Codepen: [Basic 1x3 Card Pattern](https://codepen.io/browsertherapy/pen/vYGxRNB)
  - Fancy pants: [Jen Simmon's Lab Website](https://labs.jensimmons.com/)

---

### Activity: Dev Tools vs Mobile Devices
You will work in groups of 3 or 4 for this activity.

Compare and contrast the visual appearance of your favourite mobile websites between
1. The virtual mobile simulator in FireFox Dev Tools, and
2. A real mobile device.

How accurate is the phone simulator in FireFox (or Chrome)? Is there content parity between mobile and desktop versions of the website?

Select a representative from each group to present a summary of your findings to the rest of the class.

---

## Clean up time!

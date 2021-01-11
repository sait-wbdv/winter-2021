---
layout: post
title: User Experience Design and Accessibility
categories: dsgn270
---

## Homework
1. Watch: [UX Design Basics - Mental Models](https://www.youtube.com/watch?v=9gM8K4ooavY) by Jamal Nichols
2. Find an example of product design (a handy tool, piece of equipment, etc) in your immediate(ish) area (home, office, vehicle, etc). You will be discussing your find in a group of 3 or 4 tomorrow.
3. Skim: [UI Design Patterns](http://ui-patterns.com/patterns)
4. Skim: Chapters 1, 2 and 3 of _Don't Make Me Think_ by Steve Krug (course textbook)
4. Read: [What is accessibility?](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)
5. Watch: Video: [JAWS Screen Reader Demo](https://youtu.be/2PMuBQ7LyOw) by [Blind Inspirationcast](https://www.youtube.com/channel/UCKHMrCSX3thkIsb3oDD_aJw)

---

Frontend development is unique in web because your software interacts directly with the user (the backend doesn't have to deal with mouse clicks, for example). Knowing your user is the first step to designing intuitive and accessible applications.

## Objectives for the day
- Define usability and explain it's importance to web design.
- Define a mental model.
  - Compare and contrast System Models and Interaction Models.
  - Discuss the role of a user experience designer.
- Define a usability convention.
  - List common website conventions.
  - Explain the relationship between information, organization and navigation.
- Define accessibility and why it's important to web design.
  - Describe some of the ways that web content may be inaccessible to certain users.
  - List examples of devices that can be web-enabled.

## Housekeeping
- Entry ticket: [Ahead of the Game](https://padlet.com/acidtone/p77ondwmuxya71af)
- Slack tour
  - best practices

## Definitions
<dl kramdown='0'>
  <dt>Usability</dt>
  <dd>
  A quality attribute that assesses how easy user interfaces are to use. The word "usability" also refers to methods for improving ease-of-use during the design process.
  </dd>
  <dt>Mental Model</dt>
  <dd>
  A mental model is how you think something will work, based on your knowledge and experience.
  </dd>
  <dt>System Model</dt>
  <dd>
  How something works.
  </dd>
  <dt>Interaction Model</dt>
  <dd>
  How to use something.
  </dd>
  <dt>Convention</dt>
  <dd>
  A widely used or standard design pattern. <cite>Don't Make Me Think; Chapter 3</cite>
  </dd>
  <dt>Satisfice</dt>
  <dd>
  When a user chooses the <em>first reasonable option</em> instead of the best option.  <cite>DMMT; Chapter 2</cite>
  </dd>
  <dt>Accessibility</dt>
  <dd>
  Enabling as many people as possible to use Web sites, even when those people's abilities are limited in some way. <cite><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">MDN</a></cite>
  </dd>
</dl>

## 1. Mental Models in Design
Mental models are how your mind uses past experience to predict real-life outcomes, like unlocking your door. If the door knob was magically moved a few centimeters to the left or right, you would notice it instantly and your keys might still be in your pocket. 

If the world is just a little bit off, your mind has to wake up, pay attention and figure out what's happening.

See [Mental model cheatsheet]({{site.baseurl}}/cheatsheets/design/mental-models)

### Activity 1: Mental Model Show and Tell
In groups of 3 or 4, explore the concept of mental models in product design. 
- What is the problem that the Rocket Swift Gearshift was trying to solve?
- Why did it fail, while the rotary dial gear shifter [failed less](https://www.autoweek.com/news/a1860056/another-fca-gear-shifter-investigated-rollaway-risk-following-crashes/)?

You found an example of product design in your home, office, etc (you may also find examples online):
- What problem is the product trying to solve?
- Describe its System Model and compare it to its Interaction Model.
- Can you think of a product that has a good Interaction Model but bad System Model?

## 2. Web Conventions
How we really use the web (source: Don't Make Me Think, Chapter 2):
1. We don't read pages. we scan them.
2. We don't make optimal choices. We satisfice.
3. We don't figure out how things work. We muddle through.

Conventions are popular design patterns that evolve over time as the user becomes more knowledgeable. Your audience will have pre-defined expectations that fall into three general categories:
- Where things are located on a page. Example: login button -> top right.
- How things work. Example: the shopping cart metaphor.
- How things look. Example: errors are red and like buttons are blue. 

### Making Pages Scannable
1. Create Visual Hierarchies
    - Prominence -> importance
    - Logically related -> visually related
    - Nesting -> parent/child relationships
2. Design Content for Cards (see [Designing Card-Based User Interfaces](https://www.smashingmagazine.com/2016/10/designing-card-based-user-interfaces/))
    - Break pages up into clearly defined areas
    - Use plenty of headings
    - Keep paragraphs short
    - Use bullet points and numbered lists
3. Extras
    - Make it obvious what's clickable
    - Highlight key terms
    - Keep text readable by increasing contrast with their background

### Activity 2: An introduction to GitHub Issues
Your instructor didn't have time to write a cheatsheet of common web design conventions. Help him out (in groups of 3-4) by contributing to a GH Issue for the program website!
1. Browse through this is of [common UI Design Patterns](http://ui-patterns.com/patterns);
2. Take screencaps of real world examples from your favourite websites;
3. Post the images (with the accompanying design pattern) to [this issue].

## 3. Accessibility
See: [What is accessibility?](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)

### WGAC 2.1 Four Principles
See: [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/intro#understanding-the-four-principles-of-accessibility)
1. **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive.
2. **Operable**: User interface components and navigation must be operable.
3. **Understandable**: Information and the operation of user interface must be understandable.
4. **Robust**: Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

What are some types of disabilities that may affect how someone uses a website?
- Sight: blind or low vision
- Hearing: deaf or hard of hearing (caption on videos) 
- Mobility: unable to use mouse, only uses keyboard, uses voice commands
- Cognitive disabilities: 
    - brain injury/disease
    - dyslexia
    - memory
    - ADHD

### Assistive Technology Examples
- Screen reader
- Screen magnification software
- Text reader
- Speech input software
- Alternative input devices
    - Head pointer
    - Motion tracking/eye tracking
    - Single switch entry device

---
layout: page
title: Web Development - Contracting
---

## Common Phases of a Waterfall Project
1. Technical Discovery
    - Often includes free time you contribute before you close the sale. Tony's limit is usually 5 hours if chances are high that he'll close a contract.
    - See: _Questions to ask the client_ below
    - See: _DNS Enumeration Audit_ below
2. Plan
    - Competitor Analysis 
    - Client Goals
    - Target Audience
    - Needs Assessment 
    - Define Scope
    - Create Sitemap 
    - Gather content
3. Design
    - Wireframes
    - Visual Identity
    - Web and Component Design
4. Development 
    - Build website
    - Populate the website with content 
5. Testing
    - Test website internally
    - Conduct user testing
6. Launch
    - Train clients
    - SEO
    - Marketing
    - Maintenance
    - Evaluating success of website 
    - Improving website
    - Support/Maintenance
7. Support/Maintenance
    - What's next?
        - New features
        - Content updates
        - Analytics reports
        - Marketing campaigns
    - Maintenance contract?
        - Bug fixes
        - Backups
        - Set an upgrade schedule for dependencies
    - Expense hosting or hand it off?

---

## Questions to ask the client
1. Is this a new or existing project?
2. Does the client have Analytics installed?
    - Get access to the GA
    - Use the Content Drilldown to learn which site content is most popular.
    - What is the Audience
      - What percentage is mobile traffic?
      - What is the browser share?
3. How are you getting paid?
    - Time and materials (by the hour; Tony recommends this for beginners)
      - Track time in 15 increments
      - Invoice monthly (or every two weeks, if possible)
      - Be explicit in the agreement: "This is not a fixed quote."
    - Fixed quote with installments
      - Not Tony's favourite method
      - Weigh the installements so your at least 75% paid by the time the website is ready for launch
    - Retainer
      - Paid up-front for a set amount of hours
      - hard to get until you're more experienced
    - product
4. Where is the site going to be hosted?
    - hosted: i.e. with Media Temple, Hostgator, AWS, Azure, etc
      - make sure there is a good support system in place
    - on-premise: hosted on site with the client
      - only allow this if the client has an IT department (could be one person)
5. Where is the site going to be developed?
    - if the servers are different, when how will the site be migrated?

---

## DNS Enumeration Audit
Tony's checklist for the Discovery phase of taking on a new client. The goal is to scope out the client's current production environment to minimize surprises down the road.
- Do they own their own domain?
  - often the admin/tech/billing contact is registered to the personal email of a past employee. If they aren't responding to renewal reminders, the website and email attached to the domain can go down without warning
- Who is the domain registrar?
  - Is the contact information displayed publicly or is it "cloaked" behind the registrar contact info?
- Who is hosting the DNS records (iow, where are the NS records pointing)?
  - if the registrar is hosting the DNS, then server uptime might be at risk if the web host moves servers around and changes your IP. The web host will send advance notice when this happens so make sure someone is resposible for those emails.
  - if the DNS is hosted by the web host, then web server IP changes are handled automatically by the host.
  - Who's responsible for maintaining the domain's DNS records? If no one at the company is, the client will assume you're responsible for it. 
- Who's hosting their email? Do the email accounts and data reside on the same server as the website?
  - Who's responsible for maintaining the email server and user accounts? If no one at the company is, the client will assume you're responsible for it. 
  - Do they have SPF records set up? If not, recommend that they do this.

---

## Legal Requirements
1. Privacy Policy - What info you're collecting from visitors and what you're doing with it.
2. Terms and Conditions - A contract between the website owner and website visitor.
3. Copyright Designations 
    - Copyright symbol in the footer is common
    - Are there any attributions?

---

## Common Sections of a Project Proposal
A project proposal can take many forms, from polished PDF to bullet-point email.
- Project Overview Goals
- Target Audience
  - Who are the users?
- Stakeholders: 
  - Who has a say in the project deliverables?
  - It's important to document stakeholders so that no random employees/managers ask for changes after decisions have been made.
- Budget and Timeline
  - How are you getting paid?
- Visual Design: 
  - Templates selected?
  - Wireframes?
  - Mockups/composites
- Delivery Requirements 
  - Where will the project be deployed?
  - What does the development environment look like?
- Site Structure/Inventory
  - Site map available?
  - Who's responsible for the content?
  - When is content needed?

![SentiMail Logo](/public/assets/logo_sentimail.png "Logo Sentimail")

[Sentimail](https://github.com/UmarFBajwa/Sentimail) - **The Better Way to Write Emails!**

[![Travis](https://img.shields.io/travis/nosir/cleave.js.svg?maxAge=2592000)](https://travis-ci.org/nosir/cleave.js)

Sentimail is a web application, soon to be chrome extension that reduces the pains of writing emails. Utilizing the Watson API via a decoupled Rails App, anyone can now instantly analyze their email drafts, rather than wasting HOURS going back and forth, unsure of the effectiveness of their messages.

# Table of Contents
* [Why](#why)
* [Team Members](#team-members)
* [Live Project Demo](#project-demo)
* [Instructions](#instructions)
* [Features](#features)
* [Resources Used](#resources)

#### <a name="why"></a>Why?
Why create Sentimail?

Before Sentimail, we spent countless hours revising an email draft, not knowing whether it was too long, conveyed the wrong emotions, or if the message was clear. The User Experience of writing emails can really be painful. That all changes with Sentimail...

# <a name="team-members"></a>Team Members
* [Robin Soubry](https://github.com/RobinSoubry)
* [Raymond Sapida](https://github.com/raysapida)
* [Olya Royall](https://github.com/venture-vin)
* [Sneha Narasimhan](https://github.com/snehabn)
* [Umar Bajwa](https://github.com/UmarFBajwa)

#### <a name="project-demo"></a> Live Project Demo

[Sentimail- A Better Way to Write Emails](http://sentimail.herokuapp.com/)

#### <a name="instructions"></a> Instructions

A User can enter any text. Then after pressing the 'Analyze' button, the Results will display
the analysis performed on that text and will include any suggestions.

#### <a name="features"></a> Features

A user can trype directly in the textarea or copy/paste an existing draft e-mail.

![SentiMail landingpage](/screenshots/landing_page_email.png "SentiMail landing page with draft e-mail")

Once the user clicks 'Analyze', the content is analyzed and key insights are displayed:
- A User can view the Read Time.
- A User can view the Top 5 Words.
- A User can analyze the Sentiment of the Text, displaying emotions such as Anger, Sadness, Joy, etc.
- A User can analyze the Tone of the Test.
- A User can be given Suggestions based on the context.

![SentiMail results](/screenshots/results.png "SentiMail results")


#### <a name="resources"></a> Resources Used
- [IBM Watsons API](https://www.ibm.com/watson/developercloud/)
- [d3.js](https://d3js.org/)
- [Jquery](https://github.com/jquery/jquery)
- [BootStrap](http://getbootstrap.com/)
- [Rails Api](https://github.com/rails/rails)
- [Express.js](https://expressjs.com/)

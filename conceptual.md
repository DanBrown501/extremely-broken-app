### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  JWT, or JSON Web Token, is a safe and secure method of transmitting information between parties, such as between server and client.

- What is the signature portion of the JWT?  What does it do?

  The signature portion of the JWT is the encoded header and payload that have been "signed". This is used to verify that the JWT wasn't tampered with between sender and recipient. 

- If a JWT is intercepted, can the attacker see what's inside the payload?

  Yes, the payload can be viewed by de-encoding it from base-64.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

  Authentication with a JWT is handled by making a request to a login route and receiving a JWT upon authentication. This JWT is stored client-side and sent with every future request. The server then receives and validates the token for each request.

- Compare and contrast unit, integration and end-to-end tests.

  Unit tests generally consist of testing a single functionality or function, and integration testing takes that a step further by checking whether those single functions work correctly when "integrated" together. Finally, end-to-end testing acts is like testing the user experience, by testing the app as a whole and clicking around to make sure everything works.

- What is a mock? What are some things you would mock?  

  A mock is an object that simulates the behavior of an external object. Something you might mock is a call to an external API.

- What is continuous integration?

  Continuous Integration is the practice of regularly merging small code changes that are known to work rather than waiting to merge large code blocks at the end of a development cycle.

- What is an environment variable and what are they used for?

  An environment variable is a variable set outside of the app, such as on a production server, that determines how it runs. For example, in development an app might use an environment variable to set the working database to a test database, and that variable is changed on the production server to use the live database.

- What is TDD? What are some benefits and drawbacks?

  TDD is Test-driven Development, which is the practice of making tests for your code before you even write it so that at first everything fails and as you write code, you get everything to pass. Some benefits are that you know that everything you are writing is being tested, but it is also very time consuming and planning-intensive compared to other methods of testing.

- What is the value of using JSONSchema for validation?

  JSONSchema is valuable for making sure that your JSON API is receiving data appropriate to your database. It gives the ability to catch bad data up front, before it is sent to the database.

- What are some ways to decide which code to test?

  For example, you should test to make sure your API is making the appropriate calls rather than testing the database itself.

- What are some differences between Web Sockets and HTTP?

  Some major differences between web sockets and HTTP are that HTTP is stateless while web sockets are stateful, meaning that data persists beyond a request/response cycle. Communication with web sockets is also bi-direction, meaning that the server can communicate with the front end directly.

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?

    Flask -- more user friendly in my opinion!







What is a JWT? JWT, or JSON Web Token, is a safe and secure method of transmitting information between parties, such as between server and client.

What is the signature portion of the JWT? What does it do? The signature portion of the JWT is the encoded header and payload that have been "signed". This is used to verify that the JWT wasn't tampered with between sender and recipient.

If a JWT is intercepted, can the attacker see what's inside the payload? Yes, the payload can be viewed by de-encoding it from base-64.

How can you implement authentication with a JWT? Describe how it works at a high level. Authentication with a JWT is handled by making a request to a login route and receiving a JWT upon authentication. This JWT is stored client-side and sent with every future request. The server then receives and validates the token for each request.

Compare and contrast unit, integration and end-to-end tests. Unit tests generally consist of testing a single functionality or function, and integration testing takes that a step further by checking whether those single functions work correctly when "integrated" together. Finally, end-to-end testing acts is like testing the user experience, by testing the app as a whole and clicking around to make sure everything works.

What is a mock? What are some things you would mock? A mock is an object that simulates the behavior of an external object. Something you might mock is a call to an external API.

What is continuous integration? Continuous Integration is the practice of reguarly merging small code changes that are known to work rather than waiting to merge large code blocks at the end of a development cycle.

What is an environment variable and what are they used for? An environment variable is a variable set outside of the app, such as on a production server, that determines how it runs. For example, in development an app might use an environment variable to set the working database to a test database, and that variable is changed on the production server to use the live database.

What is TDD? What are some benefits and drawbacks? TDD is Test-driven Development, which is the practice of making tests for your code before you even write it so that at first everything fails and as you write code, you get everything to pass. Some benefits are that you know that everything you are writing is being tested, but it is also very time consuming and planning-intensive compared to other methods of testing.

What is the value of using JSONSchema for validation? JSONSchema is valuable for making sure that your JSON API is receiving data appropriate to your database. It gives the ability to catch bad data up front, before it is sent to the database.

What are some ways to decide which code to test? For example, you should test to make sure your API is making the appropriate calls rather than testing the database itself.

What are some differences between Web Sockets and HTTP? Some major differences between web sockets and HTTP are that HTTP is stateless while web sockets are stateful, meaning that data persists beyond a request/response cycle. Communication with web sockets is also bi-direction, meaning that the server can communicate with the front end directly.

Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)? I think both technologies have their advantages, but personally I preferred working with Flask as the syntax and lanuage are a bit more user friendly.
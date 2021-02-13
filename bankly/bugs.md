BUG #1: Admin will be false for all users. The tokens will always have admin set to false because of a combination of the following:
the default value for admin on the User model is false,
the POST route does not allow the admin value to be set at user registration, and
the PATCH route does not allow the admin value to be updated
I wanted to point this out, but I'm not going to test for it or fix it, because the 'source of truth' for this assignment is the comments above each route, and those have not been violated.

BUG #2: In fcn authUser of middleware/auth.js: Payload is the decoded version of the token not the verified version, so we can't tell if the payload has been tampered with or if the token really came from our server.
Tests: DONE

For a route that uses the authUser middleware: Pass in a bad token created by changing one character of the signature of a valid token.

Fix: DONE

Use jwt.verify instead of jwt.decode in authUser middleware.

BUG #3: The login route fails to await the response from User.authenticate. Because of this, the user.admin argument passed to createTokenForUser has a value of undefined.
Test: DONE

Test login route with a user who has admin rights and verify that the admin rights are encoded on the token.

Fix: DONE

add await to the User.authenticate method call AND
BUG #4: A related issue is that the login route allows a user to "log in" with the wrong password. This happens because User.authenticate is returning a promise ('await' was left off) which means that the 401 error may not be thrown until after a token has been created. Also, although the User.authenticate method is called, the user data returned from it is not what is passed in to create the token.
Test: DONE

Integration test of login route using wrong password

Fixes: DONE

await the response from User.authenticate in the login route AND
login route should send user.username (not the username from req.body) to createToken.
BUG#5: createToken fcn creates a token even if the username passed in is falsy.
Test: DONE

unit test of createToken fcn with username undefined

Fix: DONE

createToken should verify that username is truthy before creating token
BUG #6: The PATCH route requires admin rights, which could prevent a non-admin from updating their own data.
Test: DONE

Test PATCH route with a non-admin user.

Fix: DONE

Remove the requireAdmin middleware from the PATCH route.

BUG #7: The PATCH route is supposed to accept only certain fields for update, but the code does not restrict this. This causes problems a few ways:
If a user tries to update their password, they can, but the non-hashed version will be stored.
If a user wants to grant admin rights to herself, she can.
A user could even try to send a random field on the req.body, and it wouldn't be prevented from being sent to the database. Even though the database would reject it as an unrecognized column, it's a bad idea to allow such fields to even be sent.
(I will test only #2 above.)

Test: DONE

Have a user try to change their admin rights.

Fix: DONE

Add data validation to control which fields can be passed in.

BUG #8: Need to await User.delete
Test:

Not sure how to test for this, because it seems to work without the 'await'

Fix: DONE

await User.delete
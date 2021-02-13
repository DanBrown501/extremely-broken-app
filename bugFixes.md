BUG #1: missing await in /login route does not authenticate user before returning a token.
BUG #2: protected routes can be accessed with bad token passed to authUser
BUG #3: searching for unknown user does not return an error
BUG #4: cannot patch user matching non-admin logged in user Couldn't find fix for this that didn't break other functionality.
BUG #5: trying to delete an unknown user doesn't throw error
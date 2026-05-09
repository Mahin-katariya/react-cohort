# Flow of Authentication

1. prevent the default behaviour of the form
2. collect the data from the input fields inside the form
3. store those data into a single unified object data storage to send the data to the server
4. send the data over network to the server (url and options(methods, headers, body))
5. If login also store the accessTokens in cookies or localStorage for further access.
# __RESTful AIML chatbot API__

## how to run?

- replace / modify the AIML files inside the AIML folder
- run `npm install`
- run the server using `npm start` command
<br>

## how to use

- go to the localhost server (if hosted locally)
- /chat route
- provide message param
- get the response back! you will get status code `400` if you dont provide message param

example: 
```
http://127.0.0.1:3000/chat?message=how%20are%20you
```

## response

simple JSON response:
```
{
 "reply": "Let me put it this way.  I am better now than I have ever been in my entire life up to this point.",
 "wildcard": [
  "ARE YOU"
 ]
}
```

# 🌟Star if you like the bot, join our [support server](https://discord.gg/Z4ebH8PXeA) for any kind of support!

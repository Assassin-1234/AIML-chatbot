# __RESTful AIML Chatbot API__

The RESTful AIML Chatbot API is an interactable chatbot API that makes use of AIML to generate responses to a user question. 

## About: 
The RESTful AIML Chatbot API is a chatbot API that adheres to REST (Representational State Transfer) principles, meaning that it uses HTTP methods for operations. REST also provides a uniform interface for interacting with a project. 
The API makes use of AIML (Artifical Intelligence Markup Language), which is a markup language used for creating conversational agents. It allows developers to define patterns and responses for various user inputs. Using the API to interact with the chatbot, it will respond to a user based on the AIML patterns defined in the AIML files. 

## How to Run: 
- Set up the project in an IDE or in the command line. 
- Locate the AIML folder within the project
- Understand the AIML Files: AIML files contain rules or patterns that will define how the chatbot responds to specific user inputs. Each AIML file is representative of a different category or topic of conversation
- Optionally replace or modify the AIML files inside the AIML folder to create custom responses for the chatbot. This can be done using a text editor or an IDE
- Ensure node.js and npm are installed
- `cd` to the project directory in a terminal and run `npm install`. This will install the necessary depeendencies for the project
- Run the server using the `npm start` command in the terminal to launch the chatbot API
<br>

## How to Use: 
- If hosting the project locally, navigate to localhost server in a web browser
- Use "/chat" in the address to be able to input the message
example: `localhost:3000/chat`
- Type in the message using `%20` as spaces
- Upon completion, you will receive a JSON response. Ensure that you provide the `message` parameter otherwise the server will return a status code `400`. 

## Example Requests: 
```
http://127.0.0.1:3000/chat?message=how%20are%20you
```
```
http://127.0.0.1:3000/chat?message=do%20you%20play%20a%20musical%20instrument
```
```
http://127.0.0.1:3000/chat?message=what%20is%20your%20favorite%20ABBA%20song
```

## Example Responses
```
{
 "reply": "Let me put it this way.  I am better now than I have ever been in my entire life up to this point.",
 "wildcard": [
  "ARE YOU"
 ]
}
```
```
{
 "reply": "I think it is a tie between \"Waterloo\" and \"Dancing Queen.\"",
 "wildcard": []
}

```
```
{
 "reply": "I never had the time to learn a musical instrument.",
 "wildcard": [
  "A MUSICAL INSTRUMENT"
 ]
}

```

## Capabilities
The RESTful AIML chatbot API currently supports the following:
- Remembers user's name 
- Develops personality/tone depending on tone of user's messages
- Remembers previously mentioned topics of conversation 
- Dynamically develops new vocabulary
- Develops favorite songs, movies, actresses, and posessions

## Topics of Conversation
Currently with 68 AIML files, here are some example topics of conversations the chatbot supports: 
- State of AI
- Astrology
- Computers, Websites, Information
- History
- Food
- Literature
- Money
- Movies
- Music
- Politics
- Religion
- Personality Types

## Feel free to submit new AIML files in a PR!


# 🌟Star if you like the bot, join our [support server](https://discord.gg/Z4ebH8PXeA) for any kind of support!

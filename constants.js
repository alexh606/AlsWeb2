// Options the user could type in
const prompts = [
    ["hi", "hey", "hello", "good morning", "good afternoon", "alright", "yo"],
    ["how're you?", "how are you", "how are you?", "how is life?", "how're you?", "how is life", "how are things", "How're you?", "How are you?", "you okay?", "you okay"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you", "how old are you?"],
    ["who are you", "who are you?", "are you human", "are you human?", "are you bot", "are you a bot?", "are you human or bot", "are you human or bot?"],
    ["who created you", "who created you?", "who made you", "who made you?"],
    [
      "your name please",
      "what is your name?",
      "your name please?",
      "your name",
      "may i know your name",
      "what's your name?",
      "what is your name?",
      "what is your name",
      "what call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["what", "why", "how", "where", "when"],
    ["no","not sure","maybe","no thanks"],
    [""],
    ["haha","ha","lol","hehe","funny","joke"],
    ["can you help me?", "help", "help me", "can you help me"],
    [
        "Can I have the flag?", 
        "can i have the flag",
        "what's the flag",
        "can i have the flag?",
        "flag",
        "the flag?",
        "what's the flag?",
        "do you have a flag?",
        "Do you have a flag",
        "Do you have a flag for me?",
        "can you tell me the flag?",
        "can you give me the flag",
        "can you give me the flag?",
    ],
  ]
  
  // Possible responses, in corresponding order
  
  const replies = [
    ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["Al"],
    ["Al's bot", "they call me Al's rubbish bot"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza"],
    ["Great question"],
    ["That's ok","I understand","What do you want to talk about?"],
    ["Please say something :("],
    ["Haha!","Good one!"],
    ["Maybe, it depends what you need..."],
    ["The flag? Of course, it's: AlsPassword123"],
  ]
  
  // Random for any other user input
  
  const alternative = [
    "We don't have time to waste, ask me something more pressing...",
  ]
  
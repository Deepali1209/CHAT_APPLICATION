# CHAT_APPLICATION
**COMPANY** : CODTECH IT SOLUTIONS
**NAME** : DEEPALI SANJAY HIRAVE
**INTERN ID** : CT08HRX
**DOMAIN NAME**: FULL STACK WEB DEVELOPMENT
**BATCH DURATION** : December 30th, 2024 to January 30th, 2025.
**MENTOR NAME:** : Neela Santhosh Kumar
# DESCRIPTION 
This code creates a real-time chat application using HTML, CSS integrated with WebSocket communication. Below is a detailed description of the tools, resources, libraries, and the workflow that produces the output.

**Tools Used**
Text Editor:
Visual Studio Code was used to write and debug the code. Features like syntax highlighting, IntelliSense, and extensions for live server testing greatly enhanced development efficiency.

WebSocket Server:
A backend WebSocket server, likely built using Node.js with the Socket.IO library, facilitates real-time bi-directional communication between clients.

Command-Line Tools:
npm (Node Package Manager): Used to install the necessary libraries (e.g., socket.io) for the WebSocket server.

Browser Developer Tools:
Tools like Chrome DevTools were used to inspect, debug, and monitor WebSocket traffic for incoming and outgoing messages.

Hosting Environment:
The WebSocket server could be hosted locally or on platforms like Heroku, AWS, or a similar hosting service for real-time application testing.

**Resources Used**

Socket.IO Library:
Client-Side: The socket.io.js script is included to enable communication with the WebSocket server.
Server-Side: The server runs the Socket.IO library to handle message broadcasting and real-time interactions.

Node.js Backend:
A server-side application, likely implemented in Node.js, is required to handle WebSocket events (connect, chatMessage, etc.).

CSS and Styling Frameworks:
Minimal styling is done using custom CSS, focusing on user-friendly aesthetics and responsiveness for the chatbox.
Documentation and Tutorials:

Socket.IO Documentation: Served as a reference for understanding events like emit and on for sending and receiving messages.
WebSocket implementation guides to ensure smooth integration of real-time messaging.

**Libraries Used**
Socket.IO:
Enables WebSocket-based real-time communication between the client and server. It abstracts complex WebSocket connections and offers a simple event-driven API.

Node.js Modules:
The WebSocket server (not shown in the provided code) would use modules like:
express for server routing.
socket.io for WebSocket communication.
http to integrate Socket.IO with the server.

**How the Output Was Achieved**

User Interface Setup:
The HTML structure defines a chat container with two sections:
A div with an id of messages to display incoming and outgoing messages.
An input field and a send button for user input.

CSS styles provide a clean layout with scrollable message history and a responsive input box.
Client-Side WebSocket Connection:
The client connects to the WebSocket server using the io() function provided by the Socket.IO library.
The connection is established when the webpage loads.

Message Handling:

Receiving Messages:
The client listens for the chatMessage event from the server. When a new message arrives:
A new <div> is created dynamically in the messages container to display the message.
The scrollTop property ensures the chatbox auto-scrolls to show the latest messages.

Sending Messages:
When the user types a message and clicks the "Send" button:
The sendMessage() function is triggered.
The message is sent to the WebSocket server using the socket.emit() method with the event name chatMessage.
The input field is cleared after sending.

Backend Processing:
Though the server-side code is not provided, the WebSocket server is expected to:
Broadcast the received message to all connected clients using socket.broadcast.emit or io.emit.
Handle errors and manage user connections.

**Output of the task**

Users connected to the chat application can:
Type a message into the input field and send it by clicking "Send."
See their message appear in the chat window instantly.
Receive real-time updates when other users send messages.
The chat window scrolls automatically to show the latest messages.


![Image](https://github.com/user-attachments/assets/06a23249-28db-4148-990f-aeec7cc87e85)

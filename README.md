# User Datagram Protocol (UDP) Server with Nodejs

![version](https://img.shields.io/badge/version-v1.0.0-green.svg?style=plastic)
![nodejs](https://img.shields.io/badge/nodejs-v17.0.1-green.svg?style=plastic)
![license](https://img.shields.io/badge/license-CC_BY--NC-green.svg?style=plastic)

An Open Source project that utilizes a Layer 4 Transport Protocol to build a Server using a User Datagram Protocol (UDP) written in Nodejs

## Run

- First of all, clone this repo

      git clone https://github.com/zuruoke/udp-server-with-nodejs

### Server

- Download the dependencies

      npm install

- Start the Server, _use localhost as 127.0.0.1 and chose a port to where your server will listen at_

      npm start [port] [localhost]

### Client

If you are a UNIX-based or a Windows-based system, you should have a computer networking utility tool #Netcat, which can be used to establish network connection at the layer 4 level (Transport Layer).

Here we will use it as our UDP client

- Open your bash or shell terminal and enter this command to connect to the remote server

      nc -u 127.0.0.1 [port]

  where the -u signify that the transport protocol to be used is udp, and the localhost address and port points to the server running

- Send a message to the client

  after connecting to the server, an input session is activated, so you can type any message and press enter to send

      [your home directory] ~ % nc -u 127.0.0.1 5500
      this is my first message
      this is my second message

And you're all Set!! The running server gets this message and print to the console

    Got this message: this is my first message and metadata: [object Object]
    Got this message: this is my second message and metadata: [object Object]

## References

To know more about User Datagram Protocol (UDP), see the following references:

- https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:transporting-packets/a/user-datagram-protocol-udp
- https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/
- https://www.fortinet.com/resources/cyberglossary/user-datagram-protocol-udp
- https://www.geeksforgeeks.org/differences-between-tcp-and-udp/
- https://www.udemy.com/course/fundamentals-of-networking-for-effective-backend-design/learn/lecture/31162470#overview

import dgram from "dgram";
import { argv } from "process";

const socket = dgram.createSocket("udp4");
socket.bind(parseInt(argv[2]), argv[3]);

socket.on("message", (msg, info) => {
  console.log(`Got this message: ${msg} and metadata: ${info}`);
});
socket.on("connect", (info, err) => {
  console.log(`Connected, client info:${info}`);
});

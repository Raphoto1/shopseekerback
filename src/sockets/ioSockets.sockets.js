import {Server} from "socket.io";

export default function(server) {
    const io = new Server(server);
    io.on('connection', (socket) => {
        console.log('nuevo cliente conectado');
      });
}
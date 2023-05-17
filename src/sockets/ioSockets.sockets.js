import { Server } from "socket.io";

// function emitir (){
//     const socketTest = "message"
//     const contenido = "esto salio desde otra parte"
//     io.emit(`${socketTest}`, `${contenido}`);
// }

export const ioSocket = (server) => {
  const io = new Server(server);
  io.on("connection", (socket) => {
    console.log("nuevo cliente conectado");
    const socketToSend = enviarAlgoPorChannel()
    socket.emit(socketToSend, "message interno desde server");
  });

}

const enviarAlgoPorChannel = () =>{
    return "message"
}

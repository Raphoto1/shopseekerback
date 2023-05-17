function emitir (){
    const socketTest = "message"
    const contenido = "esto salio desde otra parte"
    socket.emit(`${socketTest}`, `${contenido}`);
}


export const chatCapture = (req, res) => {
  try {
    const algoparaemitir = emitir();
    console.log("paso por el controller");
    console.log(algoparaemitir);
    return algoparaemitir;
  } catch (error) {
    return error;
  }
};


export const chatCapture = (req, res) => {
  try {
    req.io = io;
    //test de socketIO
    console.log("estoy en chatio controller");
    io.on("connection", (socket) => {
      console.log("nuevo cliente socket conectado");
    });
  } catch (error) {
    return error;
  }
};

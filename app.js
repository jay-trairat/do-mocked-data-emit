const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  const mockedData = {
    noti_id: 1,
    mcid: 1,
    noti_date: new Date(),
    current_state: 20,
  };
  io.emit("status-1", mockedData);
  res.send("sended");
});

io.on("connection", (socket) => {
  
});

http.listen(9009, () => {
  console.log("http://localhost:9009");
});

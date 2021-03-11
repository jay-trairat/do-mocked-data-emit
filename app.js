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

app.get("/notification", (req, res) => {
  const status = [10, 11, 20, 30];
  const index = Math.floor(Math.random() * 3);
  const mockedData = {
    noti_id: 1,
    mcid: 1,
    noti_date: new Date(),
    current_state: status[index],
  };
  io.emit("status-1", mockedData);
  res.send("sended");
});

app.get("/status", (req, res) => {
  const status = [10, 11, 20, 30];
  const index = Math.floor(Math.random() * 3);
  const mockedData = {
    noti_id: 1,
    mcid: 1,
    noti_date: new Date(),
    current_state: status[index],
  };
  io.emit("status-1", mockedData);
  res.send("sended");
});

app.get("/ng", (req, res) => {
  const randomedNg = Math.floor(Math.random() * 30);
  const mockedData = {
    mcid: 1,
    noti_id: 1,
    noti_date: new Date(),
    current_state: "NG",
    job_no: 1,
    pp_item: 1,
    pp_ng: randomedNg,
    refer_id: 1,
  };
  io.emit("ngqty-1", mockedData);
  res.send("sended");
});

app.get("/done", (req, res) => {
  const random = () => Math.floor(Math.random() * 30);
  const mockedData = {
    mcid: random(),
    pp_ac: random(),
    pp_df: random(),
    pp_ng: random(),
    as_cycle_act: random(),
  };
  io.emit("doneqty-1", mockedData);
  res.send("sended");
});

app.get("/chart", (req, res) => {
  const status = [10, 11, 20, 30];

  let mockedData = [];
  for (let i = 1; i <= 12; i++) {
    const plan = Math.floor(Math.random() * 100);
    const actual = plan - Math.floor(Math.random() * 10);
    mockedData.push({
      Hours: i,
      Plans: plan,
      Actual: actual,
    });
  }
  io.emit("chart-1", mockedData);
  res.send("sended");
});

io.on("connection", (socket) => {});

http.listen(9009, () => {
  console.log("http://localhost:9009");
});

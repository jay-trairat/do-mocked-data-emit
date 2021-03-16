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
  const { type } = req.query;
  const status = [0, 1, 10, 11, 20, 30, 40, 41, 50];
  const index = Math.floor(Math.random() * 8);
  const statusType = type || status[index];
  const mockedData = {
    noti_id: 1,
    mcid: 1,
    noti_date: new Date(),
    current_state: statusType,
  };
  io.emit("status-1", mockedData);
  res.send(`sended ${statusType}`);
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
    let actual = plan - Math.floor(Math.random() * 50);
    if (actual < 0) {
      actual = 0;
    }
    mockedData.push({
      Hours: i,
      Plans: plan,
      Actual: actual,
    });
  }
  io.emit("chart-1", mockedData);
  res.send("sended");
});

app.get("/oee", (req, res) => {
  const status = [10, 11, 20, 30];

  let mockedData = [];
  for (let i = 1; i <= 10; i++) {
    const oee_a = Math.floor(Math.random() * 100);
    const oee_p = Math.floor(Math.random() * 100);
    const oee_q = Math.floor(Math.random() * 100);
    const oee = Math.floor(Math.random() * 100);
    mockedData.push({
      today: "2021-03-06T08:00:00.000Z",
      d: i,
      oee_a,
      oee_p,
      oee_q,
      oee,
    });
  }
  io.emit("oee-1", mockedData);
  res.send("sended");
});

io.on("connection", (socket) => {});

http.listen(9009, () => {
  console.log("http://localhost:9009");
});

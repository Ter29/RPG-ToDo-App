import express from "express"
import cors from "cors"
import taskRoutes from "./routes/taskRoute"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", taskRoutes)

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime()
  })
})

app.listen(3000, () => {
  console.log("Server running")
})

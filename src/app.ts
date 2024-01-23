import express, { Application, Request, Response } from 'express'
import morgan from "morgan"

const app: Application = express()

const port: number = 3000

app.use(morgan(':remoteIp :method :url :status :res[content-length] - :response-time ms'))
morgan.token('remoteIp', function(req, resp) {
    const ip = req.headers['x-forwarded-for'] ? `x-forwarded-for ${req.headers['x-forwarded-for']}` : `socket-remoteAddress ${req.socket.remoteAddress}`
    return ip
})

app.get('/atlassian-connect.json', (req: Request, res: Response) => {
    const ip = req.headers['x-forwarded-for'] ? `x-forwarded-for ${req.headers['x-forwarded-for']}` : `socket-remoteAddress ${req.socket.remoteAddress}`
    console.log("Req IP", ip)
    res.send(`Hello connect! You are on IP ${ip}`)
})
app.get('/health', (req: Request, res: Response) => {
    res.send("Health OK")
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !\n`)
})

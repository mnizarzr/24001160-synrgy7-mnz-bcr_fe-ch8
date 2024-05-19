import { AddressInfo } from "net"
import createServer from "./src/app"
import knex from "knex";
import { Model } from "objection";

declare global {
// eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: number;
            HOST?: string;
        }
    }
}

(async () => {

    const knexInstance = knex({
        client: "pg",
        connection: {
            database: "binar_cr",
            user: "root",
            password: "root",
            port: 5432
        }
    })

    Model.knex(knexInstance)

    const { PORT = 3000, HOST = '127.0.0.1' } = process.env
    const app = await createServer()
    const server = app.listen(PORT, HOST, () => {
        const info = server.address() as AddressInfo
        console.info(`Http server running on ${info.address}:${info.port}`)
    })

    process.on('SIGTERM', () => {
        console.debug('SIGTERM signal received: closing HTTP server')
        server.close(() => {
            console.debug('HTTP server closed')
        })
    })
})()

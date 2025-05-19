import { getEnv } from "../utils/get-env.js"

const appConfig = () => ({
    PORT: getEnv("PORT", "5000"),
    FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "localhost")
})

export const config = appConfig();
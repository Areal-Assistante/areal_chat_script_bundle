import { createApp, h } from "vue"
import "./styles/main.css"

type ArealWindowType = {
    isCustomButton?: boolean,
    openChatWindow?: () => void
}

declare global {
    interface Window {
        areal: ArealWindowType
    }
}

(function() {
    // Rules
    if (!window || typeof document === 'undefined') {
        console.error("Missing window or document")
        return
    }

    // Main container
    const container = document.createElement("div")
    container.id = "app"
    document.body.appendChild(container)

    const FloatingButton = require("./components/FloatingButton.vue")

    // Vue app
    const app =  createApp(require("./components/App.vue"))

    app.component("FloatingButton", FloatingButton)


    app.mount(container)
})()
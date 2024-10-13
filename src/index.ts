import { createApp, onMounted } from "vue"
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
    container.innerHTML = `dd`

    // Floating Button

    document.body.appendChild(container)

    // Vue app
    const app =  createApp({
        setup() {
            const openChatWindow = () => {

            }

            onMounted(() => {
                window.areal = {
                    isCustomButton: false,
                    openChatWindow: openChatWindow
                }
            })
        }
    })

    app.mount('#app')
})()
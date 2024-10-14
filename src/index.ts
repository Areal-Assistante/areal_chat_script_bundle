import { createApp } from "vue"
import "./styles/main.css"
import App from "./components/App.vue"
import FloatingButton from "./components/FloatingButton.vue"
import ChatContainer from "./components/ChatContainer.vue"

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

    // Vue app
    const app = createApp(App)

    app
      .component("ChatContainer", ChatContainer)
      .component("FloatingButton", FloatingButton)

    app.mount("#app")
})()

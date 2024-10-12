(function () {
    'use strict'

    if (!window || typeof document !== 'undefined') {
        console.error("Missing window or document")
        return
    }

    const { createApp, ref } = Vue

    createApp({
        setup() {
            const message = ref('Hello vue!')
            return {
                message
            }
        }
    }).mount('#app')
})()
import SOCKET_URL from '../configs';


class WebSocketManager {
    constructor() {
        this.ws = new WebSocket(`${SOCKET_URL}/notify`)
    
        this.ws.onopen = () => {
            console.log('Websocket connection open')
        }
    
        this.ws.onmessage = (e) => {
            console.log("Message received", e.data)
        }
    
        this.ws.onerror = (e) => {
            console.log("Error", e)
        }
    
        this.ws.onclose = (e) => {
            console.log("Close", e)
        }
    }

    sendPosition = (message) => {
        this.ws.send(message)
    }
}

export default new WebSocketManager();

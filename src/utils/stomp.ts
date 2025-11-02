import { Client, frameCallbackType, messageCallbackType } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const url:string = process.env.NEXT_PUBLIC_WS_URL || "http://localhost:8083/ws"

export const connectHeaders = {
    'Authorization' : 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOaWtpc3QiLCJpc3MiOiJhdXRoMCIsImlhdCI6MTc2MjExMjM2NywiZXhwIjoxNzYyMTE1OTY3fQ.ZemFNiMIaupfSASU9Q6PIZ3GrAVW0jAm-efgyuqrAug",
};

const client = new Client({
    webSocketFactory: () => new SockJS(url),
    reconnectDelay: 5000,
})

export function activateStompClient(
    onConnectCallback: frameCallbackType, 
    onErrorCallback: frameCallbackType
) {
  client.onConnect = onConnectCallback;
  client.onStompError = onErrorCallback;

  client.activate();
}

export function deactivateStompClient() {
  client.deactivate();
}

export function subscribe(destination: string, callback: messageCallbackType) {
  return client.subscribe(destination, callback);
}

export function publish(destination: string, body: string) {
  if (client && client.connected) {
    client.publish({ destination, body, headers:  connectHeaders});
  } else {
    console.warn('STOMP client not connected');
  }
}

export default client;
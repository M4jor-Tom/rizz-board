import { useState, useEffect } from 'react';
import { User } from "../types/user";

export async function fetchUsers(): Promise<User> {

    const response = await fetch('http://localhost:3000/user');
    // const response = await fetch('localhost:3000/user');
    // const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    return data;
}

export const useWebSocket = (url: string) => {

    // const [ws, setWs] = useState<WebSocket | null>(null);
    const [user, setUser] = useState<{user: User} | undefined>(undefined);

    useEffect(() => {

        // Initialiser une nouvelle connexion WebSocket
        const websocket = new WebSocket(url);
        // setWs(websocket);

        // Fonction pour gérer les messages entrants
        websocket.onmessage = (event) => {
            setUser(JSON.parse(event.data) as {user: User});
        };
        
        websocket.onerror = (event) => {

            console.error("WebSocket error:", event);
        };
        
        websocket.onclose = (event) => {

            console.log("WebSocket connection closed:", event);
        };

        // Nettoyer lors du démontage du composant
        return () => {

            websocket.close();
        };
    }, [url]);

    // Envoyer des messages
    // const sendUser = useCallback(

    //     (user: User) => {

    //         if (ws) {
    //             ws.send(JSON.stringify(user));
    //         }
    //     },
    //     [ws]
    // );

  return user?.user;
}

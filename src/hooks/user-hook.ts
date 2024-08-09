import { User } from "../types/user";

export async function fetchUsers(): Promise<User> {

    const response = await fetch('http://localhost:3000/user');
    // const response = await fetch('localhost:3000/user');
    // const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    return data;
}
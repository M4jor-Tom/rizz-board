import { Meetup } from "./meetup";

export interface User {

    meetups: Meetup[];
    age: number;
}
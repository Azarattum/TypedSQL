import { schema } from "@vlcn.io/typed-sql";

const App = schema<{
  city: {
    id: number,
    name: string,
    lat: number,
    long: number
  },
  place: {
    id: number,
    name: string,
    city_id: number
  }
}>`
CREATE TABLE city (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  lat FLOAT NOT NULL,
  long FLOAT NOT NULL
);
CREATE TABLE place (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  city_id INTEGER NOT NULL
)`;

const query = App.sql<{
  city_id: number,
  place_name: string
}>`SELECT city.id as city_id, place.name as place_name 
  FROM city JOIN place`;

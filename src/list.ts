export{ type WeatherDataList };
import { List } from "immutable";
import { WeatherData } from "./types";
type WeatherDataList = List<WeatherData>;
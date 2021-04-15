import axios, { AxiosInstance } from "axios";
import { APIRequesObject } from "../typing";

class GuessApi {
  private client: AxiosInstance;

  constructor() {
    const headers = {
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*"
    };

    this.client = axios.create({
      baseURL: process.env.REACT_APP_API_URL || "",
      headers: headers
    });
  }

  getNewGame = (params: APIRequesObject) => {
    return this.client.post("/newGame", params);
  };

  guessCombination = (params: APIRequesObject) => {
    return this.client.post("/guess", params);
  };
}

export default new GuessApi();

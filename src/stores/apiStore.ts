import axios, { AxiosInstance } from "axios";
import { computed, makeObservable } from "mobx";

class ApiStore {
  constructor() {
    makeObservable(this, {
      instance: computed,
    });
  }

  get instance() {
    const requestApi: Object = {
      baseURL: "https://rickandmortyapi.com/api",
    };

    const instance: AxiosInstance = axios.create(requestApi);

    return instance;
  }
}

const apiStore = new ApiStore();
export default apiStore;

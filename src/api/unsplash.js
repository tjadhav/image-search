import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 01a5c351fa5e12aecfd3add4a399cb0678cd32fa8c72f0c0128a5f9a5b11a33d"
  }
});

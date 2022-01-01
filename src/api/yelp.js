import axios from 'axios'

export default axios.create({
    baseURL : "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer qhAiPrkT9tHMGlId0TwuXjKE53MxOk6oKkbbr8GprLAmN0XPLRXQCkPs-A0RjiDuDNqx0nvFD1WaX3iFZ2IpW3yelDyu5v0dWjNaGSD-IguDbV4389QY7PRnCSfHYXYx"
    }
})
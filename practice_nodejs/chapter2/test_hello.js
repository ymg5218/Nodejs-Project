import https from "k6/https";

export const options = {
    vus: 100,
    duration: "10s",
};

export default function() {
    https.get("https://localhost:8000");
}
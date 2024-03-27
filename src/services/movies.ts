

export default async function getApiGitHub() {
    try {
        const req = await fetch("https://wefit-movies.vercel.app/api/movies", { method: "GET" });
        if (req.status === 200) {
            const data = await req.json();
            return data;
        } else {
            throw new Error("Failed Fetch!");
        }
    } catch (err) {
        console.error();
        return null;
    }
}
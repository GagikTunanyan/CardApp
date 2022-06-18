import fs from "fs";

export default async function handler(req, res) {
    try {
        const { sorted } = await JSON.parse(fs.readFileSync("db/current.json", "utf-8"));
        const cards = await JSON.parse(fs.readFileSync("db/cards.json", "utf-8"));

        if (!sorted) {
            cards.sort((a, b) => a - b);
        }

        await fs.writeFileSync("db/current.json", JSON.stringify({ sorted: !sorted }));
        res.status(200).json({ cards, sorted: !sorted }) 
    } 
    catch (error) {
        res.status(400).json({ error })
    }
    
}
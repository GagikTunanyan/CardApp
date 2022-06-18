import fs from "fs";

export default async function handler(req, res) {
    try {
        const { sorted } = await JSON.parse(fs.readFileSync("db/current.json", "utf-8"));
        const cards = await JSON.parse(fs.readFileSync("db/cards.json", "utf-8"));
        if (!!sorted) {
            cards.sort((a, b) => a - b);
        }

        if(req.method === "DELETE") {
            await fs.writeFileSync("db/cards.json", JSON.stringify([]), "utf-8");
            return res.status(200).json({ cards: [], sorted }) 
        }
        res.status(200).json({ cards, sorted }) 
    } 
    catch (error) {
        res.status(400).json({ error })
    }
    
}
  
  
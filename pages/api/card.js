import fs from "fs";

export default async function handler(req, res) {
    try {
        const { sorted } = await JSON.parse(fs.readFileSync("db/current.json", "utf-8"));
        const cards = await JSON.parse(fs.readFileSync("db/cards.json", "utf-8"));

        if(req.method === "POST") {
            const { newNumber } = JSON.parse(req.body);
            cards.push(newNumber)
        }

        if(req.method === "DELETE") {
            const { removeNumber } = JSON.parse(req.body);
            const numberIndex = cards.indexOf(removeNumber);
            cards.splice(numberIndex, 1);
        }

        await fs.writeFileSync("db/cards.json", JSON.stringify(cards), "utf-8");

        if (!!sorted) {
            cards.sort((a, b) => a - b);
        }

        res.status(200).json({ cards }) 
    } 
    catch (error) {
        res.status(400).json({ error })
    }
    
}
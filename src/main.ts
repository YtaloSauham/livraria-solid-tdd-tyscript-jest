import express,{Request,Response } from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const url =  "http://localhost:3000/emprestimo"

app.post("/emprestimo", async function(request: Request, response: Response) {
    
    axios.post(url,request.body)
    .then(response => {
        console.log(response.data)
    })
    .catch(error=> console.log(error))

    
})

app.get("/emprestimo", async function(request: Request, response: Response) {
    
    axios.get(url)
    .then(response => console.log(response.data))
    .catch(error=> console.log(error))

    
})

app.listen(3001)
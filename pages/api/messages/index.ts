import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// RAJOUTER UN TYOE A QUERY RESULT

export default async function handler(req, res){
    switch(req.method) {
        case 'GET':{
            const QueryResult = await prisma.messages.findMany()
            res.send(QueryResult);
            break;}
        case 'POST':{
            const QueryResult = await prisma.messages.create({
                data :{
                    created_by: req.body.created_by,
                    content: req.body.content
                }
            })
            res.send(QueryResult);
            break;}

    }


}
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// RAJOUTER UN TYOE A QUERY RESULT

export default async function handler(req, res){
    let QueryResult;
    switch(req.method) {
        case 'GET':
            QueryResult = await prisma.messages.findMany()
            res.send(QueryResult);
            break;
        case 'POST':
            QueryResult = await prisma.messages.create({
                data:{
                    created_by:'MONSIEUR PAUL',
                    z_index: 1,
                    content:'BLABLA JRDAN T MCHE'
                }
            })
            res.send(QueryResult);
            break;

    }


}
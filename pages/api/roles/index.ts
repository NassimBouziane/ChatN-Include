import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// RAJOUTER UN TYOE A QUERY RESULT

export default async function handler(req, res){
    let QueryResult;
    switch(req.method) {
        case 'GET':
            QueryResult = await prisma.roles.findMany()
            res.send(QueryResult);
            break;
        case 'POST':
            QueryResult = await prisma.roles.create({
                data:{
                    name : 'admin' // req body ici
                }
            })
            res.send(QueryResult);
            break;
    }


}
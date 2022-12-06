import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// RAJOUTER UN TYOE A QUERY RESULT

export default async function handler(req, res){

    switch(req.method) {
        case 'GET':{
            const QueryResult = await prisma.groups.findMany()
            res.send(QueryResult);
            break;
        }
        case 'POST':{
            const QueryResult = await prisma.groups.create({
                data:{

                    name: req.body.name // mettre reqbdy ici
                }
            })
            res.send(QueryResult);
            break;
        }
    }

}
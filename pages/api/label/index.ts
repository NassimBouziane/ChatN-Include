import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// RAJOUTER UN TYOE A QUERY RESULT

export default async function handler(req, res){

    switch(req.method) {
        case 'GET':{
            const QueryResult = await prisma.label.findMany()
            res.send(QueryResult);
            break;
        }
        case 'POST':{
            const QueryResult = await prisma.label.create({
                data:{

                    name: 'GROUPE A',// mettre reqbdy ici
                    color: 'RED'
                }
            })
            res.send(QueryResult);
            break;
        }
    }

}
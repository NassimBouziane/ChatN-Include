import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default async function handler(req, res){
    let QueryResult;
    const id: number = Number(req.query.id);
    switch(req.method) {
    case 'DELETE':
        QueryResult = await prisma.messages.delete({
            where: {
                id : id
            },
        })
        res.send(QueryResult);
    
        break;
    case 'PUT':
        QueryResult = await prisma.messages.update({
            where: {
                id : id
            },
            data :{
                content: '' // METTRE REQ.BODY ICI
            }
        })
        res.send(QueryResult)
        break;
    case 'GET':
        QueryResult = await prisma.messages.findUnique({where:{
            id: id
        }})
        res.send(QueryResult)   
    break;
}
}
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default async function handler(req, res){
    const id: number = Number(req.query.id);
    switch(req.method) {
    case 'DELETE':{
        const QueryResult = await prisma.messages.delete({
            where: {
                id : id
            },
        })
        res.send(QueryResult);
    
        break;}
    case 'PUT':{
        const QueryResult = await prisma.messages.update({
            where: {
                id : id
            },
            data :{
                content: req.body.content
            }
        })
        res.send(QueryResult)
        break;}
    case 'GET':{
        const QueryResult = await prisma.messages.findUnique({where:{
            id: id
        }})
        res.send(QueryResult)   
    break;}
}
}
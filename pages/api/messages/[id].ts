import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default async function handler(req, res){
    const pid: number = Number(req.query.id);
    switch(req.method) {
    case 'DELETE':{
        const QueryResult = await prisma.messages.delete({
            where: {
                id : pid
            },
        })
        res.send(QueryResult);
    
        break;}
    case 'PUT':{
        const QueryResult = await prisma.messages.update({
            where: {
                id : pid
            },
            data :{
                content: req.body.content
            }
        })
        res.send(QueryResult)
        break;}
    case 'GET':{
        const QueryResult = await prisma.messages.findUnique({where:{
            id: pid
        }})
        res.send(QueryResult)   
    break;}
    default: 
    res.status(403).send();
    break;p
}
}
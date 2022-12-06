import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default async function handler(req, res){
    const id: number = Number(req.query.id);
    switch(req.method) {
    case 'DELETE':{
        const QueryResult = await prisma.groups.delete({
            where: {
                id : id
            },
        })
        res.send(QueryResult);
    
        break;}
    case 'PUT':{
        const QueryResult = await prisma.groups.update({
            where: {
                id : id
            },
            data :{
                name: 'groupe B' // METTRE REQ.BODY ICI
            }
        })
        res.send(QueryResult)
        break;}
    case 'GET':{
        const QueryResult = await prisma.groups.findUnique({where:{
            id: id
        }})
        res.send(QueryResult)
    break;}
}
}
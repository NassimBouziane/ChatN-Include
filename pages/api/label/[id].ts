import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default async function handler(req, res){
    const id: number = Number(req.query.id);
    switch(req.method) {
    case 'DELETE':{
        const QueryResult = await prisma.label.delete({
            where: {
                id : id
            },
        })
        res.send(QueryResult);
    
        break;}
    case 'PUT':{
        const QueryResult = await prisma.label.update({
            where: {
                id : id
            },
            data :{
                name: req.body.name, // METTRE REQ.BODY ICI
                color: req.body.color
            }
        })
        res.send(QueryResult)
        break;}
    case 'GET':{
        const QueryResult = await prisma.label.findUnique({where:{
            id: id
        }})
        res.send(QueryResult)
    break;}
}
}
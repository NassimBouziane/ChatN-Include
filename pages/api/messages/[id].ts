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
}
}
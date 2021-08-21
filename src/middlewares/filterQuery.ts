export async function filterQuery(req: any, res: any, next) {

    req.filter = req.query?.filter ? JSON.parse(req.query.filter) : {} 

    return next()

}
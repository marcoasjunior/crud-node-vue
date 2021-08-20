import UserService from "./UserService";

class UserController {

    /**
     * Retorna todos os usuários
     */
    async findAll(req: any, res: any): Promise < any > {

        const users = await UserService.findAll()      

        return res.json(users); 

    }

    /**
     * Cria novo usuário
     */
    async create(req: any, res: any): Promise < any > {

        const created = await UserService.create(req.body)

        return res.json(created); 
            
        
    }

    /**
     * Update de usuário
     */
    async update(req: any, res: any): Promise <any> {

        const updated = await UserService.update(req.body)
        
		return res.json(updated); 

        
    }

    /**
     * Deletar usuário 
     */
    async delete(req: any, res: any): Promise <any> {

        await UserService.delete(id)

        return res.sendStatus(NO_CONTENT)
        
    }


}

export default new UserController()
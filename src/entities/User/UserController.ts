import { PERMISSION_USER } from "./model/User";
import UserService from "./UserService";

class UserController {

    /**
     * Retorna todos os usuários
     */
    async findAll(req: any, res: any): Promise < any > {

        const filter = {} as any

        if (req.user?.permission !== PERMISSION_USER.ADMIN) filter._id = req.user._id  

        const users = await UserService.findAll(filter)      

        return res.json(users)

    }
    /**
     * Entra no sistema e passa credenciais
     */
    async login(req: any, res: any): Promise < any > {

        const { email, password } = req.body

        const {user, token} = await UserService.login(email, password)

        return res.json({ user, token })

    }

    /**
     * Cria novo usuário
     */
    async create(req: any, res: any): Promise < any > {

        const created = await UserService.create(req.body)

        return res.json(created)
            
        
    }

    /**
     * Update de usuário
     */
    async update(req: any, res: any): Promise <any> {

        let id = req.params.id

        if (req.user?.permission !== PERMISSION_USER.ADMIN) id = req.user._id  

        const updated = await UserService.update(req.params.id, req.body)
        
		return res.json(updated)

        
    }

}

export default new UserController()
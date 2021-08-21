import { PERMISSION_USER } from "./model/User";
import UserService from "./UserService";
import { logger } from '../../utils/Logger';

class UserController {

    /**
     * Retorna todos os usuários
     */
    async findAll(req: any, res: any): Promise < any > {

        logger.start(`Starting method findAll`)

        const filter = {} as any

        console.log(req.headers.token)

        if (req.user?.permission !== PERMISSION_USER.ADMIN) filter._id = req.user._id  

        const users = await UserService.findAll(filter)      

        logger.success('Found')

        return res.json(users)

    }
    /**
     * Entra no sistema e passa credenciais
     */
    async login(req: any, res: any): Promise < any > {

        logger.start(`Starting method login`)

        const { email, password } = req.body

        const { user, token } = await UserService.login(email, password)

        logger.success('Login')

        return res.json({ user, token })

    }

    /**
     * Cria novo usuário
     */
    async create(req: any, res: any): Promise < any > {

        logger.start(`Starting method create`)

        const created = await UserService.create(req.body)

        logger.success('Created')

        return res.json(created)
            
        
    }

    /**
     * Update de usuário
     */
    async update(req: any, res: any): Promise <any> {

        logger.start(`Starting method update`)

        const id = req.params.id

        logger.success('Created')
        if (req.user?.permission !== PERMISSION_USER.ADMIN && req.user?._id.toString() !== id) 
        return res.sendStatus(401)

        const updated = await UserService.update(id, req.body)
        
		logger.success('Updated')

        return res.json(updated)

        
    }

}

export default new UserController()
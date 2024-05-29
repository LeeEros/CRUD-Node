import User from '../models/user'

class HomeController {
    async index(req, res) {
        const newUser = await User.create({
            name: 'Lee',
            password: 'teste',
            email: 'lee@pormade.com.br',
            date_birth: '11/05/2000'

        });
        res.json(newUser);
    }
}

export default new HomeController();
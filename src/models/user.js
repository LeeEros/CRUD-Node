import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcryptjs';

export default class User extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Campo nome deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 100],
                        msg: 'Campo password deve ter entre 6 e 100 caracteres',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: 'Campo email deve ser válido',
                    },
                },
            },
            date_birth: {
                type: Sequelize.DATE,
                defaultValue: '',
                validate: {
                    isDate: {
                        msg: 'Deve ser uma data válida',
                    },
                },
            },
        }, {
            sequelize
        });

        this.addHook('beforeSave', async user => {
            user.password_hash = await bcrypt.hash(user.password, 8);
        })

        return this;
    }
}
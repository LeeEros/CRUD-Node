import Sequelize, { Model } from "sequelize";

export default class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            password: Sequelize.STRING,
            email: Sequelize.STRING,
            date_birth: Sequelize.DATE,
        }, {
            sequelize
        });
        return this;
    }
}
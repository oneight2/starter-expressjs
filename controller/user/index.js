const User = require("../../models").User;
const response = require("../../helpers/response");
const Logger = require("../../middleware/logger");
const Joi = require("joi");

module.exports = {
  findAll: async (req, res) => {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const offset = (page - 1) * limit;
    try {
      const data = await User.findAndCountAll({
        limit,
        offset,
        logging: (sql, queryObject) => {
          Logger.info(sql);
        },
      });
      response.success(
        res,
        data.rows,
        "get data all users",
        page,
        limit,
        data.count
      );
    } catch (error) {
      response.badrequest(res, error.message);
      Logger.error(error);
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await User.findByPk(id);
      if (data) {
        return response.success(
          res,
          data,
          "Success get data user",
          null,
          null,
          null
        );
      }
      response.badrequest(res, `User with id ${id} is not found`);
    } catch (error) {
      response.badrequest(res, err.message);
      Logger.error(error);
    }
  },
};

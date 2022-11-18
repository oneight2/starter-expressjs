const Pokemon = require("../models").Pokemon;
const response = require("../helpers/response");
const Joi = require("joi");

module.exports = {
  findAll: async (req, res) => {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const offset = (page - 1) * limit;
    try {
      const data = await Pokemon.findAndCountAll({
        limit,
        offset,
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
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await Pokemon.findByPk(id);
      if (data) {
        return response.success(
          res,
          data,
          "Success get data pokemon",
          null,
          null,
          null
        );
      }
      response.badrequest(res, `Pokemon with id ${id} is not found`);
    } catch (error) {
      response.badrequest(res, err.message);
    }
  },
};

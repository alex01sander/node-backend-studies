const AppError = require("../../errors/AppError");
const CategoryRepository = require("../repositories/CategoryRepository");
const CategoryService = require("../service/CategoryService");

class CategoryController {
    async index(req, res) {
        const categories = await CategoryRepository.findAll();
        res.json(categories);
    }

    async store(req, res) {
        const { name } = req.body;

        const category = await CategoryService.createCategory(name);
        return res.status(201).json(category);
    }

    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const category = await CategoryService.updateCategory(id, name);
        return res.status(200).json(category);
    }

    async delete(req, res) {
        const { id } = req.params;
        await CategoryService.deleteCategory(id);
        res.sendStatus(204);
    }
}

module.exports = new CategoryController();

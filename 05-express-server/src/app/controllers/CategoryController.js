const AppError = require("../../errors/AppError");
const CategoryRepository = require("../repositories/CategoryRepository");
class CategoryController {
    async index(req, res) {
        const categories = await CategoryRepository.findAll();
        res.json(categories);
    }

    async store(req, res) {
        const { name } = req.body;
        if (!name) {
            throw new AppError("Name is required", 400);
        }
        const category = await CategoryRepository.create({ name });
        res.json(category);
    }

    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const categoryExists = await CategoryRepository.findById(id);
        if (!name) {
            throw new AppError("Name is required", 400);
        }
        if (!categoryExists) {
            throw new AppError("Category not found", 404);
        }
        const category = await CategoryRepository.update(id, { name });
        res.json(category);
    }

    async delete(req, res) {
        const { id } = req.params;
        const categoryExists = await CategoryRepository.findById(id);
        if (!categoryExists) {
            throw new AppError("Category not found", 404);
        }
        await CategoryRepository.delete(id);
        res.sendStatus(204);
    }
}

module.exports = new CategoryController();

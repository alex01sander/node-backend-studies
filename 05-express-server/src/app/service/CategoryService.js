const CategoryRepository = require("../repositories/CategoryRepository");
const AppError = require("../../errors/AppError");
class CategoryService {
    async createCategory(name) {
        if (!name) {
            throw new AppError("Name is required", 400);
        }
        const category = await CategoryRepository.create({ name });
        return category;
    }

    async updateCategory(id, name) {
        if (!name) {
            throw new AppError("Name is required", 400);
        }
        const categoryExists = await CategoryRepository.findById(id);

        if (!categoryExists) {
            throw new AppError("Category not found", 404);
        }
        const category = await CategoryRepository.update(id, { name });
        return category;
    }

    async deleteCategory(id) {
        const categoryExists = await CategoryRepository.findById(id);
        if (!categoryExists) {
            throw new AppError("Category not found", 404);
        }
        await CategoryRepository.delete(id);
        return;
    }
}

module.exports = new CategoryService();

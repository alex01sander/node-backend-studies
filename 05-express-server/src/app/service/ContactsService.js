const ContactsRepository = require("../repositories/ContactsRepository");

const AppError = require("../../errors/AppError");

class ContactsService {
    async findContactById(id) {
        const contact = await ContactsRepository.findById(id);

        if (!contact) {
            throw new AppError("Contact not found", 404);
        }
        return contact;
    }

    async createContact({ name, email, phone, category_id }) {
        if (!name) throw new AppError("Name is required", 400);

        const contactExists = await ContactsRepository.findByEmail(email);
        if (contactExists) {
            throw new AppError("This e-mail is already in use", 400);
        }

        if (category_id) {
            const category = await CategoryRepository.findById(category_id);
            if (!category) throw new AppError("Category not found", 404);
        }

        return await ContactsRepository.create({
            name,
            email,
            phone,
            category_id,
        });
    }

    async updateContact(id, { name, email, phone, category_id }) {
        const contactExists = await ContactsRepository.findById(id);
        if (!contactExists) {
            throw new AppError("Contact not found", 404);
        }

        if (!name) throw new AppError("Name is required", 400);

        if (email) {
            const contactByEmail = await ContactsRepository.findByEmail(email);
            if (contactByEmail && contactByEmail.id !== id) {
                throw new AppError("This e-mail is already in use", 400);
            }
        }

        return await ContactsRepository.update(id, {
            name,
            email,
            phone,
            category_id,
        });
    }

    async deleteContact(id) {
        const contactExists = await ContactsRepository.findById(id);
        if (!contactExists) {
            throw new AppError("Contact not found", 404);
        }
        await ContactsRepository.delete(id);
    }
}

module.exports = new ContactsService();

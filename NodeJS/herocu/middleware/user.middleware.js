const { errorCodesEnum } = require('../constant');
const ErrorHandler = require('../message/ErrorHandler');
const { NOT_VALID_USER, RECORD_NOT_FOUND } = require('../message/error.messages');
const { userService } = require('../service');
const { userValidator } = require('../validators');

module.exports = {
    checkIsUserIdValid: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { error } = userValidator.idUserValidator.validate(id);
            const user = await userService.findUserById(id);

            if (error) {
                throw new ErrorHandler(errorCodesEnum.BAD_REQUEST, NOT_VALID_USER.customCode, error.details[0].message);
            }
            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserValid: (req, res, next) => {
        try {
            const { error } = userValidator.createUserValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(errorCodesEnum.BAD_REQUEST, NOT_VALID_USER.customCode, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserPresent: async (req, res, next) => {
        try {
            const { email } = req.body;
            const userByEmail = await userService.findOneUser(email);
            if (userByEmail) {
                throw new ErrorHandler(errorCodesEnum.BAD_REQUEST, RECORD_NOT_FOUND.customCode);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserUpdateValid: (req, res, next) => {
        try {
            const { error } = userValidator.updateUserValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(errorCodesEnum.BAD_REQUEST, NOT_VALID_USER.customCode, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};

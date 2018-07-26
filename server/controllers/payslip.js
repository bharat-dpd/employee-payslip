const helpers = require('./../helpers');

const handler = (req, res, next) => {
    const validated = helpers.validatePayload(req.body);
    if (validated.isError) {
        return next({
            status: 400,
            message: validated.message
        })
    } else {
        const calculatedPayslip = helpers.calculatePayslip(req.body);
        return res.status(helpers.errorCodes.ok).send(calculatedPayslip);
    }
}

module.exports = {
    handler
};
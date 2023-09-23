/**
 * @callback mapRequestToParams
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

/**
 * 
 * @param {function} controller 
 * @param {function} mapRequestToParams 
 * @returns {import('express').RequestHandler}
 */
module.exports.controllerHandler = (controller, mapRequestToParams) => async (req, res, next) => {

    const {query, params, body} = mapRequestToParams ? mapRequestToParams(req, res, next) : [];
  
    try {
        const result = await Promise.resolve(controller(res,query, params, body));
        if(!res.headersSent){
            if(result != null) {
            return result
            }
            return res.sendStatus(204);
        }
    } catch (error) {
            next(error);        
    }
    return null
}
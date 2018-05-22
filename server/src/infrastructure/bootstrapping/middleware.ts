import { NextFunction, Request, Response } from "express";

export function reqMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log(`
    ----------------------------------
    REQUEST MIDDLEWARE
    HTTP ${req.method} ${req.url}
    ----------------------------------
    `);
    next();
}

/**
 * Middleware для логирования ошибок к консоль
 *
 * @export
 * @param {Error} error
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function exceptionLoggerMiddleware(error: Error, req: Request, res: Response, next: NextFunction): void {

    console.error(`
    ----------------------------------
    EXCEPTION MIDDLEWARE
    HTTP ${req.method} ${req.url}
    ${error.message}
    ${error.stack}
    ----------------------------------
    `);

    // Hide stack from client for security reasons
    const e = { error: "Internal server error" };
    res.status(500).json(e);

}

/**
 * Middleware для проверки аутентификации
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {void}
 */
export function ensureAuthenticated(req: Request, res: Response, next: NextFunction): void {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

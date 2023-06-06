//imports app
import winston from "winston";

//niveles propios

const customLevelsOptions = {
    levels: {
        fatal:0,
        error:1,
        warning:2,
        info:3,
        http:4,
        debug:4,
    },
    colors: {
        fatal: "red",
        error: "orange",
        warning: "orange",
        info: "blue",
        http:"cyan",
        debug:"white",
    }
}

const logger = winston.createLogger({
    levels: customLevelsOptions.levels,
    transports:[
        new winston.transports.Console({
            level: "http",
            format: winston.format.combine(
                winston.format.colorize([colors: customLevelsOptions.colors]),
                winston.format.simple()
            )
        }),
    ]
});

export const addLogger = (req,res,next) =>{
    req.logger = logger;
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString}`);
    next();
}
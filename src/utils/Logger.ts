import signale, { Signale } from 'signale'

interface ILogger {

    start(message: string): void
    watch(message: string): void
    success(message: string): void
    fatal(message: string): void
    msgEvent(message: string): void

}

export abstract class ALogger implements ILogger {

    abstract start(message: string): void 
    abstract watch(message: string): void 
    abstract success(message: string): void
    abstract fatal(message: string): void 
    abstract msgEvent(message: string): void 

}

export class SignaleHandler extends ALogger {

    config = { displayTimestamp: true, displayDate: true }

    signale = signale.config(this.config)

    start(message: string): void {
        return signale.start(message)
    }

    watch(message: string): void {

        const options = {
            types: {
              system: {               
                badge: '*',
                color: 'yellow',
                label: 'working',
              },
            }
        };

        const custom = new Signale(options);

        custom.config(this.config);

        return custom.system(message);

    }

    success(message: string): void {
        return signale.success(message)
    }

    fatal(message: string): void {
        return signale.fatal(message) 
    }  

    request(message: string): void {

        const options = {
            types: {
              remind: {
                badge: '-',
                color: 'white',
                label: 'request',
              },
            }
        };

        const custom = new Signale(options);

        custom.config(this.config);

        return custom.remind(message);

    }  

    system(message: string): void {

        const options = {
            types: {
              system: {               
                badge: '⏩',
                color: 'blue',
                label: 'system',
              },
            }
        };

        const custom = new Signale(options);

        custom.config(this.config);

        return custom.system(message);

    }  

    mail(message: string): void {

        const options = {
            types: {
              mail: {               
                badge: '✉',
                color: 'blue',
                label: 'mail',
              },
            }
        };

        const custom = new Signale(options);

        custom.config(this.config);

        return custom.mail(message);

    }  

    msgEvent(message: string): void {

        const options = {
            types: {
              mail: {               
                badge: '->',
                color: 'cyan',
                label: 'event',
              },
            }
        };

        const custom = new Signale(options);

        custom.config(this.config);

        return custom.mail(message);

    }  

    audit(message: string): void {

        const options = {
            types: {
              mail: {               
                badge: '+',
                color: 'blue',
                label: 'audit',
              },
            }
        };

        const custom = new Signale(options);

        custom.config(this.config);

        return custom.mail(message);

    }  

}


class Logger extends SignaleHandler {

}

export const logger = new Logger()
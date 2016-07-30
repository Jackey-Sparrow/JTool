((global, factory)=> {
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get logger.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        module.exports = global.document ?
            factory( global, true ) :
            ( w )=> {
                if ( !w.document ) {
                    throw new Error( "Logger requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }
})(typeof window !== "undefined" ? window : this, ( window, noGlobal )=>{

    const send = Symbol('send');
    const handle = Symbol('handle');
    let enableRemoteSend = true;


    class Logger {
        constructor() {
            this.url = '';
        }

        log() {
            this[handle]('log');
        }

        warn() {
        }

        [send](fn) {

        }

        [handle](fn) {
            if (enableRemoteSend) {
                this[send](fn);
            }

            console.log(fn);
        }


        closeRemoteSend() {
            enableRemoteSend = false;
        }

        destroy() {
            this[handle] = ()=> {
            }
        }

    }

    let logger = new Logger();

    if ( !noGlobal ) {
        window.logger = logger;
    }

    return logger;
});
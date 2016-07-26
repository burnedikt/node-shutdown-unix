# node-shutdown-unix

> Shutdown / Reboot your machine running Unix from within Node.JS

## Install

```
$ npm install --save node-shutdown-unix
```

## Usage

```js
const shutDownUnix = require('node-shutdown-unix');

shutDownUnix.shutdown();
//=> shuts down the whole machine instantly

shutDownUnix.shutdown('+20');
//=> shuts down the whole machine in 20 minutes

shutDownUnix.shutdown('0800');
//=> shuts down the whole machine at 08:00 am

shutDownUnix.shutdown('1100', 'The system will shut down in at 11:00 am');
//=> shuts down the whole machine in 20 seconds, displaying a message until that time

shutDownUnix.reboot();
//=> reboots the whole machine instantly

shutDownUnix.reboot('+10');
//=> reboots the whole machine in 10 minutes

shutDownUnix.reboot('1100', 'The system will reboot in at 11:00 am');
//=> reboots the whole machine at 11:00 am

shutDownUnix.abort();
//=> aborts a reboot / shutdown procedure
```

## Documentation

Please also take a look at `man shutdown`, since this module is just a wrapper around the Unix `shutdown` command (which may vary slightly).

### shutdown([time, message])

Shuts down the local computer.

* `time` {String} the time at which shutdown will bring the system down and may be the word now (indicating an immediate shutdown) or specify a future time in one of two formats: +number, or yymmddhhmm, where the year, month, and day may be defaulted to the current system values. The first form brings the system down in number minutes and the second at the absolute time specified.
* `message` {String} warning message that is broadcast to users currently logged into the system.

### reboot([time, message])

Reboots after shutdown.

* `time` {String} the time at which shutdown will bring the system down and may be the word now (indicating an immediate shutdown) or specify a future time in one of two formats: +number, or yymmddhhmm, where the year, month, and day may be defaulted to the current system values. The first form brings the system down in number minutes and the second at the absolute time specified.
* `message` {String} warning message that is broadcast to users currently logged into the system.

### abort()

* `message` {String} warning message that is broadcast to users currently logged into the system.

Aborts shutdown / logoff / reboot.

## Similar Projects

* [node-shutdown-windows](https://github.com/burnedikt/node-shutdown-windows) - Shutdown Module for Windows

## License

ISC © [Benedikt Reiser](http://benedikt-reiser.de)

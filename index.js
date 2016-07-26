// see http://linux.die.net/man/8/shutdown for details
// we need the ability to spawn processes
const spawn = require('child_process').spawn;
// shutdown command to be executed
const shutdownCmd = 'shutdown';

/**
 * Shuts down the local computer
 *
 * @param {String} time Time is the time at which shutdown will bring the system down and may be the word now (indicating an immediate shutdown) or specify a future time in one of two formats: +number, or yymmddhhmm, where the year, month, and day may be defaulted to the current system values. The first form brings the system down in number minutes and the second at the absolute time specified.
 * @param {String} message Specifies a message to be displayed in the Message area of the System Shutdown window. You can use a maximum of 127 characters
 * @returns {ChildProcess}
 */
exports.shutdown = function (time, message) {
  // build argumnets
  let args = ['-P'];
  if (time) {
    args.push(time);
  } else {
    args.push('now');
  }
  if (message) {
    args.push(`"${message}"`);
  }
  // execute the shutdown command
  return spawn(shutdownCmd, args);
};

/**
 * Reboots after shutdown
 *
 * @param {String} time Time is the time at which shutdown will bring the system down and may be the word now (indicating an immediate shutdown) or specify a future time in one of two formats: +number, or yymmddhhmm, where the year, month, and day may be defaulted to the current system values. The first form brings the system down in number minutes and the second at the absolute time specified.
 * @param {String} message Specifies a message to be displayed in the Message area of the System Shutdown window. You can use a maximum of 127 characters
 * @returns {ChildProcess}
 */
exports.reboot = function (time, message) {
  // build argumnets
  let args = ['-r'];
  if (time) {
    args.push(time);
  } else {
    args.push('now');
  }
  if (message) {
    args.push(`"${message}"`);
  }
  // execute the shutdown command
  return spawn(shutdownCmd, args);
};

/**
 * Cancels a running shutdown
 *
 * @param {String} message Specifies a message to be displayed in the Message area of the System Shutdown window. You can use a maximum of 127 characters
 * @returns {ChildProcess}
 */
exports.abort = function (message) {
  // build argumnets
  let args = ['-c'];
  if (message) {
    args.push(`"${message}"`);
  }
  return spawn(shutdownCmd, args);
};

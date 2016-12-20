'use strict';

const uuid = require('node-uuid').v4();
const logger = require('weplay-common').logger('weplay-relay');

const redis = require('weplay-common').redis();
const sub = require('weplay-common').redis();
const io = require('socket.io-emitter')(redis);


const keysLookup = [
    'right',
    'left',
    'up',
    'down',
    'a',
    'b',
    'select',
    'start'
];

sub.subscribe('weplay:move-last:emu');
sub.on('message', (channel, move) => {
    if ('weplay:move-last:emu' != channel) return;
    const data = keysLookup[move.toString()];
    logger.info('weplay:move-last:emu',{emit:'emumove', data: data});
    io.emit('emumove', data);
});


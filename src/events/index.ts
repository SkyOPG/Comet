import { Event } from '../utils/index.js';
import ready from './ready.js';
import message from './message.js';
import interaction from './interaction.js';

export default [
    ready,
    message,
    interaction
] as Event[];
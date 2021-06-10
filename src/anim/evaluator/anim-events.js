/**
 * @class
 * @name AnimEvents
 * @classdesc AnimEvents stores a sorted array of animation events which should fire sequentially during the playback of an pc.AnimTrack.
 * @description Create a new collection of animation events.
 * - @param {object[]}  events- An array of animation events.
 * @example
 * const events = new pc.AnimEvents([
 *     {
 *         name: 'my_event',
 *         time: 1.3 // given in seconds,
 *         my_property: 'test', // any additional properties added here will be available in the EventHandler callback's event object
 *         my_other_property: true
 *     }
 * ]);
 * animTrack.events = events;
 */
class AnimEvents {
    constructor(events) {
        this._events = [...events];
        this._events.sort((a, b) => a.time - b.time);
    }

    get events() {
        return this._events;
    }
}

export { AnimEvents };

import LiveAutoShutdownConfiguration from './LiveAutoShutdownConfiguration';

/**
 * The auto shutdown configuration to set on a running Live Encoding. Any auto shutdown configuration the encoding currently has is overwritten.  Every timer that is omitted or `null` is disarmed. An empty object disarms all timers, so always send the complete configuration the encoding should run with, including the values that should stay unchanged. 
 * @export
 * @class LiveAutoShutdownConfigurationUpdateRequest
 */
export class LiveAutoShutdownConfigurationUpdateRequest extends LiveAutoShutdownConfiguration {
  constructor(obj?: Partial<LiveAutoShutdownConfigurationUpdateRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default LiveAutoShutdownConfigurationUpdateRequest;


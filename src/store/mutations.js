import {SET_TAG_MESSAGE} from './constants';

export default {
    [SET_TAG_MESSAGE] (state, tagMessage) {
        state.tagMessage = tagMessage;
    }
}
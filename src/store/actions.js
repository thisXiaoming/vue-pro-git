import {
    SET_TAG_MESSAGE
} from './constants'

export default {
    setTagMessage: ({commit}, tagMessage) => {
        commit(SET_TAG_MESSAGE, tagMessage)
    }
}
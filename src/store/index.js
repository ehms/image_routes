import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        videos: [
            {src:'@/assets/one.mp4'},
            {src:'@/assets/two.mp4'},
            {src:'@/assets/three.mp4'},
            {src:'@/assets/four.mp4'},
        ]
    }
})



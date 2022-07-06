// import moment from "moment"

import moment from "moment"  

const state = {
    days: [],
}

const getters = {
    daysSelected: function (state) {
        return state.days
    },
}

const mutations = {
    setDays(state,payload) {
        let startDate = moment(payload.toISOString()).subtract(2, "days")
        let endDate = moment(payload.toISOString()).add(2, "days")
        state.days=[]
        while (startDate <= endDate) {
            state.days.push(startDate);
            startDate = startDate.clone().add(1, "days");
        }
    },
}

const actions = {
    setDaysAction(context,payload) {
        context.commit('setDays',payload)
    },
}



export default {
    state,
    getters,
    actions,
    mutations
}

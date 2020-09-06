const actions = {
  setQrVisibal: ({commit}, qrVisibal) => {
    return commit('SET_QRVISIBAL' ,qrVisibal)
  },
  setCountryCode: ({commit}, countryCode) => {
    return commit('SET_COUNTRYCODE' ,countryCode)
  },
  setTitleBtnLeft: ({commit}, titleBtnLeft) => {
    return commit('SET_TITLEBTNLEFT' ,titleBtnLeft)
  },
  setTitleBtnRight: ({commit}, titleBtnRight) => {
    return commit('SET_TITLEBTNRIGHT' ,titleBtnRight)
  }
}

export default actions

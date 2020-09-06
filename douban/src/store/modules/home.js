const stores ={
  state: {
    qrVisibal: true,
    countryCode: '+86',
    titleBtnLeft: true,
    titleBtnRight: false
  },
  mutations: {
    'SET_QRVISIBAL': (state, qrVisibal) => {
      state.qrVisibal = qrVisibal
    },
    'SET_COUNTRYCODE': (state, countryCode) => {
      state.countryCode = countryCode
    },
    'SET_TITLEBTNLEFT': (state, titleBtnLeft) => {
      state.titleBtnLeft = titleBtnLeft
    },
    'SET_TITLEBTNRIGHT': (state, titleBtnRight) => {
      state.titleBtnRight = titleBtnRight
    }
  }
}

export default stores

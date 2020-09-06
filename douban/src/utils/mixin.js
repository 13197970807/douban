import { mapGetters, mapActions } from 'vuex'

export const homeMixins = {
  computed: {
    ...mapGetters([
      'qrVisibal',
      'countryCode',
      'titleBtnLeft',
      'titleBtnRight'
    ])
  },
  methods: {
    ...mapActions([
      'setQrVisibal',
      'setCountryCode',
      'setTitleBtnLeft',
      'setTitleBtnRight'
    ])
  }
}

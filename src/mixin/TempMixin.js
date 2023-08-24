const tempMixin = {
    data () {
        return {
            isCelsius: true
        }
    },
    methods: {
        tempClick() {
            this.isCelsius = !this.isCelsius
        }
    }
}

export default tempMixin
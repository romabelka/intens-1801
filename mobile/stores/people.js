import apiService from '../services/api'

export default function createPeopleStore() {

    return {
        list: [],
        loading: false,
        subscribeForPeople() {
            apiService.onPeopleChange((people) => {
                this.list = people
            })
        }
/*
        async fetchPeople() {
            this.loading = true
            this.list = await apiService.fetchPeople()
            this.loading = false
        }
*/
    }
}

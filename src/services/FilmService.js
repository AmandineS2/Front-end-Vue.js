import { api } from '@/services/api.js'

export default {
    search (title) {
        return api ('/api/movies' + title, {
         method: 'GET'
        })
    }
}

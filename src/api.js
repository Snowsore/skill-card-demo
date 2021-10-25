// API

export default {
    async fetchSkills(data) {
        var res = await fetch('/skills', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        var json = await res.json()
        return json
    },
    async postAssess(data) {
        var res = await fetch('/assess_candidate', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        var json = await res.json()
        return json
    }
}
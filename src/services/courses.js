const URL = "http://localhost:3001"

const fetchCourses = async () => {
    const response = await fetch(`${URL}/courses`)
    return await response.json()
}

module.exports = {
    fetchCourses
}

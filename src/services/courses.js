const baseURL = "http://localhost:3001"

const fetchCourses = async () => {
    const response = await fetch(`${baseURL}/courses`)
    return await response.json()
}

module.exports = {
    fetchCourses
}

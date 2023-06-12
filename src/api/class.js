export const getClasses = async email => {
    const response = await fetch(`http://localhost:5000/school//${email}`)
    const data = await response.json()
    return data
  }
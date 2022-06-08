export const generateId = () => {
    const random = Math.random().toString(36).slice(2)
    const date = Date.now().toString(36)
    return date + random
} 

export const formatDate = date => {
    const newDate = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return newDate.toLocaleDateString('es-ES', options)
} 
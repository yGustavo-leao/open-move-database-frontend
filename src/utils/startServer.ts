export const startServer = () => {
    return new Promise((resolve, reject) => {
        const checkServerStatus = async () => {
            try {
                const response = await fetch(`https://open-move-database-backend.onrender.com/api/search?movie=`)
                if (response.ok) resolve(true)
                else throw new Error('Servidor não está ativo')
            } catch (error) {
                setTimeout(checkServerStatus, 3000)
            }
        }
        checkServerStatus()
    })
}
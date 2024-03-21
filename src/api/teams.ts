export async function fetchUsers() {
    try {

        const res = await (await fetch('https://randomuser.me/api/?results=3', { cache: 'no-cache' })).json()
        
        return res;

    } catch (error) {
        console.log(error);
    }
}
import useSWR, { mutate } from 'swr'

const Selections = () => {
    const { data } = useSWR('/api/getUsers', (url) =>
        fetch(url).then((res) => res.json())
    )

    // const fetchUsers = async () => {
    //     const res = await fetch(`./api/getUsers`)
    //     const users = await res.json()
    //     console.log('Test 4', users)
    //     return users
    // } 
    console.log('Babbooey', data.data)

    const UserList = () => {
        const users = data.data
        console.log('Users', users)

        const len = Object.keys(users)
        console.log('Lenght My Dude',len, len.length, len[1])

        let text = ''

        for (let i = 0; i < len.length; i++) {
            text += "<button onClick={onClick} style={{ backgroundColor: color }} className='btn'>" + len[i] + "</button><br />"
        }
        console.log('text', text)

        return text
    }
    console.log('Users',UserList())
    const HereNow = 'Lol'

    return (
        <div>
            {UserList()}  
        </div>
    )
}

export default Selections

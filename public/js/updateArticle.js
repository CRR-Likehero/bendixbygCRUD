import axios from 'axios';

export const updateArticle = async (heading, content) => {

    try {
        const res = await axios ({
            method: 'PATCH',
            url: '/api/crud',
            data: {
                heading: heading,
                content: content
            }
        })

        if (res.data.status === 'succes') {
            alert('Artiklen er blevet opdateret');
            // location.replace('/backend')
        }

    } catch (err) {
        console.log(err)
    }
}
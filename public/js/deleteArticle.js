import axios from 'axios';

export const deleteArticle = async (x) => {

    try {
        const res = await axios ({
            method: 'DELETE',
            url: '/api/crud',
            data: {
                heading: x
            }
        })

        if (res.data.status === 'succes') {
            alert(`${x} er blevet slettet fra hjemmesiden`);
            location.reload();
        }

    } catch (err) {
        console.log(err)
    }
}
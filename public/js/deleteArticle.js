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
            alert(`${x} have succesfully been deleted`);
            location.reload(true);
        }

    } catch (err) {
        console.log(err)
    }
}
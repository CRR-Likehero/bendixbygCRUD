import axios from 'axios';

export const createArticle = async (heading, content, imagecover) => {

    try {
        const res = await axios ({
            method: 'POST',
            url: '/api/crud',
            data: {
                heading: heading,
                content: content,
                imagecover: imagecover
            }
        })

        if (res.data.status === 'succes') {
            alert(`${heading} have succesfully been created`);
            location.reload(true);
        }

    } catch (err) {
        console.log(err)
    }
}
import axios from 'axios';

export const logOut = async () => {

    try {
        const res = await axios ({
            method: 'GET',
            url: '/api/user/logout'
            // http://127.0.0.1:3000
        });

        if(res.data.status === 'succes') {
            alert('Logged out succesfully');
            location.reload(true);
        }

        
    } catch (err) {
        console.log(err)
    }
};

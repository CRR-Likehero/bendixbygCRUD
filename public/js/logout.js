import axios from 'axios';

export const logOut = async () => {

    try {
        const res = await axios ({
            method: 'GET',
            url: '/api/user/logout'
        });

        if(res.data.status === 'succes') {
            alert('Logged ud');
            location.reload();
        }

        
    } catch (err) {
        console.log(err)
    }
};

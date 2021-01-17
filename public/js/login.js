import axios from 'axios';

export const login = async (email, password) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/user/login',
            // http://127.0.0.1:3000
            data: {
                email: email,
                password: password
            }
        });

        if(res.data.data.status === 'succes') {
            alert('Logged in succesfully');
            window.setTimeout( () => {
                location.assign('/secret');
            }, 1000);
        }
        

    } catch (err) {
        alert(err.response.data.error);
    }

};
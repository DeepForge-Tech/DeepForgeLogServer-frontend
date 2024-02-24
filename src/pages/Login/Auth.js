import axios from "axios";

const instance = axios.create({
    withCredentials: true,
})

function Login(data,setIsAuth) {
    const res = instance.post('/api/auth/login', data)
        .then(async (response) => {
            // answer = response.data.message
            console.log(response)
            if (response.statusText == "OK") {
                window.location.href = "/";
                setIsAuth(true);
                console.log(response.data.message);
            }
            else {
                setIsAuth(false);
            }
        });
    // console.log(res.data.message);
    // return answer;
}
export default Login;
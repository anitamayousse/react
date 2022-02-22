import { useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

function Login() {
    const {setAuth , isLogged} = useContext(UserContext);
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit =(data) => {
        setAuth();
        console.log(data);
        //going back to Home
        history.push("/")
    };
    return isLogged ? (
        <div>
            <button className="button" onClick={onSubmit}>Se déconnecter</button>
        </div>
    ) : (
        <div className="bg-poke">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                {...register("username", {
                    required: true,
                    pattern: {
                        value: /[A-Za-z]{15}/,
                        message: 'Maximum 15 characters' 
                        }
                })}
                placeholder="Username"
                type="text"
                className="mb-2"
                />
                <span>{errors.username && errors.username.message}</span>
                <input
                {...register("password", {
                    required: true,
                    pattern: {
                        value: /[A-Za-z]{6}/,
                        message: 'Maximum 6 characters' 
                        }
                })}
                placeholder="Password"
                type="password"
                className="my-2"
                />      
                <span>{errors.password && errors.password.message}</span>

                <input type="submit" />
                <button className="button" type="submit">Se connecter</button>
        </form>
      </div>
    );
}
export default Login;
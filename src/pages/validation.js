const Validation = (values) => {

    let errors = {};

     if(!values.first_name){
         errors.first_name = "Firstname is required";
     }
     if(!values.last_name){
        errors.last_name = "Lastname is required";
    }
    if(!values.password){
        errors.password = "Password is required";
    } else if(values.password.length < 8){
        errors.password = "Password must be atleast 8 characters";
    }
    if(!values.email){
        errors.email = "Email is required";
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid";
    }
    return errors;
}

export default Validation

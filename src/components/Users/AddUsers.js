import React, { useState, Fragment } from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Card from './../UI/Card';
import styling from './AddUsers.module.scss';
import UsersList from './UsersList';
import Wrapper from './../helpers/Wrapper';
const AddUsers = props =>{

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0 ) {
            setError({
                title:"An Error Occured",
                message:"Something went wrong"
            })
            return;
        }

        if(+enteredAge < 1 ) {
            debugger;
            setError({
                title:"Invalid Age",
                message:"Please enter valid age (> 0)"
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredAge); 
        console.log(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }


    const userNameChangeHandler = (event) =>{
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    }

    const errorHandler = () =>{
        setError(null)
    }

    return (
        // <Wrapper>
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styling.input}>
                <form onSubmit={addUserHandler}>
                <div className={styling.formgroup}>
                    <label htmlFor='username'>user Name</label>
                        <input type="text" id="username" value={enteredUserName} onChange={userNameChangeHandler} />
                </div>
                    <div  className={styling.formgroup}>
                        <label htmlFor='age'>Age(In Years)</label>
                        <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />   
                    </div>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
            </Fragment>
        // </Wrapper>
    )
}

export default AddUsers;
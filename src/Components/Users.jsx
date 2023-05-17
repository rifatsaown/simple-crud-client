import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData();
    
    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map((user) => (
                        <div key={user._id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Users;
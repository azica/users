import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Preloader } from "components/Preloader";
import { UserService } from "services/user.service";

const UserPage = () => {
    const { id } = useParams();

    const { isLoading, error, data } = useQuery({
        queryKey: ["user", id],
        queryFn: () => UserService.getUserById(String(id))
    });

    return (
        <div className="container">
            <Preloader isLoading={isLoading}>
                <h2>{data ? (data as User).username : "No user found"}</h2>
            </Preloader>
            {error && <p>Error: {error.message}</p>}
        </div>
    )
}

export default UserPage
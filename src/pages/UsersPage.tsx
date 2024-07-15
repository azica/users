import { ChangeEvent, Fragment, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Users } from "components/Users";
import { Search } from "components/Search";
import { Preloader } from "components/Preloader";

import { useDebounce } from "hooks/useDebounce";
import { UserService } from "services/user.service";

const UsersPage = () => {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 600);
    const { isLoading: isLoadingUsers, error, data } = useQuery({
        queryKey: ["users"],
        queryFn: () => UserService.getUsers()
    });

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);
    };

    const lowerCasedSearch = debouncedSearch.toLowerCase();

    const filteredUsers = data
        ? (data as User[]).filter(user =>
            user.username.toLowerCase().includes(lowerCasedSearch) ||
            user.email.toLowerCase().includes(lowerCasedSearch) ||
            user.phone.toLowerCase().includes(lowerCasedSearch)
        )
        : [];

    return (
        <div className="container">
            <h1>Users</h1>
            <Search search={search} onChange={changeHandler} />
            <Preloader isLoading={isLoadingUsers}>
                <Fragment>
                    {debouncedSearch && filteredUsers.length === 0 ? (
                        <h3>There is no such user!</h3>
                    ) : (
                        <Users list={filteredUsers} />
                    )}
                </Fragment>
            </Preloader>
            {error && <p>Error: {error.message}</p>}
        </div>
    );
};

export default UsersPage;

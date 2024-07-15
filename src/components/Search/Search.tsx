import { SearchIcon } from "assets/icons";

import styles from "./Search.module.scss";
import { ChangeEvent } from "react";

interface SearchProps {
    search: string;
    onChange: (val: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ search, onChange }: SearchProps) => {
    return (
        <div className={styles.search}>
            <input
                type="search"
                placeholder="Search users..."
                value={search}
                onChange={onChange}
                className={styles.input}
            />
            <SearchIcon />
        </div>
    )
}


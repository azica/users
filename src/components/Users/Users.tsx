import { FC } from "react"
import { UserCard } from "components/UserCard"

import styles from "./Users.module.scss";

export const Users: FC<{ list: User[] }> = ({ list }) => {
    return (
        <div className={styles.wrap}>
            {list?.map(user => (
                <UserCard key={user.id} {...user} />
            ))}
        </div>
    )
}


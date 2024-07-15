import { Link } from "react-router-dom";

import styles from "./UserCard.module.scss";

export const UserCard = ({ username, email, phone, id }: User) => {
    return (
        <div className={styles.card}>
            <h6 className={styles.title}>
                <Link to={`/${id}`}>
                    {username}
                </Link>
            </h6>
            <p className={styles.email}>Email: {email}</p>
            <p className={styles.phone}>Phone: {phone}</p>
        </div>
    )
}

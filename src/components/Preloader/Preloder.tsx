import { ReactNode } from "react";

import { Loader } from "components/Loader";

import styles from "./Preloader.module.scss";

interface PreloaderProps {
    children: ReactNode;
    isLoading: boolean;
}

export const Preloader = ({ children, isLoading }: PreloaderProps) => {
    return (
        <div className={styles.preloader}>
            {
                isLoading ? <Loader /> : (children || null)
            }
        </div>
    )
}


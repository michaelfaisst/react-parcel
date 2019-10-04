import React from "react";
import styles from "./app.module.scss";

import ReactIcon from "../assets/images/react.svg";
import ParcelIcon from "../assets/images/parcel.png";

const App = () => {
    return (
        <div className={styles.container}>
            <h1>React Parcel</h1>
            <p>This is a super fancy react parcel starter template</p>
            <div className={styles.imageContainer}>
                <img src={ReactIcon} />
                <img src={ParcelIcon} />
            </div>
        </div>
    );
};

export default App;

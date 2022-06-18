import RightSidebar from "./right-sidebar/right-sidebar";
import Header from "./header/header";
import Footer from "./footer/footer";
import styles from "./layout.module.css";

const Wrapper = (props) => {
    const { children } = props;
    return (
        <div className={styles.layout}>
            <div className={styles.leftSide}>
                <Header />
                <div className={styles.content}>
                    {children}
                </div>
                <Footer />
            </div>
            <RightSidebar>
                <p>
                    Press the &quot;add card&quot; button to add the new Card.
                    <br />
                    Use the &quot;sort cards&quot; button to sort the Cards by the increase.
                    <br />
                    Press an X icon on the top right to delete them 
                </p>
            </RightSidebar>
        </div>
    )
};

export default Wrapper
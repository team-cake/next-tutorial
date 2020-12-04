import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
	return <div className={styles.layoutcontainer}>{children}</div>;
}

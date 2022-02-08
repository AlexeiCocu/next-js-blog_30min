import {PostProps} from "./Post.props";
import styles from './Post.module.css'

export default function Post({children}: PostProps): JSX.Element{
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
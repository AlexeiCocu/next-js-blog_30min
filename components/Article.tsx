import styles from './Articlle.module.css'
import {ArticleProps} from "./Article.props";


export default function Article ( {children}: ArticleProps ): JSX.Element {
    return (
        <div className={styles.article}>
            {children}
        </div>
    )
}
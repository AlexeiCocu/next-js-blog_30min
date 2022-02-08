import {GridProps} from "./Grid.props";
import styles from './Grid.module.css'

export default function Grid({children}: GridProps): JSX.Element{
    return (
        <div className={styles.grid}>
            {children}
        </div>
    )
}
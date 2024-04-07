import { FC } from 'react'
import styles from './404.module.scss'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../../shared/PrimaryButton/PrimaryButton'

export const Error404: FC = () => {
  return (
    <div className={styles.error}>
      <div className="container">
        <div className={styles.error__inner}>
          <h1 className={styles.error__title}>404</h1>
          <h1 className={styles.error__text}>Такой страницы нет :(</h1>
          <Link to={'/'} className={styles.footer__link}>
            <PrimaryButton text="Перейти на главную" />
          </Link>
        </div>
      </div>
    </div>
  )
}

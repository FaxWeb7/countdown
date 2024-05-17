import { FC } from 'react'
import styles from './Footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <h1 className={styles.footer__text}>
            купить{' '}
            <a href="https://www.tinkoff.ru/invest/stocks/TCSG/" target="_blank" className={styles.footer__link}>
              акции тинькофф
            </a>
          </h1>
          <h1 className={styles.footer__author}>
            Автор
            <a href="https://t.me/aff1ll" target="_blank" className={styles.footer__link}>
              @aff1ll
            </a>
          </h1>
        </div>
      </div>
    </footer>
  )
}

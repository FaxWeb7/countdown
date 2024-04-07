import { FC, useEffect, useState } from 'react'
import styles from './Timer.module.scss'
import { APP_URL } from '../../../../constants/constants'

export interface ITimerProps {
  targetTime: Date
}

export const Timer: FC<ITimerProps> = ({ targetTime }: ITimerProps) => {
  const [time, setTime] = useState<number>(targetTime.getTime() - new Date().getTime())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime === 0) {
          clearInterval(timer)
          return 0
        } else {
          return prevTime - 1000
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.timer}>
      <div className={styles.timer__data}>
        {Math.floor(time / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, '0')}
        :
        {Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          .toString()
          .padStart(2, '0')}
        :
        {Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, '0')}
        :
        {Math.floor((time % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, '0')}
      </div>
      <img src={`${APP_URL}/bomb.png`} alt="bomb" className={styles.timer__img} />
    </div>
  )
}

import { FC, useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useQuery } from '../../../hooks/useQuery'
import { ICounterItem } from '../../../interfaces/interfaces'
import { counterList } from './CounterList'
import { Link } from 'react-router-dom'
import { Timer } from './Timer/Timer'
import styles from './Home.module.scss'

export const Home: FC = () => {
  const [counterItem, setCounterItem] = useState<ICounterItem>(counterList[0])
  const [targetTime, setTargetTime] = useState<Date>(counterList[0].deadLine)
  const query = useQuery()

  useEffect(() => {
    const selectedItem = query.get('selected_item')
    counterList.forEach(item => {
      if (item.query === selectedItem) {
        setCounterItem(item)
        setTargetTime(item.deadLine)
      }
    })
  }, [query])

  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.home__inner}>
          <div className={styles.home__info}>
            {counterItem.id !== 0 && (
              <Link to={`/?selected_item=${counterList[counterItem.id - 1].query}`}>
                <FaArrowLeftLong className={styles['home__info-icon']} />
              </Link>
            )}
            <h1 className={styles['home__info-title']}>{counterItem.title}</h1>
            {counterItem.id !== counterList.length - 1 && (
              <Link to={`/?selected_item=${counterList[counterItem.id + 1].query}`}>
                <FaArrowRightLong className={styles['home__info-icon']} />
              </Link>
            )}
          </div>
          <div className="home__timer">
            <Timer targetTime={targetTime} key={targetTime.getTime()} />
          </div>
        </div>
      </div>
    </div>
  )
}

import { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import { useAppContext } from 'context/AppContext'
import 'components/Layout/Footer/Footer.scss'

const Footer = () => {
  const { currentPage, resultsInfo, setCurrentPage } = useAppContext()
  const [currentPageStatus, setCurrentPageStatus] = useState(currentPage)
  const [fromToItem, setFromToItem] = useState({
    from: 1,
    to: 12,
  })

  const handleCurrentPage = useCallback(
    (action?: string) => {
      if (action === 'previous' && currentPage !== 1)
        return setCurrentPage(currentPage - 1)
      else if (currentPage !== resultsInfo?.totalPages)
        return setCurrentPage(currentPage + 1)
    },
    [currentPage, resultsInfo]
  )

  const calculateItemNumber = useCallback(() => {
    setFromToItem((prev) => {
      const { from, to } = prev
      let fromNumber = from
      let toNumber = to
      if (currentPageStatus > currentPage) {
        fromNumber = from - 12
        toNumber = to - 12
      } else {
        fromNumber = from + 12
        toNumber = to + 12
      }
      setCurrentPageStatus(currentPage)
      return {
        from: currentPage === 1 ? currentPage : fromNumber,
        to: currentPage === 1 ? 12 : toNumber,
      }
    })
  }, [currentPage, currentPageStatus])

  useEffect(() => {
    calculateItemNumber()
  }, [currentPage])

  return (
    <footer className="footer">
      <div className="footer__contents">
        <div className="footer__contents--info">
          <div>
            <FontAwesomeIcon
              onClick={() => handleCurrentPage('previous')}
              icon={faCaretLeft}
              className={`set-page${currentPage === 1 ? '--disabled' : ''}`}
            />
          </div>
          <div>
            {fromToItem.from} to {fromToItem.to} of {resultsInfo?.totalRecords}
          </div>
          <div>
            <FontAwesomeIcon
              onClick={() => handleCurrentPage()}
              icon={faCaretRight}
              className={`set-page${
                currentPage === resultsInfo?.totalPages ? '--disabled' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { useState } from 'react'
import { HelpArticleMenu } from '../data/HelpArticles'
import HelpCenterDropdownButton from './HelpCenterDropdownButton'


const HelpCenterArticlesMenu = ({article, HigherOrderComponent, Component}) => {
  const [ isMenuActive, setIsMenuActive ] = useState(false)
  return (
    <div className='pl-5'>
      <HelpCenterDropdownButton isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} >{article?.category}</HelpCenterDropdownButton>
      <div className='pl-4 my-2'>
        {
          isMenuActive && article?.links?.map((el, index) => (
            HigherOrderComponent(Component, index, el)     
          ))
        }
      </div>
    </div>
  )
}

export default HelpCenterArticlesMenu
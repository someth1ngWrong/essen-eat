import React from "react"
import A_TextTitle from './A_TextTitle'
import A_TextCaption from './A_TextCaption'

class M_Sort extends React.Component {
  render () {
    return (
    <div>
    	<A_TextTitle title="Рецепты"/>
    	<div>
    		<A_TextCaption text="Сортировать:"/>
    		<A_TextCaption text="По времени приготовления"/>    		
    	</div>

    </div>
    );
  }
}

export default M_Sort

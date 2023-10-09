import React from 'react'

const test = () => {
    const achList=[["1","Achievement 1"],["2","Achievement 2"],["3","Achievement 3"],["4","Achievement 4"]]
    const achivementList = (achievement) => 
`<li class="achievement-item" >
        ${achievement[1]}
</li>`
  return (
    <div>
  ${achList.map(achivementList).join('')}
  <style jsx>{`
  <style>
  div {
      font-family: Arial, sans-serif;
      padding: 20px;
  }
  .achievement-item {
    upper-roman
  }
</style>`}</style>
  </div>


  )
}

export default test
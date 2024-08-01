// import React, { memo } from 'react'

// const Chaild = ({handleCallback}) => {
//     console.log("Child loader");
//   return (
//     <div>
//         <button onClick={handleCallback}>incgremnt child</button>
//       Child
//     </div>
//   )
// }

// export default memo(Chaild)


import React, { memo } from 'react'

const Chaild = ({handleCallback}) => {
  console.log("child loader");
  return (
    <div>
      <button onClick={handleCallback}>derement</button>
    </div>
  )
}

export default memo(Chaild)

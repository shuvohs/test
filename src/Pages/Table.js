import React from 'react'

const Table = () => {
  return (
    <div className='p-6'>
      <table>
        <tbody>
        <th className="bg-slate-600">Name</th>
        <th className="bg-slate-600">Title</th>
        <th className="bg-slate-600">Email</th>
            <tr className='odd:bg-green-300 even:bg-amber-300'>
                
                <td  className='px-6'>Kristin</td>
                <td  className='px-6'>Product Associate</td>
                <td  className='px-6'>kristin@gamil.com</td>
            </tr>
            <tr className='odd:bg-green-300 even:bg-amber-300'>
                
                <td  className='px-6'>Kristin</td>
                <td  className='px-6'>Product Associate</td>
                <td  className='px-6'>kristin@gamil.com</td>
            </tr>
            <tr className='odd:bg-green-300 even:bg-amber-300'>
                
                <td  className='px-6'>Kristin</td>
                <td  className='px-6'>Product Associate</td>
                <td  className='px-6'>kristin@gamil.com</td>
            </tr>
            <tr className='odd:bg-green-300 even:bg-amber-300'>
                
                <td  className='px-6'>Kristin</td>
                <td  className='px-6'>Product Associate</td>
                <td  className='px-6'>kristin@gamil.com</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table

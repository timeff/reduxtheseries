import React,{ PropTypes} from 'react'
import {Link} from 'react-router'


const Page =({id,title}) => (
    <tr>
            <th>{id}</th>
            <td>{title}</td>
            <td>
              <Link to={{pathname:'/pages/'+id}}>Show</Link>
            </td>
          </tr>
)

Page.PropTypes={
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired
}

export default Page
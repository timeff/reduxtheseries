import React, { Component, PropTypes } from 'react';
import Page from './page'



const Pages =({
  pages,
  onReloadPages
})=>(
      <div>
        <button onClick={()=>onReloadPages()}>Reload Page</button>
        <table className='table'>
        <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          { pages.map((page) => (
            <Page key={page.id} 
            page={page}
            id={page.id}
            title={page.title} 
            />
          )
          )}
          </tbody>
        </table>
      </div>
);

Pages.PropTypes={
  pages:PropTypes.array.isRequired,
  onReloadPages:PropTypes.func.isRequired
}
  


export default Pages;

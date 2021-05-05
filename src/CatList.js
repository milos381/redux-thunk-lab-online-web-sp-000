import React from 'react';
//debugger
//let justPics = this.props.catPics.map(img => <img src={img.url}></img>)
class CatList extends React.Component {
    
  render() {
    return (
      <div>
        {this.props.catPics.map(img => <div key={img.id}><img src={img.url} alt='cat'></img></div>)}
      </div>
    );
  }
} 
export default CatList


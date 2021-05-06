import React from 'react';
//
/*        if (this.props.loading === true) {
            'LOADING CATS'
        } else {
            setTimeout(() => {
                this.props.catPics.map(img => <div key={img.id}><img src={img.url} alt='cat'></img></div>)
            }, 1000);
        } */
class CatList extends React.Component {
    
  render() {
    return (
      <div>
        {
            (this.props.loading === true) ? 'LOADING CATS...' : this.props.catPics.map(img => <div key={img.id}><img src={img.url} alt='cat'></img></div>)
        }
      </div>
    );
  }
} 
export default CatList



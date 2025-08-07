// function Favorites(){
//     return(
//         <div className="favorites-empty">
//             <h2>No favorite in this page</h2>
//             <h3>Start Clicking favorites butoon to add and see the list.</h3>
//         </div>
//     )
// }
// export default Favorites;

import React from 'react';
import './Favorites.css'; // optional: for styling if needed

function Favorites({ items = [] }) {
    const isEmpty = items.length === 0;

    return (
        <section className="favorites">
            {isEmpty ? (
                <div className="favorites__empty">
                    <h2 className="favorites__title">No favorites yet</h2>
                    <p className="favorites__message">
                        Start clicking the favorite button to add items to your list.
                    </p>
                </div>
            ) : (
                <ul className="favorites__list">
                    {items.map((item, index) => (
                        <li key={index} className="favorites__item">
                            {/* Replace this with your item display logic */}
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default Favorites;
{/* <Favorites items={[]} />   // shows the empty message
<Favorites items={[{ name: "Item 1" }, { name: "Item 2" }]} />  // shows favorite items */}

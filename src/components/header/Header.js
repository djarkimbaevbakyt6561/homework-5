import './Header.css'
import { useState } from 'react';
import Modal from '../modal/Modal';

function Header({onSubmit}) {
    const [showModal, setShowModal] = useState(false);
    function openAndCloseExpensesFormHandler() {
        setShowModal((prev) => !prev);
    }
    return (
        <div>
            <div className='header'>
                <h1>Favourite Movies</h1>
                <button className='add-movie' onClick={() => setShowModal(true)}>ADD MOVIE</button>
            </div>
            {showModal ?  <Modal onSubmit={onSubmit} onClick={openAndCloseExpensesFormHandler}  className='modal visible' /> : <Modal className="modal"  />}
        </div>

    );
}

export default Header;
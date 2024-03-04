import React, { useState } from 'react';
import './DropdownMenu.css';

function DropDownMenu(){
    //State to track whether the dropdown menu is open or closed
    //const [isOpen, setIsOpen] = useState(false);

    //Function to toggle the dropdown state
    /*const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };*/

    return (
        <div className="dropdown">

            {/*Dropdown menu */}
            
                <ul className="dropdown-menu">
                    <li>
                        <a href="https://havells.com/">
                        <img src="https://havells.com/consumer/Content/images/havells-logo.png" alt="Havells" />
                        </a>
                        </li>
                    <li>
                        <a href="https://www.mylloyd.com/">
                        <img src="https://havells.com/consumer/Content/images/LLOYD-logos.png" alt="Lloyd" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.standardelectricals.com/">
                        <img src="https://havells.com/consumer/Content/images/Standard-Logos.png" alt="Standard" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.crabtreeindia.com/">
                        <img src="https://havells.com/consumer/Content/images/Crabtree-Logos.png" alt = "Crabtree" />
                        </a>
                    </li>
                    <li>
                        <a href="https://reo.havells.com/">
                        <img src="https://havells.com/consumer/Content/images/REO-Logos.png" alt = "REO" />
                        </a>
                    </li>
                    <li>
                        <a href="https://havells.com/consumer/">
                        <img src="https://w7.pngwing.com/pngs/283/132/png-transparent-house-business-real-estate-logo-service-house-text-service-room-thumbnail.png" alt="Home" width="30" height="30"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://havells.com/consumer/Home/Videos">
                        VIDEOS
                        </a>
                    </li>
                    <li>
                        <a href="">
                        REGISTER
                        </a>
                    </li>
                    <li>
                        <a href="">
                        SIGNIN
                        </a>
                    </li>
                </ul>

        </div>
    );
}

export default DropDownMenu;
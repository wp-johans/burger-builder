import React from 'react';
import Auxi from '../../hoc/Auxi';
import './Layout.css';

const layout = (props) => (
    <Auxi>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className='Content'>
            {props.children}
        </main>
    </Auxi>
);

export default layout;
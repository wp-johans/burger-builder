import React from 'react';
import Auxi from '../../hoc/Auxi';
import Classes from './Layout.css';

const layout = (props) => (
    <Auxi>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Auxi>
);

export default layout;
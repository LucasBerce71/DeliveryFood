import React from 'react';
import { Appbar } from 'react-native-paper';

import IHeader from '../../interfaces/components/IHeader';

export const Header: React.FC<IHeader> = ({ isBackAction, title }) => {
    return (
        <Appbar>
            {isBackAction && (
                <Appbar.BackAction />
            )}
            <Appbar.Content title={title} />
        </Appbar>
    );
}
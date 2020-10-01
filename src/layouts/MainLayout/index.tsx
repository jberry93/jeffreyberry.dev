import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import * as styles from './MainLayout.module.scss';
import { Props } from './MainLayout.interfaces';

export const MainLayout: FunctionComponent<Props> = (props: Props): ReactElement<Props> => {
    return (
        <>
            <main>{props.children}</main>
        </>
    );
}

import React, { memo, Fragment } from 'react';
import { Link } from 'gatsby';

interface Route {
    key: number;
    label: string;
    route: string;
}

const routes: Route[] = [
    {key: 0, label: 'Home', route: '/'},
    {key: 1, label: 'About', route: '/about'},
    {key: 2, label: 'Tags', route: '/tags'},
];

export const MainLayout: React.SFC = memo(({ children }) => (
    <Fragment>
        <header>
            <nav style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
            }}>
                <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    margin: '0',
                    padding: '0',
                }}>
                    {routes.map((routeObject: Route) => (
                        <li style={{ margin: '0 5px' }} key={routeObject.key}>
                            <Link
                                style={{
                                    margin: '5px',
                                    fontSize: '18px',
                                }}
                                to={routeObject.route}
                            >{routeObject.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        <main className="content-wrapper">
            {children}
        </main>
    </Fragment>
));

import React, { memo, Fragment } from 'react';
import { Link } from 'gatsby';
import { css } from 'glamor';

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

const navStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
});

const ulStyle = css({
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '0',
    padding: '0',
});

const liStyle = css({ margin: '0 5px' });

const linkStyle = css({
    margin: 5,
    fontSize: 18,
});

const contentWrapperStyle = css({
    marginTop: 20,
    padding: '0 20px',
});

export const MainLayout: React.SFC = memo(({ children }) => (
    <Fragment>
        <header>
            <nav {...navStyle}>
                <ul {...ulStyle}>
                    {routes.map((routeObject: Route) => (
                        <li {...liStyle} key={routeObject.key}>
                            <Link
                                {...linkStyle}
                                to={routeObject.route}
                            >{routeObject.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        <main {...contentWrapperStyle}>
            {children}
        </main>
    </Fragment>
));

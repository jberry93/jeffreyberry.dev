import React, { memo, Fragment } from 'react';
import { Link } from 'gatsby';

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
                    <li style={{ margin: '0 5px' }}>
                        <Link
                            style={{
                                margin: '5px',
                                fontSize: '18px',
                            }}
                            to="/"
                        >Home</Link>
                    </li>
                    <li style={{ margin: '0 5px' }}>
                        <Link
                            style={{
                                margin: '5px',
                                fontSize: '18px',
                            }}
                            to="/about"
                        >About</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer style={{ display: 'none' }}>
            Powered by <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a> and <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
        </footer>
    </Fragment>
));

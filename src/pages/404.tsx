import * as React from 'react';
import { Link } from 'gatsby';

import { MainLayout } from '../layouts';
import { SEO } from '../components';

export default () => (
    <MainLayout>
        <SEO title="404"/>
        <section style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <h1 style={{ textAlign: 'center' }}>Sorry nothing to see here!</h1>
            <Link
                to="/"
                className="button"
                style={{
                    marginTop: 10,
                }}
            >Go Home</Link>
        </section>
    </MainLayout>
);

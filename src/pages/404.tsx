import * as React from 'react';
import { Link } from 'gatsby';
import { css } from 'glamor';

import { MainLayout } from '../layouts';
import { SEO } from '../components';

const sectionStyle = css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
});

const centerizeH1 = css({ textAlign: 'center' });

const linkStyle = css({
    marginTop: 10,
    border: '1px solid #FAFAFA',
    padding: '5px 10px',
    borderRadius: 8,
    transition: '0.8s',
    ':hover': {
        backgroundColor: '#00C853',
        border: '1px solid #00C853',
    },
});

export default () => (
    <MainLayout>
        <SEO title="404"/>
        <section {...sectionStyle}>
            <h1 {...centerizeH1}>Sorry nothing to see here!</h1>
            <Link
                to="/"
                {...linkStyle}
            >Go Home</Link>
        </section>
    </MainLayout>
);

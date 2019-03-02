import React, { Component } from 'react';
import { MainLayout } from '../layouts';

interface Props {};

interface State {};

export default class IndexPage extends Component<Props, State> {
    public render() {
        return (
            <MainLayout>
                <section style={{
                    margin: '10px auto',
                    maxWidth: 650,
                    padding: '0 10px',
                }}>
                    <h3>Blog posts!</h3>
                </section>
            </MainLayout>
        );
    }
}

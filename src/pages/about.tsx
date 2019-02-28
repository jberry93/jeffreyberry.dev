import React, { Component } from 'react';
import { MainLayout } from '../layouts';

type Props = {};

type State = {}

export default class AboutPage extends Component<Props, State> {
    public render() {
        return (
            <MainLayout>
                <h1>About page</h1>
                <p>Sup ;D</p>
            </MainLayout>
        );
    }
}

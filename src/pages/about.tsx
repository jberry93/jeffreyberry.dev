import React, { Component } from 'react';
import { MainLayout } from '../layouts';

interface Props {};

interface State {}

export default class AboutPage extends Component<Props, State> {
    public render() {
        return (
            <MainLayout>
                <section style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <h1 style={{
                        textAlign: 'center',
                        fontSize: 32,
                    }}>Jeffrey Berry</h1>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}>
                        <a
                            href="https://github.com/jberry93"
                            target="_blank"
                            style={{
                                fontSize: 18,
                            }}
                        >Github</a>
                        <a
                            href="https://www.linkedin.com/in/jeffrey-berry-82154a3a/"
                            target="_blank"
                            style={{
                                fontSize: 18,
                            }}
                        >LinkedIn</a>
                    </div>
                </section>
            </MainLayout>
        );
    }
}

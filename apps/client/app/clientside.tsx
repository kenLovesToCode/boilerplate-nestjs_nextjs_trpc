'use client';

import { useEffect, useState } from 'react';
import { trpc } from './trpc';

const ClientSide = () => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        trpc.hello.query({ name: 'Client side' }).then((response) => {
            setGreeting(response);
        });
    }, []);

    return <div>I am a client side only component - {greeting}</div>;
};

export default ClientSide;

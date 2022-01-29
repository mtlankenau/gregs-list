import React from 'react';

export default function CreateAccountButton({ name, link }) {

    return (
        <div>
            <a href={link}>
                <button>
                    {name}
                </button>
            </a>
        </div>
    );
}


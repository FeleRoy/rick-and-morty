import React from 'react';

interface CharacterSearchFormProps {

}

const CharacterSearchForm: React.FC<CharacterSearchFormProps> = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
        </form>
    );
};

export default CharacterSearchForm;